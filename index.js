const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function render(data){
  data.items.map(video  => {
          $('.results').empty().append(
          `
          <li> <h1>${video.snippet.title}</h1>
               <p>${video.snippet.description}</p>
               <img src = "${video.snippet.thumbnails.medium.url}">
               <iframe src="https://www.youtube.com/embed/${video.id.videoId} title="videoTitle" </iframe>
 
          `)
  });
}

function fetch(searchTerm, callBack){
  console.log(searchTerm);
  const params = {
    part: 'snippet', 
    key: "AIzaSyBrEPE9JGPWkYpX06O2gMOloYSgUKXcMhQ",
    q: searchTerm,
  }
  $.getJSON(YOUTUBE_SEARCH_URL, params, callBack);
}

$('.search-button').on('click', event => {
  event.preventDefault();
  let searchTerm = $('input').val();
  console.log(searchTerm);
  fetch(searchTerm, render)
 
});







