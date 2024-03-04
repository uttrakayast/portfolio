import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MediumArticles = () => {
  const [article, setArticle] = useState();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    let article = localStorage.getItem("article");
    setArticle(article);

    let title = localStorage.getItem("title");
    setTitle(title);

    let author = localStorage.getItem("author");
    setAuthor(author);

    let pubDate = localStorage.getItem("pubDate");
    setDate(pubDate);
  }, []);

  console.log(article);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>

      <Navbar />

      <div className="article">
        <div
          style={{
            marginTop: "12vh",
            display: "flex",
            flexDirection: "row",
            marginBottom: "2vh",
          }}
        >
          <Image
            src="/profilePic.jpeg"
            style={{ borderRadius: 30 }}
            width="50"
            height="50"
            alt="me"
          />
          <div>
            <h6 style={{ fontSize: "1rem", marginTop: 7, marginLeft: 10 }}>
              By {author}
            </h6>
            <p style={{ fontSize: 10, marginLeft: 10 }}>
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <h1 style={{ marginBottom: 30 }}>{title}</h1>
      </div>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: article }}
      ></div>
    </>
  );
};

export default MediumArticles;
