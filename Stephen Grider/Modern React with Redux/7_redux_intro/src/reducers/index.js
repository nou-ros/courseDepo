import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title : "No Scrubs", duration: '4:05'},
        {title : "Macerena", duration: '2:30'},
        {title : "All Star", duration: '3:15'},
        {title : "I want it that way", duration: '1:45'},
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
})