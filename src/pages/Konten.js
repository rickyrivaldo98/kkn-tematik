import React, { useState } from "react";
import { useEffect } from "react";
import HeaderKonten from "./components/HeaderKonten";
import IsiKonten from "./components/IsiKonten";
import IsiKonten2 from "./components/IsiKonten2";
import { API_URI } from './Constant'

const Konten = () => {

  const [content, setContent] = useState({});
  const slug = window.location.pathname.split('/').pop();
  

  useEffect(()=> {
    fetch(API_URI + 'content/' + slug)
      .then(res => res.json())
      .then((result)=>{
        setContent(result)
      })
  }, [slug])

  return (
    <>
      <div style={{ backgroundColor: "#56228B" }}>
        
        <HeaderKonten contentImage={content.header_image} />
        <IsiKonten content={content} />
        <IsiKonten2 content={content}/>
        <br />
        <br />
      </div>
    </>
  );
};

export default Konten;
