function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("make a sadnwich with ".concat(items.join(','), "."));
}
make_sandwich('ham', 'chese');
make_sandwich('turkey', 'lettuce', 'tomato');
make_sandwich('avocado', 'sprouts', 'mustard', 'mayo');
