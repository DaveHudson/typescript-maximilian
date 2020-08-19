// const person: {
//   name: string,
//   nickname: string,
//   age: number,
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Dave',
//   nickname: 'Pudson',
//   age: 45,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// console.log(person)

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person = {
  name: 'Dave',
  nickname: 'Pudson',
  age: 45,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favouriteActivities: any[]; // Really want to avoid, negates all benefits
favouriteActivities = ['Footy', 'Walking']

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}