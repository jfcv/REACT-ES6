import { Teacher } from './teacher';

/* 
 * var -> function scope 
 * let -> block scope 
 * const -> block scope 
 */

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();


/**
 * uncomment this section
 * so you can see the error
 * when trying to reassign 
 * a constant value
 */
//const x = 1;
//x = 2;


/**
 * objects
 * a function within an object is called a method
 */
const person = {
  name: '',
  talk() {},
  walk() {
    console.log(this);
  }
}
console.log(person);


/**
 * accessing the properties
 */
person.talk();
const targetMember = 'name';
person[targetMember.value] = 'John';
console.log(person);


/**
 * this
 * always return the reference to an object
 */
person.walk();


/**
 * getting just the method
 */
const walk = person.walk;
/**
 * returns the window object if strict-mode is off : this case!
 * returns undefined if strict-mode is on
 */
walk();


/**
 * bind
 */
const walk2 = person.walk.bind(person);
/**
 * this way always returns the person object 
 */
walk2();


/**
 * arrow functions
 */
const squareFn = function(number) {
  return number * number;
}

const square = number => number * number;
console.log(square(5));


/**
 * arrow functions example
 */
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
]

const activeJobsFn = jobs.filter(function(job) { return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);


/**
 * arrow funtions && this
 */
const person3 = {
  talk() {
    console.log('this', this);
  }
}
person3.talk();

/**
 * setTimeout is a stand alone function
 * so it just returns the window object
 * because of its scope
 */
const person4 = {
  talk() {
    setTimeout(function() {
      console.log('this', this);
    }, 1000);
  }
}
person4.talk();

/**
 * simple way to solve it is just using an arrow function (es6)
 * because arrow functions inherit this from it scope
 */
 const person5 = {
  talk() {
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  }
}
person5.talk();


/**
 * Array.map()
 */
const colors = ['red', 'green', 'blue'];
/**
 * map returns another array to avoid modifying the original
 */
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);


/**
 * destructuring
 */
const address = {
  street: 'kaesh',
  city: 'mumbai',
  country: 'india'
};

const { street, city, country } = address;
console.log(street, city, country);

/**
 * changing the variable name
 */
const { street: st } = address;
console.log(st);


/**
 * spread operator
 * arrays
 */
const first = [1,2,3];
const second = [4,5,6];
const combined = [...first, ...second];
console.log(combined);


/**
 * spread operator
 * objects
 */
const firstObj = { name: 'Mosh' };
const secondObj = { job: 'Instructor' };
const combinedObj= {...firstObj, ...secondObj};
console.log(combinedObj);


/**
 * clone objects with the spread operator
 */
const clone = {...firstObj};
console.log(clone);


/**
 * classes
 * inheritance
 */
const teacher = new Teacher('Dan', 'MSc');
console.log(teacher);