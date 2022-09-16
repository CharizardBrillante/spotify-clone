import { SELECT_SONG } from '../actions';

const initialState = {
    selectedSong : {
        title: '',
        author: '',
        cover: '',
        duration: 0,
        isPlaying: false,
        favourite: false
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