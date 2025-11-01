enum UserRole {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

let foo: number | null = 5;
foo = 10;
foo = null;

let bar: string = 'Foobar!';
bar = 'test';

let num: number | string | null = 5;
num = '6';
num = null;

let userRole: UserRole = UserRole.Admin;
userRole = UserRole.User;
userRole = UserRole.Moderator;

let userIsLogged: boolean = true;
userIsLogged = false;

type User = {
  login: string;
  email: string;
  age: number;
  role: UserRole;
  isLogged?: boolean;
};

const userOne: User = {
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

const users: User[] = [];
users.push(userOne, userTwo, userThree);

const numbers: [number, number, string] = [5, 8, '8'];

const arr: [string, string, number] = ['Kacpi', 'admin', 30];
