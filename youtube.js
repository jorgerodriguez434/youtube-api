const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromYouTubeApi(searchTerm, callback) {
  const query = {
    part: "snippet", 
    key: "AIzaSyBrEPE9JGPWkYpX06O2gMOloYSgUKXcMhQ",
    q: `${searchTerm} in:name`,
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}
function handleSearchButton(){
  $(".js-testing-search-button-result").text("Get thumbnails of the videos.").hide();
  //when the submit button is clicked, show the text.
  $(".js-youtube-search-form").submit("click", event => {
    event.preventDefault();
   $(".js-testing-search-button-result").show();
   $(".js-reset-button").show();
   $(".js-youtube-thumbnail").show();
  });
}//handleSubmitButton
function handleResetButton(){
  $(".js-reset-button").on("click", event => {
    event.preventDefault();
    $(".js-testing-search-button-result").hide();
    $(".js-reset-button").hide();
    $(".js-youtube-thumbnail").hide();
  });
}//handleResetButton 
function handleEveything(){
  handleSearchButton();
  handleResetButton();
}

$(handleEveything)






