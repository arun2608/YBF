"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateCity = () => {
  const styles = {
    messageStyle: {
      fontSize: "15px",
      color: "red",
    },
  };
  const router = useRouter();
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState([]);
  const [district, setDistrict] = useState("");
  const [districtList, setDistrictList] = useState("");
  const [city, setCity] = useState("");
  const [stateErr, setStateErr] = useState(false);
  const [districtErr, setDistrictErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getStateList();
  }, []);

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

  const handleStateChange = async (event) => {
    const state = event.target.value;
    setState(state);
    try {
      const response = await axios.post("/api/district", {
        state: state,
      });
      if (response.data.status == 1) {
        setDistrictList(response.data.data);
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
    const isCityValid = city.length !== 0;

    if (!isStateValid || !isDistrictValid || !isCityValid) {
      if (!isStateValid) setStateErr(true);
      if (!isDistrictValid) setDistrictErr(true);
      if (!isCityValid) setCityErr(true);
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("state", state);
      formdata.append("district", district);
      formdata.append("city", city);

      const response = await axios.post(
        "/api/admin/city/create-city",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.status === 1) {
        toast("City created successfully!");
        router.push("/admin/city");
      } else if (response.data.status === 2) {
        toast("City already exist!");
      } else {
        toast("Please try again later.");
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
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
                          className="form-control"
                          onChange={handleStateChange}
                        >
                          <option value="">Select State</option>
                          {stateList.map((item, ind) => (
                            <option value={item._id} key={ind}>
                              {item.state}
                            </option>
                          ))}
                        </select>
                        {stateErr ? (
                          <p className="message" style={styles.messageStyle}>
                            {" "}
                            Select state{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="simpleinput" className="form-label">
                          District
                        </label>
                        <select
                          name="district"
                          value={district}
                          className="form-control"
                          onChange={(e) => setDistrict(e.target.value)}
                        >
                          <option value="">Select District</option>
                          {districtList.length > 0 ? (
                            districtList.map((item, ind) => (
                              <option value={item._id} key={ind}>
                                {item.district}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>
                              No districts available
                            </option>
                          )}
                        </select>
                        {districtErr ? (
                          <p className="message" style={styles.messageStyle}>
                            {" "}
                            Select district{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          placeholder="Enter city name"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        {cityErr ? (
                          <p className="message" style={styles.messageStyle}>
                            Enter city
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary mt-3"
                  >
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

export default CreateCity;
