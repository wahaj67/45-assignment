var users = ['qasim', 'zyan', 'zain', 'fahad', 'Admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === 'Admin') {
        console.log('hello! admin ,would you like to see a status repoert');
    }
    else {
        console.log("hello".concat(user, "thank you for loging in again"));
    }
}
