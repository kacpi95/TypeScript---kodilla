{
  const persons = [];

  function addPerson(firstName: string, lastName: string) {
    const name: string = firstName + lastName;
    persons.push(name);
  }

  let firstName = 'John';
  let lastName = 'Doe';
  let age = 18;

  const person = {
    firstName,
    lastName,
  };

  addPerson(person.firstName, person.lastName);
  addPerson('Amanda', 'Doe');
  addPerson('Thomas', 'Jefferson');
}
