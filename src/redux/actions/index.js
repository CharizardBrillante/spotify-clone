export const SELECT_SONG = 'SELECT_SONG';

export const selectSongAction = (selectedSong) => ({
    type: SELECT_SONG,
    payload: selectedSong
})