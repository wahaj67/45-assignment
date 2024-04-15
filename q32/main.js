var currentUser = ['albert', 'john', 'thomas', 'jennifer', 'robert'];
var newUser = ['wahaj ali'];
newUser.forEach(function (newUser) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new user name"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
