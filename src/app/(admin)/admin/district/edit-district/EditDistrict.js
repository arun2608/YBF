"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const EditDistrict = () => {
  const styles = {
    messageStyle: {
      fontSize: "15px",
      color: "red",
    },
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState([]);
  const [district, setDistrict] = useState("");
  const [stateErr, setStateErr] = useState(false);
  const [districtErr, setDistrictErr] = useState(false);

  useEffect(() => {
    getStateList();
    if (id) {
      getDistrictData();
    }
  }, [id]);

  const getDistrictData = async () => {
    try {
      const response = await axios.post("/api/admin/district/districtById", {
        id: id,
      });
      if (response.data.status === 1) {
        setState(response.data.data.districtData.state);
        setDistrict(response.data.data.districtData.district);        
      }
    } catch (error) {
      console.error(
        "Error fetching district:",
        error.response?.data || error.message
      );
    }
  };

  const getStateList = async () => {
    try {
      const response = await axios.get("/api/admin/state/state-list");
      if (response.data.status == 1) {
        setStateList(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStateErr(false);
    setDistrictErr(false);
    
    const isStateValid = state.length !== 0;
    const isDistrictValid = district.length !== 0;
    

    if (!isStateValid || !isDistrictValid) {
        if (!isStateValid) setStateErr(true);
        if (!isDistrictValid) setDistrictErr(true);        
        return;
    }

    try {
        const formdata = new FormData();
        formdata.append("id",id);
        formdata.append("state",state);
        formdata.append("district",district);
        
        const response = await axios.post('/api/admin/district/update-district', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.data.status === 1) {
            toast("District created successfully!");
            router.push("/admin/district");
        }else if (response.data.status === 2) {
          toast("District already exist!");
        }else {
          toast("Please try again later.");
        }
    } catch (error) {
        console.error("Error submitting form:", error.response?.data || error.message);
    }
};

  return (
    <>
      <ToastContainer />
      <div className="content-wrapper">
        <div className="container-full">
          <section className="content">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-4">Create District</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="simpleinput" className="form-label">
                          State
                        </label>
                        <select
                          name="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="form-control"
                          
                        >
                          <option value="">Select State</option>
                          {stateList.map((item, ind) => (
                            <option value={item._id} key={ind}>
                              {item.state}
                            </option>
                          ))}
                        </select>
                        {stateErr ? (<p className="message" style={styles.messageStyle}>Select state</p>) : ("")}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">District</label>
                        <input
                          type="text"
                          name="district"
                          className="form-control"
                          placeholder="Enter district name"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                        {districtErr ? (<p className="message" style={styles.messageStyle}>Enter district</p>) : ("")}
                      </div>
                    </div>
                  </div>
                  <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EditDistrict;
