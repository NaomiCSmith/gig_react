import "./App.css";
import React from "react";
import Gig from "./components/Gig.jsx";
import "./components/Gig.css";


function App() {
  return (
    <>
      <div>
        <Gig
        bandname="Bastille"
        imgsrc="https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/B/bastille03-bhl.JFFE_lMy2aL8TznsOOgVjDe3HlnJ.jpg"
        description="A sunny festival in a theme park!"
        datetime="2pm on 29/02/2020"
        location="Dreamland, Margate"
        />
      </div>
    </>
  );
};

export default App;
