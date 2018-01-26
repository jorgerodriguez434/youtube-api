const PRACTICE_URL = "https://jsonplaceholder.typicode.com/users";
const PRACTICE_INFO = [{name:"Jorge"}, {name: "Erika"}];
const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories?q=thinkful%20in:name&page=1&per_page=5';

function renderData(arrayOfData){
  //this is going to display the data received
  console.log("\'display function executed\'")
  arrayOfData.items.map(index => {
          console.log(index.owner.login);
          $('.results').append(`<li> ${index.owner.login} `);
  });
}

function handleSearchButton(anyFunctionPassed){
$('.search-button').on('click', anyFunctionPassed);
}

function fetch(){
  //this is going to execute the functions
  $.ajax(GITHUB_SEARCH_URL).then(renderData);
  //renderData(PRACTICE_INFO);
}

handleSearchButton(fetch);



