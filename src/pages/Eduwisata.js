import React, { useState } from "react";
import { useEffect } from "react";
import HeaderEdu from "./components/HeaderEdu";
import IsiEdu from "./components/IsiEdu";

import { API_URI } from './Constant'
const API_PATH = 'gallery/'


const Eduwisata = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(()=> {
    fetch(API_URI + API_PATH)
      .then(res => res.json())
      .then((result)=>{
        setGallery(result)
      })
  }, [])

    return (
      <>
        <HeaderEdu headerGallery={gallery}/>
        <IsiEdu />
      </>
    );
  
};

export default Eduwisata;
