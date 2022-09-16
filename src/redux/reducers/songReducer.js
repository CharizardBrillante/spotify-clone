import { SELECT_SONG } from '../actions';

const initialState = {
    selectedSong : {
        title: '',
        author: '',
        cover: 'http://www.artnet.com/WebServices/images/ll00354lldUo0GFg9MECfDrCWvaHBOcCMqD/ad-reinhardt-black-square-(+another,-screenprint-on-paper;-2-works).jpg',
        duration: 1,
        preview: ''
    }
}

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SONG:
            return {
                ...state,
                selectedSong: action.payload
                }
        default:
            return state;
    }
}

export default songReducer;