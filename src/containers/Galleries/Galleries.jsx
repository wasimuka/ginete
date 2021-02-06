import React, { Component } from "react";
import { SET_GALLERY } from "../../store/actions/gallery";
import Axios from "axios";
import { connect } from "react-redux";
import Gallery from "../../components/Gallery/Gallery";
import GalleryHeader from "../../components/GalleryHeader/GalleryHeader";

class Galleries extends Component {
  componentDidMount() {
    this.getGalleries();
  }

  async getGalleries() {
    try {
      let res = await Axios.get("https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien");
      res.data?.offers && this.props.setGalleries(res.data?.offers);
    } catch (err) {
      console.log(err.response);
    }
    
  }
  render() {
    return (
      <div>
        <GalleryHeader />
        {
          Array.isArray(this.props.galleries) && this.props.galleries.map( (gallery, index) =>{
            return (
              <Gallery gallery={gallery}  key={index} />
            );
          })
        
        }
        {!this.props.galleries && 'Loading ...'}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.Gallery
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setGalleries: (data) => dispatch({ type: SET_GALLERY, payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Galleries);
