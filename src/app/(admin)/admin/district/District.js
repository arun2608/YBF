"use client";

import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const District = () => {
  const [districtList, setDistrictList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getDistrictList(); // Fetch the district list when the component mounts
    getStateList(); // Fetch all states
  }, []);

  const handleDistrictStatus = async (id, status) => {
    try {
      const response = await axios.post("/api/admin/district/update-status", {
        id,
        status,
      });
  
      if (response.data.status === 1) {
        toast("Status updated successfully!");
        getDistrictList();
      } else {
        toast("Failed to update status. Please try again.");
      }
    } catch (error) {
      console.error("Error updating status:", error.response?.data || error.message);
      toast("Something went wrong!");
    }
  };

  // Fetch district data
  const getDistrictList = async () => {
    try {
      const response = await axios.get("/api/admin/district");
      if (response.data.status === 1) {
        setDistrictList(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error fetching district list:",
        error.response?.data || error.message
      );
    }
  };

  // Fetch state list for better state name lookup
  const getStateList = async () => {
    try {
      const response = await axios.get("/api/admin/state");
      if (response.data.status === 1) {
        setStateList(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error fetching state list:",
        error.response?.data || error.message
      );
    }
  };

  // Filtered data based on search term (search by district or state)
  const filteredList = districtList.filter(
    (item) =>
      item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  // Get state name by id
  const getStateName = (stateId) => {
    const state = stateList.find((state) => state._id === stateId); // Fix here
    return state ? state.state : "Unknown"; // Use state.state to get the state name
  };

  return (
    <>
    <ToastContainer/>
      <div className="content-wrapper">
        <div className="container-full">
          <section className="content">
            <div className="card bg-white-900">
              <div className="card-header">
                <h4 className="card-title">District List</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="box">
                  <div className="box-body">
                    <div className="row mb-2">
                      <div className="col-xl-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by district or state..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="col-xl-6">
                        <div className="add-order text-xl-end mt-xl-0 mt-2">
                          <Link
                            href="/admin/district/create-district"
                            className="btn btn-primary mb-2 me-2">
                            <i className="bi bi-plus-lg"></i> Add District
                          </Link>
                          
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table
                        className="text-fade table table-bordered"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr className="text-dark">
                            <th>#</th>
                            <th>State</th>
                            <th>District</th>
                            <th style={{ width: "130px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentItems.map((item, index) => (
                            <tr key={index}>
                              <td className="text-dark">
                                {indexOfFirstItem + index + 1}
                              </td>
                              <td>{getStateName(item.state)}</td>
                              <td>{item.district}</td>
                              <td>
                                  <Link href={`/admin/district/edit-district?id=${item._id}`} className="action-icon mx-2">
                                    <i className="fa-solid fa-square-pen"></i>
                                  </Link>
                                  {item.status == 1 ? 
                                  <Link href="#" className="action-icon" 
                                  onClick={() => {
                                    const confirmed = window.confirm("Are you sure you want to deactivate this district?");
                                    if (confirmed) {
                                      handleDistrictStatus(item._id, "0");
                                    }
                                  }}
                                  >
                                    <i className="fa-solid fa-check"></i>
                                  </Link>
                                  :
                                  <Link href="#" className="action-icon" 
                                  onClick={() => {
                                    const confirmed = window.confirm("Are you sure you want to activate this district?");
                                    if (confirmed) {
                                      handleDistrictStatus(item._id, "1");
                                    }
                                  }}
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </Link>
                                  }
                                </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination Controls */}
                    <div className="pagination mt-3 d-flex justify-content-center">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <span className="align-self-center">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default District;
