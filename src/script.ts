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
