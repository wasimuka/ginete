import { SET_GALLERY } from "../actions/gallery";

const intialSate = {
    galleries: null
};

const gallery = (state = intialSate, action) =>{

    switch(action.type){
        case SET_GALLERY:
            return {...state, galleries: action.payload }
        default:
            return {...state}
    }

}

export default gallery;


