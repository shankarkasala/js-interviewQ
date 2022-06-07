//object constructor
var obj = new Object();
obj.name = 'shankar';
console.log(obj);

//object creat method
var obj1 = Object.create(null);
obj1.name = 'uma';
console.log(obj1);
//object literal
let obj2 = {
  name: 'kasala',
};
console.log(obj2);
//construtor function
function Person() {
  this.fname = 'kasala';
  this.lname = 'shankar';
}
var obj3 = new Person();
console.log(obj3);

//class
class Details {
  constructor() {
    this.name = 'kasala';
  }
}
var obj4 = new Details();
console.log(obj4);
//singleton
var obj5 = new (function () {
  this.name = 'shankar';
})();
console.log(obj5);

var emp1 = { name: 'shankar', age: 26 };
var emp2 = { name: 'uma', age: 20 };
var emp3 = { name: 'kasala', age: 25 };
function empdetails(city, state) {
  console.log(this.name, this.age, city, state);
}
empdetails.call(emp1, 'piler', 'ap');
empdetails.apply(emp2, ['bang', 'karnataka']);
var calbind = empdetails.bind(emp3);
calbind('mumbai', 'mharastra');

let obj6 = JSON.stringify(emp1);
console.log(obj6);
let obj7 = JSON.parse(obj6);
console.log(obj7);
// first class function
//, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

//first order function
//First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

//higher order function
//Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

//unary function
//Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.

//currying function
//Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

//pure function
//A Pure function is a function where the return value is only determined by its arguments without any side effects.

//How do you redeclare variables in switch block without an error
let counter = 1;
switch ((x = 1)) {
  case 0: {
    let name;
    break;
  }
  case 1: {
    let name; // No SyntaxError for redeclaration.
    break;
  }
}
//IIFE(Immediately Invoked Function Expression)
//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
//The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.

//encode n decode url
let uri = 'https://jsonplaceholder.typicode.com/todos';
let encdc = encodeURIComponent(uri);
let encd = encodeURI(uri);
let decd = decodeURI(encd);
console.log(encdc);

// memoization
//Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.

function memoization() {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('value in cache');
      return cache[value];
    } else {
      console.log('caluclating value');
      let res = value + 20;
      cache[value] = res;
      return res;
    }
  };
}
let add = memoization();
console.log(add(20));
console.log(add(20));

//classes in ES6
//In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
//the prototype based inheritance written in function expression as below,
function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + ' bike has' + this.color + ' color';
};
//Whereas ES6 classes can be defined as an alternative
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + ' bike has' + this.color + ' color';
  }
}
//modules
//Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns.
//Maintainability
//Reusability
//Namespacing

//scope
//Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.

//service worker
//A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

//Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM.

//reuse information across service worker restarts
//The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.
//IndexedDB
//IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

//web storage
//Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

//Local storage: It stores data for current origin with no expiration date.
//Session storage: It stores data for one session and the data is lost when the browser tab is closed.

//post message
//Post message is a method that enables cross-origin communication between Window objects.

//Cookie
//A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
//Cookies are used to remember information about the user profile(such as username). It basically involves two steps,
//When a user visits a web page, the user profile can be stored in a cookie.
//Next time the user visits the page, the cookie remembers the user profile.

//By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).
//document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
//By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.
//document.cookie = "username=John; path=/services";

//delete cookie
//You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case. For example, you can delete a username cookie in the current page as below.
//document.cookie =
('username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;');
//Note: You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

//access webstorage
//The Window object implements the WindowLocalStorage and WindowSessionStorage objects which has localStorage(window.localStorage) and sessionStorage(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below
//localStorage.setItem("logo", document.getElementById("logo").value);
//localStorage.getItem("logo");

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();

//storage event and its event handler
//The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
window.onstorage = function (e) {
  console.log(
    'The ' +
      e.key +
      ' key has been changed from ' +
      e.oldValue +
      ' to ' +
      e.newValue +
      '.'
  );
};

//Why do you need web storage
//Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.
if (typeof Storage !== 'undefined') {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}

if (typeof Worker !== 'undefined') {
  // code for Web worker support.
} else {
  // Sorry! No Web Worker support..
}

//promise
//A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.
const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));
//Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

//callback function
//A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
function callbackFunction(name) {
  console.log('Hello ' + name);
}

function outerFunction(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

outerFunction(callbackFunction);

//Why do we need callbacks
//The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log('First function called');
  }, 1000);
}
function secondFunction() {
  console.log('Second function called');
}
firstFunction();
secondFunction();
//As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

//callback hell
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {});
    });
  });
});
//callback in callback
//You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.
loadScript('/script1.js', function (script) {
  console.log('first script is loaded');

  loadScript('/script2.js', function (script) {
    console.log('second script is loaded');

    loadScript('/script3.js', function (script) {
      console.log('third script is loaded');
      // after all scripts are loaded
    });
  });
});
//promise chaining
//The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
//promise.all
//Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.

//Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first

//Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.
//Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors.

//undefined
//The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.

//null
//The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

//The eval() function evaluates JavaScript code represented as a string.

//access history in javascript
//The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}

//detect caps lock key turned on or not
//   The mouseEvent getModifierState() is used to return a boolean value that indicates whether the specified modifier key is activated or not. The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.

// Let's take an input element to detect the CapsLock on/off behavior with an example,

// <input type="password" onmousedown="enterInput(event)" />

// <p id="feedback"></p>

// <script>
//   function enterInput(e) {
//     var flag = e.getModifierState("CapsLock");
//     if (flag) {
//       document.getElementById("feedback").innerHTML = "CapsLock activated";
//     } else {
//       document.getElementById("feedback").innerHTML =
//         "CapsLock not activated";
//     }
//   }
// </script>

//The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

isNaN('Hello'); //true
isNaN('100'); //false
//Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

msg = 'Hello'; // var is missing, it becomes global variable
//The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

//The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(100); // true

//Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object. There are two ways of event flow

// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)

// Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

//Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.

//The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

//JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

//Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

//events
//Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can react on these events. Some of the examples of HTML events are,

// Web page has finished loading
// Input field was changed
// Button was clicked

//JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name Mocha, but later the language was officially called LiveScript when it first shipped in beta releases of Netscape.

//The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

//The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

//The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds.

//JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes.

//Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

//JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

//When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

Object.entries(obj).length === 0 && obj.constructor === Object;

//arguments object
function sum() {
  var total = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i];
  }
  return total;
}

sum(1, 2, 3); // returns 6
