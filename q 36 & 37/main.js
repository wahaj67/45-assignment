function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'i love typescript'; }
    console.log("malikng a ".concat(size, "shirt message with ").concat(message, "prints on it"));
}
make_shirt();
make_shirt("medium");
make_shirt('small', 'codings');
