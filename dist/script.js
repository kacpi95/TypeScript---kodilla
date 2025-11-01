var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Moderator"] = "moderator";
    UserRole["User"] = "user";
})(UserRole || (UserRole = {}));
let foo = 5;
foo = 10;
foo = null;
let bar = 'Foobar!';
bar = 'test';
let num = 5;
num = '6';
num = null;
let userRole = UserRole.Admin;
userRole = UserRole.User;
userRole = UserRole.Moderator;
let userIsLogged = true;
userIsLogged = false;
