import React, { useState, useEffect } from "react";
import { Component } from "react";

import { API_URI } from '../Constant'
const API_PATH = '/gallery/'


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch(API_URI + API_PATH)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <section id="popular-destinations" className="popular-destinations py-5">
            <div className="container-fluid container-fluid-max">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center pb-3 text-white">Galeri</h2>
                </div>

                {data.map(item => (
                  <div className="col-12 col-sm-6 col-md-4">
                    <a href="" className="text-white">
                      <figure className="position-relative overflow-hidden">
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt={item.file_name}
                        />
                        <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                          <h3>{item.file_name}</h3>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                ))}

              </div>
              <div className="row">
                <div className="col text-center">
                  <button className="btn bg-red text-black">
                    {/* TODO: fetch new image when clicked */}
                    Lihat Selanjutnya
              </button>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
}
