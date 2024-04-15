var personname = "wahaj ali";
var lowercasename = personname.toLowerCase();
console.log(lowercasename);
var uppercasename = personname.toUpperCase();
console.log(uppercasename);
var words = personname.split("");
var titlecasename = "";
for (var i = 0; i < words.length; i++) {
    console.log(titlecasename + words[i]);
}
