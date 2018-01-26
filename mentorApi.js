const PRACTICE_URL = "https://jsonplaceholder.typicode.com/users";
const PRACTICE_INFO = [{name:"Jorge"}, {name: "Erika"}];
const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';

function display(arrayOfData){
  //this is going to display the data received
  console.log("\'display function executed\'")
  arrayOfData.map(user => {
          console.log(user.email);
          
          $('.results').append("<li>" + user.email);
  });
}
function handleSearchButton(anyFunction){
$('.search-button').on('click', anyFunction);
}
function main(){
  //this is going to execute the functions
  $.ajax(PRACTICE_URL).then(display);
  //display(PRACTICE_INFO);
  
}

handleSearchButton(main);







