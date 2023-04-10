// // Using template strings to create tempplate html 
// let title = 'blah';
// let author = 'blah blah'
// let likes = 32;
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// hello(); // JS hoists functions: they're basically all declared at the top of the file.

// // function declaration
// function hello(){
//     console.log('hello world');
// }

// // function expression
// const world = function(){
//     console.log('world hello');
// };

// world(); // function expressions on the other hand are not hoisted

// // Arrow functions
//  const calcArea = (radius) => {
//     return 3.14 * radius**2;
//  };
//  const calcArea2 = radius => 3.14 * radius**2;

//  // methods are the same as functions, just use dot notation: x.toUpperCase();

//  // callback functions: functions as a paremeter for functions
//  let people = ['mario', 'luigi', 'peach', 'bowser'];
//  people.forEach(function(person){
//     console.log(person);
//  });
//  // callbacks are usually writte as arrow functions though
//  people.forEach(person => {
//     console.log(person);
//  });

//  const logPerson = (index, person) => {
//     console.log(index, person);
//  };

//  people.forEach(logPerson);

// const userOne = {name: 'shaun', score:100};
// const userTwo = userOne;
// userOne.score = 50;
// console.log(userOne);
// console.log(userTwo);

// // Array of objects
// const blogs = [
//     {title: 'How To Install Node.JS', likes: 20},
//     {title: 'How To Design With Tailwind', likes: 40}
// ];

// // Object Literals
// let user = {
//     name: 'mario',
//     age: 34,
//     blogs: [
//         {title: 'How To Install Node.JS', likes: 20},
//         {title: 'How To Design With Tailwind', likes: 40}
//     ],
//     logBlogs(){
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     }
// }

// user.logBlogs();

// // The DOM

// const para = document.querySelector('div.error');
// console.log(para);
// const paras = document.querySelectorAll('p');
// console.log(paras[paras.length - 1]);

// // Get element by id
// const x = document.getElementById('id_name');
// const y = document.querySelector('#id_name');

// // Get element by class
// x = document.getElementsByClassName('class_name');
// y = document.querySelector('.class');

// // Get element by id
// x = document.getElementsByTagName('p');

// const para = document.querySelector('p');
// para.innerText = 'she be loreming my ipsum';
// console.log(para.innerText);
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// content.innerHTML = '<h2>A header instead</h2>';
// console.log(content.innerHTML);
// const people = ['mario', 'luigi', 'toad'];
// people.forEach(person => {
//     content.innerHTML  += `<p>Hello ${person.toUpperCase()}!</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.bing.com');
// link.innerText = 'ha, it`s bing now';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('style', 'color:green');

// const title = document.querySelector('h1');
// // Do this for adding CSS styles instead of set attribute
// title.style.borderStyle = 'dashed'; 

const content = document.querySelectorAll('p');
content.forEach(p => {
    if(p.textContent.includes("success")){
        p.classList.add('success');
    }
    else if(p.textContent.includes("error")){
        p.classList.add('error');
    }
});