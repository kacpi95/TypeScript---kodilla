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
const userOne = {
    login: 'user1',
    email: 'user1@gmail.com',
    age: 20,
    role: UserRole.Admin,
    isLogged: true,
};
const userTwo = {
    login: 'user2',
    email: 'user2@gmail.com',
    age: 30,
    role: UserRole.Moderator,
};
const userThree = {
    login: 'user3',
    email: 'user3@gmail.com',
    age: 40,
    role: UserRole.Admin,
};
const users = [];
users.push(userOne, userTwo, userThree);
const numbers = [5, 8, '8'];
const arr = ['Kacpi', 'admin', 30];
const addUser = (login, email, age, role) => {
    const user = { login, email, age, role };
    users.push(user);
    return user;
};
const removeUser = (paramName, paramValue) => {
    const index = users.findIndex((user) => user[paramName] === paramValue);
    users.splice(index, 1);
    return true;
};
const addUsers = (...users) => {
    for (const user of users) {
        addUser(user.login, user.email, user.age, user.role);
    }
};
const getUser = (paramName, paramValue) => {
    return users.find((user) => user[paramName] === paramValue);
};
