/**
 * classes
 */
 export class Person {
    constructor(name) {
      this.name = name;
    }
  
    walk() {
      console.log('walk');
    }
  }
  
  const personObj = new Person('Josh');
  console.log(personObj);