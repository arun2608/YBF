"use client"

import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-datepicker/dist/react-datepicker.css";

import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";


const CreateBlog = () => {
    const styles = {
        messageStyle: {
          fontSize: "11px",
          color: "red",
        },    
      };
    const router = useRouter();

    const [heading, setHeading] = useState("");
    const [headingUrl, setHeadingUrl] = useState("");
    const [blogDate, setBlogDate] = useState(new Date());
    const [thumbImage, setThumbImage] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    
    
    const editor = useRef(null);
	const [description, setDescription] = useState('');

	const config = useMemo(() => ({
			readonly: false, 
		}),

	);

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

        setHeadingErr(false);
        setHeadingUrlErr(false);
        setBlogDateErr(false);
        setShortDescriptionErr(false);
        setDescriptionErr(false);
        setThumbImageErr(false);
        setBannerImageErr(false);
        setMetaTitleErr(false);
        setMetaDescriptionErr(false);

        const isHeadingValid = heading.length > 0;
        const isHeadingUrlValid = headingUrl.length > 0;
        const isBlogDateValid = blogDate instanceof Date && !isNaN(blogDate.getTime());
        const isShortDescriptionValid = shortDescription.length > 0;
        const isDescriptionValid = description.length > 0;
        const isThumbImageValid = !!thumbImage;
        const isBannerImageValid = !!bannerImage;
        const isMetaTitleValid = metaTitle.length > 0;
        const isMetaDescriptionValid = metaDescription.length > 0;
    
        if (!isHeadingValid || !isHeadingUrlValid || !isBlogDateValid || !isShortDescriptionValid || !isDescriptionValid || !isThumbImageValid || !isBannerImageValid || !isMetaTitleValid || !isMetaDescriptionValid) {
            if (!isHeadingValid) setHeadingErr(true);
            if (!isHeadingUrlValid) setHeadingUrlErr(true);
            if (!isBlogDateValid) setBlogDateErr(true);
            if (!isShortDescriptionValid) setShortDescriptionErr(true);
            if (!isDescriptionValid) setDescriptionErr(true);
            if (!isThumbImageValid) setThumbImageErr(true);
            if (!isBannerImageValid) setBannerImageErr(true);
            if (!isMetaTitleValid) setMetaTitleErr(true);
            if (!isMetaDescriptionValid) setMetaDescriptionErr(true);

            return;
        }

        try {
            const formdata = new FormData();
            formdata.append("heading",heading);
            formdata.append("heading_url",headingUrl);
            formdata.append("blog_date",blogDate);
            formdata.append("thumb_image",thumbImage);
            formdata.append("banner_image",bannerImage);
            formdata.append("short_description",shortDescription);
            formdata.append("description",description);
            formdata.append("meta_title",metaTitle);
            formdata.append("meta_description",metaDescription);

            const response = await axios.post('/api/admin/blog/create-blog', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.status === 1) {
                toast("Blog created successfully!");
                router.push("/admin/blog");
            }else if (response.data.status === 2) {
                toast("Blog already exist!");
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
                                            <h4 className="header-title">Create Blog</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Heading</label>
                                                        <input type="text" name="heading" className="form-control" placeholder="Enter heading" value={heading} onChange={(e) => setHeading(e.target.value)}/>
                                                        {headingErr ? ( <p className="message" style={styles.messageStyle}> Enter heading </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Heading (slug)</label>
                                                        <input type="text" name="headingUrl" className="form-control" placeholder="Enter heading (slug)" value={headingUrl} onChange={(e) => setHeadingUrl(e.target.value)}/>
                                                        {headingUrlErr ? ( <p className="message" style={styles.messageStyle}> Enter heading (slug) </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Blog Date</label>
                                                        <br/>
                                                        <DatePicker
                                                            name="blog_date"
                                                            selected={blogDate}
                                                            onChange={(date) => setBlogDate(date)}
                                                            className="form-control"
                                                            dateFormat="yyyy-MM-dd" // recommended for consistent format
                                                            placeholderText="Select blog date"
                                                            />                                                        
                                                            {blogDateErr ? ( <p className="message" style={styles.messageStyle}> Enter blog date </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Short Description</label>
                                                        <textarea name="short_description" className="form-control" placeholder="Enter short description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}></textarea>
                                                        {shortDescriptionErr ? ( <p className="message" style={styles.messageStyle}> Enter short description </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Thumb Image</label>
                                                        <input type="file" name="thumb_image" className="form-control" placeholder="Enter blog date" onChange={(e) => setThumbImage(e.target.files[0])}/>
                                                        {thumbImageErr ? ( <p className="message" style={styles.messageStyle}> Choose thumb image </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Banner Image</label>
                                                        <input type="file" name="banner_image" className="form-control" placeholder="Enter blog date" onChange={(e) => setBannerImage(e.target.files[0])}/>
                                                        {bannerImageErr ? ( <p className="message" style={styles.messageStyle}> Choose banner image </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <JoditEditor
                                                        ref={editor}
                                                        value={description}
                                                        name="description"
                                                        config={config}
                                                        className="form-control"
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => {}}
                                                    />
                                                {descriptionErr ? ( <p className="message" style={styles.messageStyle}> Enter description </p>) : ("")}    

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Meta Title</label>
                                                        <textarea name="meta_title" className="form-control" placeholder="Enter meta title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)}></textarea>
                                                        {metaTitleErr ? ( <p className="message" style={styles.messageStyle}> Enter meta title </p>) : ("")}
                                                    </div>                                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Meta Description</label>
                                                        <textarea name="meta_description" className="form-control" placeholder="Enter Meta Description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}></textarea>
                                                        {metaDescriptionErr ? ( <p className="message" style={styles.messageStyle}> Enter meta description </p>) : ("")}
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

export default CreateBlog;