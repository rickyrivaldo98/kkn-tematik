import { Component } from "react";
import Parser from 'html-react-parser';

import { API_URI, CONTACT_URL } from '../Constant'
const API_PATH = '/tourpackage/'


export default class TourPackage extends Component {
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
    
          <section class="pricing py-5">
            <div class="container">
              <div className="col-12 pb-4">
                <h2 className="text-center text-white">Paket Harga</h2>
              </div>
              <div class="row">
                
                {/* here is for the card body */}
                
                {data.map(item => (
                  <div class="col-lg-4">
                  <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                      <h5 class="card-title text-muted text-uppercase text-center">
                        {item.title}
                      </h5>
                      <h6 class="card-price text-center">
                        {item.price}<span class="period">/orang</span>
                      </h6>
                      <hr />
                      {Parser(item.content)}
                      {/* <ul class="fa-ul">

                        <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          Destinasi
                        </li>

                        <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          Destinasi
                        </li>

                      </ul> */}
                      <a href={CONTACT_URL} target='_blank'  rel="noreferrer" class="btn btn-block btn-primary text-uppercase">
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
                ))}
                
              </div>
            </div>
          </section>

      );
    }
  }
}