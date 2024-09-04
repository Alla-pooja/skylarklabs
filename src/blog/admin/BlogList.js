import React, { useState, useEffect } from "react";
import useApi from "../api";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Button} from "@mui/material";
import { ButtonGroup } from "@mui/material";

const BlogList = ({ page, setPage, setPost }) => {
  // const history = useHistory();
  const api = useApi();
  const [allData, setAllData] = useState({});
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [backup, setBackup] = useState([]);

  const getData = (url) => {
    api
      .get(url)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setData(response.data.results);
        setBackup(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  const onSearchHandler = () => {
    console.log(search);
    if (search.trim() !== "") {
      try {
        setData(
          backup.filter(
            (item) =>
              item.title.toUpperCase().indexOf(search.toUpperCase()) > -1 ||
              item?.category_name.toUpperCase().indexOf(search.toUpperCase()) >
                -1 ||
              item?.tag_name.toUpperCase().indexOf(search.toUpperCase()) > -1 ||
              item?.writer.toUpperCase().indexOf(search.toUpperCase()) > -1
          )
        );
      } catch {setData(backup)}
    } else {
      setData(backup);
    }
  };

  useEffect(() => {
    if (page === "Drafts") {
      getData("api/blog/?status=draft");
    } else {
      getData("api/blog/?status=published");
    }
  }, [page]);

  const editPost = (item) => {
    console.log(item);
    setPost(item);
    setPage("Editor");
  };

  const deletePost = (slug) => {
    var result = window.confirm(`Want to delete ${slug}?`);
    if (!result) {
      console.log(result);
      return;
    }
    api
      .delete(`api/blog/${slug}`)
      .then((res) => {
        console.log(res.data);
        setData(data.filter((item) => item.slug !== slug));
        setBackup(data.filter((item) => item.slug !== slug));
      })
      .catch((err) => console.log(err.message));
  };

  const PaginationComponent = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    const { links, page } = allData;

    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {links.previous && (
            <>
              <li class="page-item">
                <a
                  class="page-link"
                  aria-label="Previous"
                  onClick={() => getData(links.previous)}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" onClick={() => getData(links.previous)}>
                  {page - 1}
                </a>
              </li>{" "}
            </>
          )}
          <li class="page-item">
            <a class="page-link" style={{ color: "blue" }}>
              {page}
            </a>
          </li>
          {links.next && (
            <>
              <li class="page-item">
                <a class="page-link" onClick={() => getData(links.next)}>
                  {page + 1}
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  aria-label="Next"
                  onClick={() => getData(links.next)}
                >
                  <span class="sr-only">Next</span>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  };

  if (loading) return <p style={{ color: "#000000" }}>Loading...</p>;
  return (
    <div>
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          {/* <h5 className="mb-0">Applications</h5> */}
          <div className="form-group d-flex">
            {/* <label for="fname">Title</label> */}
            <input
              type="text"
              id="fname"
              name="fname"
              style={{ maxWidth: "400px" }}
              // value={Search}
              placeholder="Search..."
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              className="mx-2"
              variant="contained"
              color="primary"
              onClick={onSearchHandler}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Tag</th>
                <th scope="col">Author</th>
                {/* <th scope="col"></th> */}
                <th scope="col">Views</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data && data.length !== 0
                ? data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          alt="..."
                          src={item.banner}
                          className="avatar avatar-sm rounded-circle me-2"
                        />
                        <a
                          href={`/post?blog=${item.slug}`}
                          className="text-heading font-semibold"
                        >
                          {item.title}
                        </a>
                      </td>
                      <td>{new Date(item.published).toDateString()}</td>
                      <td>{item.category_name}</td>
                      <td>{item.tag_name}</td>
                      <td>{item?.writer ?? "Skylark Labs"}</td>
                      {/* <td>{item.likes ?? 0}</td> */}
                      <td>{item.views ?? 0}</td>
                      <td className="text-end">
                        <ButtonGroup
                          variant="text"
                          color="primary"
                          aria-label="text primary button group"
                        >
                          <Button onClick={() => editPost(item)}>Edit</Button>
                          <Button onClick={() => deletePost(item.slug)}>
                            Delete
                          </Button>
                          {/* <Button onClick={() => viewPost(item)}>View</Button> */}
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                : "No Content"}
            </tbody>
          </table>
        </div>
        <div className="card-footer border-0 py-5">
          <span className="text-muted text-sm">
            Showing {data?.length ?? 0} items
          </span>
        </div>
      </div>
      <PaginationComponent />
    </div>
  );
};

export default BlogList;

// <>
// <div className="card" key={item.id}>
//   <div className="date">
//     <span>27</span>FEB
//   </div>

//   <div className="img">
//     <h2>{item.title}</h2>
//   </div>
//   <div className="content-box">
//     <div className="content">
//       <Typography variant="body1">{item.excerpt}</Typography>
//       {/* <p>{item.excerpt}</p> */}

//       {/* <div className="icons">
//     <i className="fas fa-eye"></i>
//     <p>239</p>
//     <i className="fas fa-heart"></i>
//     <p>41</p>
//     <i className="fas fa-comment-alt"></i>
//     <p>9</p>
//   </div> */}
//     </div>

// <ButtonGroup
//   variant="text"
//   color="primary"
//   aria-label="text primary button group"
// >
//   <Button onClick={() => editPost(item)}>Edit</Button>
//   <Button onClick={() => deletePost(item.slug)}>
//     Delete
//   </Button>
//   <Button onClick={() => viewPost(item)}>View</Button>
// </ButtonGroup>
//   </div>
// </div>
// </>
// : "No Content"}
