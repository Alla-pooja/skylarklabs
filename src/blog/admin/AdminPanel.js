// import React from "react";
// import clsx from "clsx";
// import {
//   makeStyles,
//   useTheme,
//   createStyles,
// } from "@material-ui/core/styles";
// // import TextEditor from "./TextEditor";
// // import Button from "@material-ui/core/Button";
// import { Button } from "@mui/material";
// import { useState } from "react";
// import { useEffect } from "react";
// import useApi from "../api";
// import { useHistory } from "react-router-dom";
// import BlogList from "./BlogList";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       // alignItems: 'center',
//       justifyContent: "center",
//       width: "100%",
//       minHeight: "100vh",
//       backgroundColor: "#ffffff",
//       color: "#000000",
//     },
//     appBar: {
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     hide: {
//       display: "none",
//     },
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     drawerHeader: {
//       display: "flex",
//       alignItems: "center",
//       padding: theme.spacing(0, 1),
//       // necessary for content to be below app bar
//       ...theme.mixins.toolbar,
//       justifyContent: "flex-end",
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: -drawerWidth,
//     },
//     contentShift: {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     },
//   })
// );

// export default function AdminPanel() {
//   const classes = useStyles();
//   const history = useHistory();
//   const api = useApi();
//   const theme = useTheme();
//   const header = React.useRef();
//   // const [show, setShow] = useState("editor");
//   const [page, setPage] = useState("Published Blogs");
//   const [loading, setLoading] = useState(true);
//   // const [action, setAction] = useState('');
//   const postData = Object.freeze({
//     title: "",
//     tag: "",
//     excerpt: "",
//     banner: "",
//     content: "",
//     category: "",
//     read_time: "",
//     views: "",
//     slug: "",
//     writer: "",
//   });
//   const [post, setPost] = useState(postData);
//   const [uploadDialog, setuploadDialog] = useState(false);
//   const [imageList, setImageList] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [copy, setCopy] = useState("");
//   const [lock, setLock] = useState(false);

//   useEffect(() => {
//     if (uploadDialog) return;
//     setCopy("");
//   }, [uploadDialog]);

//   const setAction = (data, action) => {
//     setLock(false);
//     if (action === "action-draft") {
//       // setContent(data)
//       data["status"] = "draft";
//       console.log(data);
//       // setPage('Drafts')
//     } else {
//       data["status"] = "published";
//       console.log(data);
//       // setPage('Published Blogs')
//     }

//     if (data.id) {
//       api
//         .put(`api/blog/${data.slug}/`, data)
//         .then((res) => {
//           console.log(res.data);
//           if (action === "action-draft") setPage("Drafts");
//           else setPage("Published Blogs");
//         })
//         .catch((err) => {
//           console.log(err.message);
//           alert('Fill all the fields.');
//         });
//     } else {
//       api
//         .post("api/blog/", data)
//         .then((res) => {
//           console.log(res.data);
//           if (action === "action-draft") setPage("Drafts");
//           else setPage("Published Blogs");
//         })
//         .catch((err) => {
//           console.error(err.message);
//           alert('Fill all the fields.');
//         });
//     }
//   };

//   const getImages = () => {
//     api
//       .get("api/image/")
//       .then((res) => {
//         console.log(res.data);
//         setImageList(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   };

//   const getCategories = () => {
//     api
//       .get("api/category/")
//       .then((res) => {
//         console.log(res.data);
//         setCategories(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   };

//   const getTags = () => {
//     api
//       .get(`api/tag/`)
//       .then((res) => {
//         setTags(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   };

//   useEffect(() => {
//     const user_token = localStorage.getItem("refresh_token");
//     if (user_token) {
//       getImages();
//       getCategories();
//       getTags();
//       setLoading(false);
//     } else history.push("/login");
//   }, []);

//   const onExitHandler = (e) => {
//     e = e || window.event;

//     if (e) {
//       e.returnValue = "Sure?";
//     }

//     return "Sure?";
//   };

//   useEffect(() => {
//     if (page === "Editor" || page === "View") {
//       window.addEventListener("beforeunload", onExitHandler);
//     } else window.removeEventListener("beforeunload", onExitHandler);
//   }, [page]);

//   const copyToClipBoard = (text) => {
//     setCopy(text);
//     navigator.clipboard.writeText(text);
//   };

//   const postImage = () => {
//     const img = document.getElementById("file-input");
//     if (!img) return;
//     let formData = new FormData();
//     formData.append("image", img.files[0]);
//     api
//       .post("api/image/", formData)
//       .then((res) => {
//         console.log(res);
//         getImages();
//       })
//       .catch((err) => console.log(err.message));
//   };

//   useEffect(() => {
//     if (page === "Tags") getTags();
//     else if (page === "Categories") getCategories();
//   }, [page]);

//   const GetList = () => {
//     const [dialog, setDialog] = useState(false);
//     const [category, setCategory] = useState("");
//     const [tagData, setTagData] = useState({});
//     let data = categories;
//     let data_str = "category";
//     if (page === "Tags") {
//       data = tags;
//       data_str = "tag";
//     }

//     function getVal(id) {
//       let text;
//       let val = prompt("Please enter new value:");
//       if (val == null || val == "") {
//         text = "User cancelled the prompt.";
//       } else {
//         api
//           .put(`api/${data_str}/${id}/`, {
//             name: val.trim(),
//           })
//           .then((res) => {
//             console.log(res);
//             if (page === "Tags") {
//               getTags();
//             } else getCategories();
//           })
//           .catch((err) => console.log(err.message));
//       }
//     }

//     function ChangeTag() {
//       return (
//         <>
//           <div
//             style={{
//               left: "50%",
//               top: 0,
//             }}
//             className="upload-dialog modal-tag"
//           >
//             <div>
//               <div className="form-group">
//                 <label for="fname">Select Category</label>
//                 <select
//                   class="form-select"
//                   aria-label="Default select example"
//                   id="select-category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 >
//                   {categories.map((item, idx) => (
//                     <option key={item.id} value={item.id}>
//                       {item.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <br />
//               <div className="form-group">
//                 <label for="fname">Change Tag Name</label>
//                 <input id="tag-name" type="text" className="form-control" />
//               </div>
//               <Button
//                 className="my-2"
//                 color="primary"
//                 variant="contained"
//                 onClick={() => {
//                   let name = document.getElementById("tag-name").value.trim();
//                   if (name === "") name = tagData.name;
//                   api
//                     .put(`api/${data_str}/${tagData.id}/`, {
//                       name: name,
//                       category: category,
//                     })
//                     .then((res) => {
//                       console.log(res);
//                       setDialog(false);
//                       getTags();
//                     })
//                     .catch((err) => console.log(err.message));
//                 }}
//               >
//                 Submit
//               </Button>
//             </div>
//           </div>
//           <div
//             className="upload-dialog-layer"
//             onClick={() => setDialog(false)}
//           ></div>
//         </>
//       );
//     }

//     return (
//       <div className="container">
//         {data.length !== 0 &&
//           data.map((item, idx) => (
//             <>
//               <div
//                 className="d-flex paper"
//                 style={{
//                   justifyContent: "space-between",
//                   backgroundColor: "#ffffff",
//                 }}
//                 key={idx}
//               >
//                 <Button>{item.name}</Button>
//                 <div className="d-flex">
//                   {data_str === "tag" ? (
//                     <>
//                       <Button
//                         color="primary"
//                         variant="text"
//                         disabled
//                         className="m-4"
//                       >
//                         { item?.category_name }
//                       </Button>
//                       <Button
//                         color="primary"
//                         variant="contained"
//                         className="m-4"
//                         onClick={() => {
//                           setTagData(item);
//                           setCategory(item.category);
//                           setDialog(true);
//                         }}
//                       >
//                         Update
//                       </Button>
//                     </>
//                   ) : (
//                     <Button
//                       color="primary"
//                       variant="contained"
//                       className="m-4"
//                       onClick={() => getVal(item.id)}
//                     >
//                       Update
//                     </Button>
//                   )}
//                   <Button
//                     color="primary"
//                     variant="contained"
//                     className="m-4"
//                     onClick={() => {
//                       var result = window.confirm(
//                         `Deleting this item will delete other contents related to this item.`
//                       );
//                       if (!result) {
//                         console.log(result);
//                         return;
//                       }
//                       api
//                         .delete(`api/${data_str}/${item.id}`)
//                         .then((res) => {
//                           console.log(res);
//                           getCategories();
//                           getTags();
//                         })
//                         .catch((err) => console.log(err.message));
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//               <hr />
//             </>
//           ))}
//         {dialog && <ChangeTag />}
//       </div>
//     );
//   };

//   const setPageHandler = (page_name) => {
//     if (!lock) setPage(page_name);
//     else {
//       if (!window.confirm("Save your changes first!!!")) {
//         setLock(false);
//         setPage(page_name);
//       }
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/@webpixels/css@1.1.5/dist/index.css"
//       />
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css"
//       />

//       <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
//         <nav
//           className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
//           id="navbarVertical"
//         >
//           <div className="container-fluid">
//             <button
//               className="navbar-toggler ms-n2"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#sidebarCollapse"
//               aria-controls="sidebarCollapse"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
//               <img
//                 src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
//                 alt="..."
//               />
//             </a>
//             {/* <div className="navbar-user d-lg-none">
//               <div className="dropdown">
//                 <a
//                   href="#"
//                   id="sidebarAvatar"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   <div className="avatar-parent-child">
//                     <img
//                       alt="Image Placeholder"
//                       src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
//                       className="avatar avatar- rounded-circle"
//                     />
//                     <span className="avatar-child avatar-badge bg-success"></span>
//                   </div>
//                 </a>
//                 <div
//                   className="dropdown-menu dropdown-menu-end"
//                   aria-labelledby="sidebarAvatar"
//                 >
//                   <a href="#" className="dropdown-item">
//                     Profile
//                   </a>
//                   <a href="#" className="dropdown-item">
//                     Settings
//                   </a>
//                   <a href="#" className="dropdown-item">
//                     Billing
//                   </a>
//                   <a href="#" className="dropdown-item">
//                     Logout
//                   </a>
//                 </div>
//               </div>
//             </div> */}
//             <div className="collapse navbar-collapse" id="sidebarCollapse">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => setPageHandler("Published Blogs")}
//                     style={{
//                       color: page === "Published Blogs" ? "#3F51B5" : "#8C9AA9",
//                     }}
//                   >
//                     <i className="bi bi-chat"></i> Publishes
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => setPageHandler("Drafts")}
//                     style={{ color: page === "Drafts" ? "#3F51B5" : "#8C9AA9" }}
//                   >
//                     <i className="bi bi-bookmarks"></i> Drafts
//                     {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto"> */}
//                     {/* 6 */}
//                     {/* </span> */}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => setPageHandler("Categories")}
//                     style={{
//                       color: page === "Categories" ? "#3F51B5" : "#8C9AA9",
//                     }}
//                   >
//                     <i className="bi bi-list"></i> Categories
//                     {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto"> */}
//                     {/* 6 */}
//                     {/* </span> */}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => setPageHandler("Tags")}
//                     style={{ color: page === "Tags" ? "#3F51B5" : "#8C9AA9" }}
//                   >
//                     <i className="bi bi-tags"></i> Tags
//                     {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto"> */}
//                     {/* 6 */}
//                     {/* </span> */}
//                   </a>
//                 </li>
//               </ul>
//               <hr className="navbar-divider my-5 opacity-20" />
//               <div className="mt-auto"></div>
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="bi bi-person-square"></i> Account
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/logout">
//                     <i className="bi bi-box-arrow-left"></i> Logout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="h-screen flex-grow-1 overflow-y-lg-auto">
//           <header className="bg-surface-primary border-bottom pt-6">
//             <div className="container-fluid">
//               <div className="mb-npx">
//                 <div className="row align-items-center">
//                   <div className="col-sm-6 col-12 mb-4 mb-sm-0">
//                     <h1 className="h2 mb-0 ls-tight">Admin Panel</h1>
//                   </div>
//                   <div className="col-sm-6 col-12 text-sm-end">
//                     <div className="mx-n1">
//                       <a
//                         // href="javascript:void(0)"
//                         onClick={() => {
//                           setPost(postData);
//                           setPageHandler("Editor");
//                           setLock(true);
//                         }}
//                         className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
//                       >
//                         <span className="pe-2">
//                           <i className="bi bi-plus"></i>
//                         </span>
//                         <span>Create</span>
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         ref={header}
//                         onClick={() => {
//                           setuploadDialog(!uploadDialog);
//                         }}
//                         className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
//                       >
//                         <span className=" pe-2">
//                           <i className="bi bi-upload"></i>
//                         </span>
//                         <span>Upload</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <ul className="nav nav-tabs mt-4 overflow-x border-0">
//                   {(page === "Editor" || page === "View") && (
//                     <>
//                       <li className="nav-item ">
//                         <a
//                           href="javascript:void(0)"
//                           className={clsx(
//                             "nav-link",
//                             page === "Editor" && "active"
//                           )}
//                           onClick={() => setPage("Editor")}
//                         >
//                           Editor
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a
//                           href="javascript:void(0)"
//                           className={clsx(
//                             "nav-link",
//                             page === "View" && "active"
//                           )}
//                           onClick={() => setPage("View")}
//                         >
//                           View
//                         </a>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </header>
//           {/* <!-- Main --> */}
//           <main className="py-6 bg-surface-secondary">
//             {uploadDialog && (
//               <div
//                 style={{
//                   top:
//                     header.current.offsetTop + header.current.offsetHeight + 12,
//                   overflow: "auto",
//                 }}
//                 className="upload-dialog"
//               >
//                 <div className="form-group">
//                   <input
//                     type="file"
//                     accept="image/jpg"
//                     id="file-input"
//                     name="fname"
//                     className="form-control"
//                   />
//                   <Button
//                     className="my-2"
//                     color="primary"
//                     variant="contained"
//                     onClick={() => postImage()}
//                   >
//                     Submit
//                   </Button>
//                   <hr />
//                   <div className="container">
//                     {imageList.length !== 0 &&
//                       imageList.map((item, idx) => (
//                         <div className="d-flex" key={idx}>
//                           <img
//                             className="avatar avatar-md me-4 m-2 my-4"
//                             style={{
//                               width: 140,
//                               height: 90,
//                               objectFit: "cover",
//                             }}
//                             src={item.image}
//                           />
//                           <Button
//                             color="primary"
//                             variant="text"
//                             className="m-4"
//                             onClick={() => copyToClipBoard(item.image)}
//                           >
//                             {copy === item.image ? "Copied" : "Copy Url"}
//                           </Button>
//                           <Button
//                             color="primary"
//                             variant="text"
//                             className="m-4"
//                             onClick={() => {
//                               api
//                                 .delete(`api/image/${item.id}`)
//                                 .then((res) => {
//                                   console.log(res);
//                                   getImages();
//                                 })
//                                 .catch((err) => console.log(err.message));
//                             }}
//                           >
//                             Delete
//                           </Button>
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//             {uploadDialog && (
//               <div
//                 className="upload-dialog-layer"
//                 onClick={() => setuploadDialog(false)}
//               ></div>
//             )}
//             <div className="container-fluid">
//               {page === "Editor" || page === "View" ? (
//                 <TextEditor
//                   setLock={setLock}
//                   setAction={setAction}
//                   page={page}
//                   data={post}
//                 />
//               ) : (
//                 <>
//                   {page === "Tags" || page === "Categories" ? (
//                     <GetList />
//                   ) : (
//                     <BlogList page={page} setPage={setPage} setPost={setPost} />
//                   )}
//                 </>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }
