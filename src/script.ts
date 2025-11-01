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

const addUser = (
  login: string,
  email: string,
  age: number,
  role: UserRole
): User => {
  const user: User = { login, email, age, role };
  users.push(user);
  return user;
};

const removeUser = (paramName: keyof User, paramValue: any): boolean => {
  const index = users.findIndex((user) => user[paramName] === paramValue);
  users.splice(index, 1);
  return true;
};

const addUsers = (...users: User[]) => {
  for (const user of users) {
    addUser(user.login, user.email, user.age, user.role);
  }
};

const getUser = (paramName: keyof User, paramValue: any): User => {
  return users.find((user) => user[paramName] === paramValue);
};

const parseEmail = (val: string): string => {
  return val;
};
const parseAge = (val: number): number => {
  return val;
};

const parseField = (fieldValue: string | number): string | number => {
  if (typeof fieldValue === 'string') {
    return parseEmail(fieldValue);
  } else if (typeof fieldValue === 'number') {
    return parseAge(fieldValue);
  }
};

const titleClickHandler = function (this: HTMLButtonElement) {
  this.addEventListener('click', () => {
    console.log('Kliknieto po operacji...');
  });
  const inputElem = document.querySelector('.input-elem') as HTMLInputElement;
  inputElem.value = 'Gotowe!';
};
