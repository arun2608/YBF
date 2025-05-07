"use client";

import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";

const EditBlog = ({ blogId }) => {
  const router = useRouter();

  const styles = {
    messageStyle: {
      fontSize: "11px",
      color: "red",
    },
  };

  useEffect(() => {
    if (blogId) {
      getBlogData();
    }
  }, [blogId]);

  const getBlogData = async () => {
    if (!blogId) {
      console.error("Blog ID is missing");
      return;
    }

    try {
      const response = await axios.post("/api/admin/blog/blogById", {
        id: blogId,
      });
      if (response.data?.status === 1) {
        setHeading(response.data.data.heading);
        setHeadingUrl(response.data.data.heading_url);
        setBlogDate(new Date(response.data.data.blog_date));
        setShortDescription(response.data.data.short_description);
        setThumbImage(response.data.data.thumb_image);
        setBannerImage(response.data.data.banner_image);
        setMetaTitle(response.data.data.meta_title);
        setMetaDescription(response.data.data.meta_description);
        setDescription(response.data.data.description);
      } else {
        console.error("Failed to fetch blog data", response.data?.message);
      }
    } catch (error) {
      console.error(
        "Error fetching blog data:",
        error.response?.data || error.message
      );
    }
  };

  const [heading, setHeading] = useState("");
  const [headingUrl, setHeadingUrl] = useState("");
  const [blogDate, setBlogDate] = useState(new Date());
  const [thumbImage, setThumbImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const editor = useRef(null);
  const config = useMemo(() => ({ readonly: false }), []);

  const [headingErr, setHeadingErr] = useState(false);
  const [headingUrlErr, setHeadingUrlErr] = useState(false);
  const [blogDateErr, setBlogDateErr] = useState(false);
  const [shortDescriptionErr, setShortDescriptionErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [thumbImageErr, setThumbImageErr] = useState(false);
  const [bannerImageErr, setBannerImageErr] = useState(false);
  const [metaTitleErr, setMetaTitleErr] = useState(false);
  const [metaDescriptionErr, setMetaDescriptionErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHeadingErr(!heading);
    setHeadingUrlErr(!headingUrl);
    setBlogDateErr(!(blogDate instanceof Date && !isNaN(blogDate.getTime())));
    setShortDescriptionErr(!shortDescription);
    setDescriptionErr(!description);
    setThumbImageErr(!thumbImage);
    setBannerImageErr(!bannerImage);
    setMetaTitleErr(!metaTitle);
    setMetaDescriptionErr(!metaDescription);

    if (
      !heading ||
      !headingUrl ||
      !blogDate ||
      !shortDescription ||
      !description ||
      !metaTitle ||
      !metaDescription
    )
      return;

    try {
      console.log(blogId);
      const formData = new FormData();
      formData.append("id", blogId);
      formData.append("heading", heading);
      formData.append("heading_url", headingUrl);
      formData.append("blog_date", blogDate);
      if (thumbImage) {
        formData.append("thumb_image", thumbImage);
      }
      if (bannerImage) {
        formData.append("banner_image", bannerImage);
      }

      formData.append("short_description", shortDescription);
      formData.append("description", description);
      formData.append("meta_title", metaTitle);
      formData.append("meta_description", metaDescription);

      const response = await axios.post(
        "/api/admin/blog/update-blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.data.status === 1) {
        toast("Blog updated successfully!");
        router.push("/admin/blog");
      } else if (response.data.status === 2) {
        toast("Blog already exist!");
      } else {
        toast("Please try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error submitting form.");
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
                <h4 className="header-title">Edit Blog</h4>
                <form>
                  <div className="row">
                    {/* Heading */}
                    <div className="col-md-4">
                      <label>Heading</label>
                      <input
                        type="text"
                        className="form-control"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                      />
                      {headingErr && (
                        <p style={styles.messageStyle}>Enter heading</p>
                      )}
                    </div>

                    {/* Slug */}
                    <div className="col-md-4">
                      <label>Heading (slug)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={headingUrl}
                        onChange={(e) => setHeadingUrl(e.target.value)}
                      />
                      {headingUrlErr && (
                        <p style={styles.messageStyle}>Enter heading (slug)</p>
                      )}
                    </div>

                    {/* Blog Date */}
                    <div className="col-md-4">
                      <label>Blog Date</label>
                      <DatePicker
                        selected={blogDate}
                        onChange={setBlogDate}
                        className="form-control"
                        dateFormat="yyyy-MM-dd"
                      />
                      {blogDateErr && (
                        <p style={styles.messageStyle}>Enter blog date</p>
                      )}
                    </div>

                    {/* Short Description */}
                    <div className="col-md-4">
                      <label>Short Description</label>
                      <textarea
                        className="form-control"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                      />
                      {shortDescriptionErr && (
                        <p style={styles.messageStyle}>
                          Enter short description
                        </p>
                      )}
                    </div>

                    {/* Thumb Image */}
                    <div className="col-md-2">
                      <label>Thumb Image</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setThumbImage(e.target.files[0])}
                      />
                      {thumbImageErr && (
                        <p style={styles.messageStyle}>Choose thumb image</p>
                      )}
                    </div>

                    {thumbImage && (
                      <div className="col-md-2">
                        <img
                          src={`/uploads/blog/${thumbImage}`}
                          alt="Thumb Preview"
                          style={{
                            width: "100px",
                            height: "auto",
                            marginTop: "20px",
                          }}
                        />
                      </div>
                    )}

                    <div className="col-md-2">
                      <label>Banner Image</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setBannerImage(e.target.files[0])}
                      />
                      {bannerImageErr && (
                        <p style={styles.messageStyle}>Choose banner image</p>
                      )}
                    </div>

                    {bannerImage && (
                      <div className="col-md-2">
                        <img
                          src={`/uploads/blog/${bannerImage}`}
                          alt="Thumb Preview"
                          style={{
                            width: "100px",
                            height: "auto",
                            marginTop: "20px",
                          }}
                        />
                      </div>
                    )}

                    {/* Jodit Editor */}
                    <div className="col-12">
                      <label>Description</label>
                      <JoditEditor
                        ref={editor}
                        value={description}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => setDescription(newContent)}
                      />
                      {descriptionErr && (
                        <p style={styles.messageStyle}>Enter description</p>
                      )}
                    </div>

                    {/* Meta Title */}
                    <div className="col-md-6">
                      <label>Meta Title</label>
                      <textarea
                        className="form-control"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                      />
                      {metaTitleErr && (
                        <p style={styles.messageStyle}>Enter meta title</p>
                      )}
                    </div>

                    {/* Meta Description */}
                    <div className="col-md-6">
                      <label>Meta Description</label>
                      <textarea
                        className="form-control"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                      />
                      {metaDescriptionErr && (
                        <p style={styles.messageStyle}>
                          Enter meta description
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 btn btn-primary"
                  >
                    Update Blog
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

export default EditBlog;
