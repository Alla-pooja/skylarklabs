import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useApi from "./api";
import BlogTemplate from "./BlogTemplate";
import Blogdetail from "blog/BlogDetailTemplate";
import Header from "Header";
import Footermenu from "Footermenu";
import HelpingForm from "HelpingForm";
import Spinner from "./Spinner";

export default function PostDetails() {
  // const { slug } = useParams();
  // const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const api = useApi();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    // console.log(query.get('blog'));
    const slug = query.get('blog')
    api
      .get(`api/blog/${slug}/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (!data) return <Spinner />
  return (
    <>
      <Header />
      <Blogdetail data={data} />
      <HelpingForm />
      <Footermenu />
    </>
  );
}
