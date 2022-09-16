export const SELECT_SONG = 'SELECT_SONG';

export const selectSongAction = (selectedSong) => ({
    action: SELECT_SONG,
    payload: selectedSong
})