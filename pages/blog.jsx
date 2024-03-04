import Navbar from "@/components/Navbar";
import MediumCard from "@/components/mediumCard";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const MediumArticles = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@uk481281")
        .then(res => res.json())
        .then(data => setArticles(data.items));
    }, []);
  
    console.log(articles[0]);
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Blogs</title>
      </Head>
      <Navbar />
      <Row className="mx-5">
      <div style={{marginTop: 70}}></div>
        {articles.map((article, index) => (
             <Col key={index} lg="4" md="4" className="mb-3" style={{background: "white"}}>
                 <MediumCard article={article} />
             </Col>
        ))}
      </Row>
      </>
    );
  };
  
  export default MediumArticles;