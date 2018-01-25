/*
  When I click on a button with class search, I want to send
  a request to external server and append the results of that request
  to my unordered list of class results
*/

/*
  callback functions
*/

/*
function appendUsers(users) {
  for(var i = 0; i < users.length; i += 1) {
    $('.results').append('<li>'+users[i].name);
  }
}*/

/*
function fetch() {
  $.ajax('https://jsonplaceholder.typicode.com/users')
  .then(getUsers)
  .catch(error);
  console.log('2');
}

$('.search').click(fetch); */


// A callback function is a function that is passed 
// to another function
// as an argument and then executed mostly passing in
// some data

function fetcher5(anyFunctionPassed5) {
  var fakeArray5 = [{name: 'JO'},{name: 'John'}];
  anyFunctionPassed5(fakeArray5); 
}
function iterator5(array5){
  //going to iterate through an Array
  array5.map(person6 =>{
            console.log("This person is " + person6.name);
  });
}




function getUsers(data) {
  console.log('1');
  appendUsers(data);
}

function error(err) {
  console.log(err);
}
function appendUsers(users) {
  for(var i = 0; i < users.length; i += 1) {
    $('.results').append('<li>'+users[i].name);
  }
}
/*
function fetch() {
  $.ajax('https://jsonplaceholder.typicode.com/users')
  .then(getUsers)
  .catch(error);
  console.log('2');
}

$('.search').click(fetch); */

function handleEverything(){
 /*fetcher5( info5 => {
        console.log(info);
});*/
/*fetcher5(info5 => {
      info5.map(person5 => {
            console.log("This person is " + person.name);
      });
});*/
//fetcher5(iterator5);





}//handleEverything

handleEverything();















