var magician = ['alber', 'robert', 'thomas'];
function show_magician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
show_magician(magician);
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + 'the great';
    }
}
make_great(magician);
show_magician(magician);
function make_great2(magician) {
    var greatMagicians = [];
    for (var i = 0; i < magician.length; i++) {
        greatMagicians.push(magician[i] + 'the great');
    }
    return greatMagicians;
}
var magician3 = ['alber', 'jennifer', 'ayesha'];
var greatMagicians2 = make_great2(magician3);
show_magician(magician3);
show_magician(greatMagicians2);
