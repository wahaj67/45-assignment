function make_album(artist, tittle, tracks) {
    var album = { artist: artist, tittle: tittle };
    if (tracks) {
        album[tracks] = tracks;
    }
    return album;
}
console.log(make_album('artist one', 'the first album'));
console.log(make_album('artist two', 'the second album'));
console.log(make_album('artist three', 'the third album '));
