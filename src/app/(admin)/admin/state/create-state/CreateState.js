"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateState = () => {
  const router = useRouter();
  const [state, setState] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (!state.trim()) {
      setError(true);
      return;
    }

    try {
      const { data } = await axios.post("/api/admin/state/create-state", {
        state: state,
      });

      if (data.status === 1) {
        toast.success("State created successfully!");
        router.push("/admin/state");
      } else if (data.status === 2) {
        toast.warning("State already exists!");
      } else {
        toast.error("Please try again later.");
      }
    } catch (error) {
      console.error("Error creating state:", error);
      toast.error("Something went wrong.");
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
                <h4 className="header-title mb-4">Create State</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          placeholder="Enter state name"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                        {error && (
                          <span className="text-danger" style={{ fontSize: "14px" }}>
                            Please enter state name
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
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

export default CreateState;
