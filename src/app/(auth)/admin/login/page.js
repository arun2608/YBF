"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const styles = {
    messageStyle: {
      fontSize: "15px",
      color: "red",
    },
  };

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [invalidErr, setInvalidErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data) => {
    data.preventDefault();

    setEmailErr(false);
    setPasswordErr(false);

    // Validate all fields first
    const isEmailValid = email.length > 0;
    const isPasswordValid = password.length > 0;

    if (!isEmailValid || !isPasswordValid) {
      if (!isEmailValid) setEmailErr(true);
      if (!isPasswordValid) setPasswordErr(true);
      return;
    }

    try {
      const response = await axios.post("/api/admin-login", {
        email,
        password,
      });

      setInvalidErr(false);
      console.log(response.data);
      if (response.data.status === 1) {
        await signIn("credentials", {
          id: response.data.data.id,
          name: response.data.data.name,
          role: response.data.data.role,
          redirect: false,
        });

        toast("Login Successful!");
        router.push("/admin");
      } else {
        setInvalidErr(true);
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
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center g-0">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary fw-600">Let's Get Started</h2>
                    <p className="mb-0 text-fade">Sign in to continue.</p>
                  </div>
                  <div className="p-40">
                    <form>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <span className="input-group-text bg-transparent">
                            <i className="text-fade ti-user"></i>
                          </span>
                          <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                            placeholder="Enter Email"
                          />
                        </div>
                        {emailErr ? (
                          <p className="message" style={styles.messageStyle}>
                            {" "}
                            Enter valid email id{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <span className="input-group-text  bg-transparent">
                            <i className="text-fade ti-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                            placeholder="Enter Password"
                          />
                        </div>
                        {passwordErr ? (
                          <span className="message" style={styles.messageStyle}>
                            {" "}
                            Enter password{" "}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn btn-primary w-p100 mt-10"
                          >
                            SIGN IN
                          </button>
                        </div>
                        {invalidErr ? (
                          <p className="message" style={styles.messageStyle}>
                            Invalid email id & password!
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
