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

function appendUsers(users){
  users.map(person => {
    $(".results").append(`<li>  ${person.name}`);
  });
}
function getUsers(data) {
  console.log('1');
  appendUsers(data);
}

function handleEverything(){
 
  $.ajax("https://jsonplaceholder.typicode.com/users")
  .then(getUsers);

}//handleEverything

$(".search").on("click", handleEverything);















