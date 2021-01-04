import React from "react";
import Gallery from "react-photo-gallery";
import NavbarTop from "./layout/NavbarTop";
import { API_URI } from './Constant'
import { Component } from "react";
const API_PATH = '/gallery/'

function changeKeyName(item){
    let ar = getAspectRatio(getMeta(item.image))
    return {
        src: item.image,
        width: ar[0],
        height: ar[1]
    }
}

function getAspectRatio(width, height) {
    var ratio = width / height;
    return ( Math.abs( ratio - 4 / 3 ) < Math.abs( ratio - 16 / 9 ) ) ? [4,3] : [16,9];
}

function getMeta(url){   
    var img = new Image();
    img.addEventListener("load", function(){
        return this.naturalWidth, this.naturalHeight
    });
}

export default class GalleryPage extends Component {

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
            data: result.map(changeKeyName)
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

    render(){
        return (
            <>
            <div>
                <NavbarTop />
                <Gallery photos={this.state.data}/>
            </div>
            </>
        );
    }
}