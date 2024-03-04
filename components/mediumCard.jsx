import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";

const MediumCard = ({ article }) => {
  var [image, setImage] = useState(null)

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(article.description, 'text/html');

    const firstImage = doc.querySelector('img');
    const firstImageUrl = firstImage ? firstImage.getAttribute('src') : null;
    setImage(firstImageUrl);
  }, []);

  return (
    <Card onClick={() => {
      localStorage.setItem("article", article.description);
            localStorage.setItem("title", article.title);
            localStorage.setItem("author", article.author);
            localStorage.setItem("pubDate", article.pubDate);
            window.open("/article");
    }} className="mb-3" style={{ marginTop: 30, borderColor: "white" }}>
      {image && (
        <Image src={image} alt={article.title} style={{borderRadius: 10}}/>
      )}
  
      <Card.Body>
        <Card.Title style={{fontSize: 15}}>{article.title}</Card.Title>
        <Card.Subtitle style={{fontSize: 12}} className="text-muted">
          {new Date(article.pubDate).toLocaleDateString()}
        </Card.Subtitle>
        <Button
          style={{
            background: "#847EFF",
            borderColor: "#847EFF",
            marginTop: 20,
            fontSize: 12
          }}
          onClick={() => {
            localStorage.setItem("article", article.description);
            localStorage.setItem("title", article.title);
            localStorage.setItem("author", article.author);
            localStorage.setItem("pubDate", article.pubDate);
            window.open("/article");
          }}
        >
          Dive In
        </Button>
      </Card.Body>
    </Card>
  );
  
};

export default MediumCard;
