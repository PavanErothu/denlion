import blog_gj_logo from "./images/blog_gj_logo.png";
import blog_book_icon from "./images/blog_book_icon.png";
import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
// import RichTextEditor from "react-rte";
import RichTextEditor from "react-rte"
import { Markup } from "interweave";

function BlogAdd() {
  const [blog, setBlog] = useState([]);
  const [blogSearch, setBlogSearch] = useState("");
  const [filter, setFilter] = useState("");
  

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [uploadValidation, setUploadValidation] = useState("");
  const [editor,setEditor] = useState(RichTextEditor.createEmptyValue());
const [editorOnline,setEditorOnline]=useState('');
useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        SEARCH_KEY: blogSearch,
        FILTERS: filter
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
      console.log(res, "response");
      let sampleData = res.data.XSCData.BLOG_LIST;
console.log(sampleData);
      setBlog( sampleData
      );
    });
  }, [blogSearch, filter]);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    // console.log(e.target.value, "date");
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    // console.log(e.target.value);
  };

  const handleSlug = (e) => {
    setSlug(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleContent = (value) => {
    const val=value.toString('html').replace(/\t+/g,'');
    // console.log(val);
    setEditorOnline(val);
    setEditor(value)
  };

  const handleImage = (e) => {

    const file = e.target.files[0];
    if (file.size > 4e6) {
      setUploadValidation("Image should be less than 4mb")
      setImage();
    }
    else {
      setImage(file);
      setUploadValidation("")
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    setTitle("");
    setDate("");
    setCategory("");
    setAuthor("");
    setContent("");

    const formData = new FormData();
    formData.append("BLOG_IMAGE", image);
    formData.append("mod", "Blogs");
    formData.append("actionType", "add-blog");
    formData.append(
      "subAction",
      JSON.stringify({
        TITLE: title,
        CONTENT: content,
        BLOG_DATE: date,
        SLUG:slug,
        CATEGORY: category,
        AUTHOR: author,
      })
    );
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      console.log(response.data);
      // if (response.data.XSCStatus === 0) {
      //   alert("submitted")
      // }
    });
  };

  const handleRemove = (blogId) => {

    const reqData = {
      mod: "Blogs",
      actionType: "delete-blog",
      subAction: JSON.stringify({
        BLOG_ID: blogId
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
      console.log(res, "response");
      let sampleData = res.data.XSCStatus;
      if (sampleData === 0) {
        window.location.reload();
      }
      // setBlog({
      //   blog_data: sampleData.BLOG_LIST,
      // });
    });

  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="mt-3 mx-4 ">
      <div className="">
        <div className="row ">
          <div className="col-2">
            <div><a href="/" className="">
              <img src={blog_gj_logo} alt="logo" style={{ width: "100%" }} />
            </a></div>

          </div>
          <div
            className="col-10"
            style={{
              borderBottom: "2px solid #EBEDEC",
              borderLeft: "2px solid #EBEDEC",
            }}
          >
            <span>
              <b>ADMIN PANEL</b>
            </span>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="row">
        <div className="col-md-2 mt-5">
          <a href="/blogs" className="p-5 text-decoration-none " style={{ fontFamily: "Montserrat",color:"#245D51" }}>
            <img src={blog_book_icon} width="20" alt="blog_img"/>
            <b className="p-2" style={{ fontSize: "0.8rem" }}>
              BLOGS
            </b>
          </a>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                style={{ border: "1.2px solid #DFE1E1" }}
                type="text"

                placeholder="BLOG TITLE"
                value={title}
                required
                className="rounded w-100 my-2 p-2 mt-4"
                onChange={handleTitle}
              />
            </div>

            <input
              style={{ border: "1.2px solid #DFE1E1" }}
              type="date"

              placeholder="BLOG DATE"
              value={date}
              className="rounded w-100 my-2 p-2"
              onChange={handleDate}
              required
            />
            <select
              style={{ border: "1.2px solid #DFE1E1", color: "#515C5A" }}
              type="text"

              className="rounded w-100 my-2 p-2"
              required
              value={category}
              onChange={handleCategory}
            >
              <option>CATEGORY</option>
              {/* <option>General</option> */}
              <option>Tech</option>
              <option>Education</option>
              <option>Health</option>
            </select>
            <input
              type="text"

              placeholder="Slug "
              className="rounded my-2 p-2"
              required
              style={{
                height: "8%",
                width: "100%",
                border: "1.2px solid #DFE1E1",
              }}
              onChange={handleSlug}
              value={slug}
            />
            <input
              type="text"

              placeholder="WRITER NAME"
              className="rounded my-2 p-2"
              required
              style={{
                height: "8%",
                width: "100%",
                border: "1.2px solid #DFE1E1",
              }}
              onChange={handleAuthor}
              value={author}
            />
            <RichTextEditor
            value={editor}
              onChange={handleContent}
            />
            {/* <RichTextEditor initialValue="" getValue={handleContent} /> */}
            <label>
              <b>Upload image</b>
            </label>
            <input
              type="file"
              className="rounded  p-1"
              style={{
                height: "8%",
                width: "100%",
                border: "1.2px solid #DFE1E1",
              }}
              required
              accept="image/jpg,image/jpeg,image/png,"

              onChange={handleImage}
            />
            <div className="text-danger">{uploadValidation}</div>
            <div className="my-4 ">
              <button
                type="submit"
                className="btn p-2"
                style={{
                  width: "50%",
                  height: "100%",
                  background: "#FFAA3B",
                  marginLeft: "25%",
                }}
              // onClick={window.reload()}
              >
                <b>Submit</b>
              </button>
            </div>
          </form>
          <div className="row mt-3" style={{ padding: "1%" }}>
            <div className="col-md-3 mt-2">
              {" "}
              <h6>Guide Junior Blogs</h6>
            </div>
            <div className="col-md-5">
              {" "}
              <span className="blog-input-icons ">
                <i
                  className="fa fa-search ps-2 py-2"
                  style={{ minWidth: "40px" }}
                ></i>
                <input
                  onChange={(e) => setBlogSearch(e.target.value)}
                  style={{
                    width: "15rem",
                    background: "#F0F0F0",
                    border: "none",
                    padding: "0.4rem",
                    paddingLeft: "2rem",
                  }}
                  key="search-bar"
                  // value={keyword}
                  placeholder={"Search mentors by name, skill or role.."}
                // onChange={(e) => onChange(e.target.value)}
                />
              </span>
            </div>
            <div className="col-md-4">
              {" "}
              <span>
                <select
                  style={{
                    border: "1.2px solid #DFE1E1",
                    color: "#515C5A",
                    padding: "0.3rem",
                  }}
                  type="text"

                  className="w-75"
                  required
                  onChange={handleFilter}
                >
                  <option value="">CATEGORY</option>
                  {/* <option value="GENERAL">General</option> */}
                  <option value="TECH">Tech</option>
                  <option value="EDUCATION">Education</option>
                  <option value="HEALTH">Health</option>
                </select>
              </span>
            </div>
          </div>

          {
          (blog!==null)?
          blog.map((blog_details,index) => {
            return (
              <>
                <div key={index} className="row my-2">
                  <div className="col-lg-4">

                    {" "}
                    <img
                      src={
                        "https://dev-api.guidejuniors.com/images/" +
                        blog_details.IMAGE_URL
                      }
                      alt="blog_image"
                      style={{ objectFit: "cover", width: "10rem", height: "7rem", backgroundPosition: "center", backgroundSize: "cover" }}
                    />

                  </div>
                  <div className="col-lg-6 ">

                    <div className="py-lg-">
                      <div>
                        <b
                          style={{ fontFamily: "Montserrat", fontWeight: "900" }}
                        >
                          {blog_details.TITLE}
                        </b>
                      </div>
                      <div>
                        {blog_details.BLOG_DATE}{" "}
                        <span style={{ color: "#FBA93E" }}>{blog_details.CATEGORY}</span>
                      </div>
                      <div>
                        <p className="add_blog_content"
                          style={{
                            fontSize: "0.9rem",
                            fontFamily: "Montserrat",
                            color: "#253331",
                          }}
                        >
                          <Markup content={blog_details.CONTENT}/>
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="pt-lg-5">
                      <span
                        className="px-2 pb-1 "
                        style={{
                          border: "2px solid #FBA93E",
                          borderRadius: "100%",
                          color: "#424F4C",
                          cursor:"pointer"
                        }}
                        onClick={() => handleRemove(blog_details.ID)}
                      >
                        <b>&times;</b>
                      </span>
                    </div>

                  </div>
                </div>
              </>
            );
          }):
          <div align="center">No Blogs Found</div>
          }
        </div>
        <div className="col-md-6" style={{ borderLeft: "2px solid #EBEDEC" }}>
          
        </div>
        <div
          className="col-md-4  mt-3"
          style={{
            border: "2px solid #EBEDEC",
            borderRadius: "2%",
            float: "left",
          }}
        >
          {/* <b> Add a New Blog</b>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                style={{ border: "1.2px solid #DFE1E1" }}
                type="text"

                placeholder="BLOG TITLE"
                value={title}
                required
                className="rounded w-100 my-2 p-2 mt-4"
                onChange={handleTitle}
              />
            </div>

            <input
              style={{ border: "1.2px solid #DFE1E1" }}
              type="date"

              placeholder="BLOG DATE"
              value={date}
              className="rounded w-100 my-2 p-2"
              onChange={handleDate}
              required
            />
            <select
              style={{ border: "1.2px solid #DFE1E1", color: "#515C5A" }}
              type="text"

              className="rounded w-100 my-2 p-2"
              required
              value={category}
              onChange={handleCategory}
            >
              <option>CATEGORY</option>
              
              <option>Tech</option>
              <option>Education</option>
              <option>Health</option>
            </select>
            <input
              type="text"

              placeholder="WRITER NAME"
              className="rounded my-2 p-2"
              required
              style={{
                height: "8%",
                width: "100%",
                border: "1.2px solid #DFE1E1",
              }}
              onChange={handleAuthor}
              value={author}
            />
            
            <RichTextEditor initialValue="" getValue={handleContent} />
            <label>
              <b>Upload image</b>
            </label>
            <input
              type="file"
              className="rounded  p-1"
              style={{
                height: "8%",
                width: "100%",
                border: "1.2px solid #DFE1E1",
              }}
              required
              accept="image/jpg,image/jpeg,image/png,"

              onChange={handleImage}
            />
            <div className="text-danger">{uploadValidation}</div>
            <div className="my-4 ">
              <button
                type="submit"
                className="btn p-2"
                style={{
                  width: "50%",
                  height: "100%",
                  background: "#FFAA3B",
                  marginLeft: "25%",
                }}
              // onClick={window.reload()}
              >
                <b>Submit</b>
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default BlogAdd;
