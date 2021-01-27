import React, { useState } from "react";
import { useEffect } from "react";
import EduWebBox from './EduWebBoxContent'
import { API_URI } from '../Constant'

const IsiEdu = () => {
  const [content, setContent] = useState([]);

  useEffect(()=> {
    fetch(API_URI + 'content/')
      .then(res => res.json())
      .then((result)=>{
        setContent(result)
      })
  }, [])

  return (
    <>
      <section className="container isiedu">
        <h5>
          <b>Berdasarkan Kategori Edukasi:</b>
        </h5>
        <div className="kategori">
          <button>Semua</button>
          <button>Tanaman Hias</button>
          <button>Ternak</button>
          <button>Tanaman Herbal</button>
        </div>
        <div className="cardkonten">
          <h1>Kumpulan Edukasi</h1>
          <hr />
          {
            content.map(obj => <EduWebBox content={obj}/>)
          }
        </div>
      </section>
    </>
  );
};

export default IsiEdu;
