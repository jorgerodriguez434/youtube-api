const URL = "https://jsonplaceholder.typicode.com/users";
const PRACTICE_INFO = [{name:"Jorge"}, {name: "Erika"}];


function display(arrayOfData){
  //this is going to transform the data received
  //into HTML format
  console.log("\'display function executed\'")
  arrayOfData.map(user => {
          console.log(user.name +": "+ user.phone);
          
          $('.results').append("<li>" + user.name+": "+user.phone);
  });
}
function main(){
  //this is going to execute the functions
  $.ajax(URL).then(display);
  //display(PRACTICE_INFO);
  
}
main();













