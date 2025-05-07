"use client"

import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const EditUser = () => {
    const styles = {
        messageStyle: {
          fontSize: "15px",
          color: "red",
        },
      };
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [mobileErr, setMobileErr] = useState(false);

    useEffect(() => {
        if (id) {
          getUserData();
        }
      }, [id]);
    
      const getUserData = async () => {
        try {
          const response = await axios.post("/api/admin/user/userById", {
            id: id,
          });
          if (response.data.status === 1) {
            setName(response.data.data.name);
            setEmail(response.data.data.email);
            setMobile(response.data.data.mobile);
            
          }
        } catch (error) {
          console.error(
            "Error fetching service:",
            error.response?.data || error.message
          );
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setNameErr(false);
        setEmailErr(false);
        setMobileErr(false);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;

        // Validate all fields first
        const isNameValid = name.length > 0;
        const isEmailValid = email.length > 0 || emailRegex.test(email);
        const isMobileValid = mobile.length > 0 || mobileRegex.test(mobile);
    
        if (!isNameValid || !isEmailValid || !isMobileValid) {
            if (!isNameValid) setNameErr(true);
            if (!isEmailValid) setEmailErr(true);
            if (!isMobileValid) setMobileErr(true);

            return;
        }

        try {
            const formdata = new FormData();
            formdata.append("id",id);
            formdata.append("name",name);
            formdata.append("email",email);
            formdata.append("mobile",mobile);
    
            const response = await axios.post('/api/admin/user/update-user', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.status === 1) {
                toast("User updated successfully!");
                router.push("/admin/user");
            }else if (response.data.status === 2) {
                toast("Email already exist!");
            }else if (response.data.status === 3) {
                toast("Mobile already exist!");
            } else {
                toast("Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
        }
    };
    return (
        <>
            <ToastContainer/>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-bordered mb-3 d-flex justify-content-between">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Edit User</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Name</label>
                                                        <input type="text" name="name" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                                                        {nameErr ? ( <p className="message" style={styles.messageStyle}> Enter name </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Email</label>
                                                        <input type="text" name="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                        {emailErr ? ( <p className="message" style={styles.messageStyle}> Enter valid email id </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Mobile</label>
                                                        <input type="text" name="mobile" className="form-control" placeholder="Enter Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                                                        {mobileErr ? ( <p className="message" style={styles.messageStyle}> Enter valid mobile no. </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                
                                                
                                                
                                            </div>    
                                        </form>
                                    </div>
                                </div>

                                <button type="submit" onClick={handleSubmit} className='mt-4 btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
};

export default EditUser;