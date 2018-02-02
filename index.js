const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function render(data){
  $('.results').empty();
  let count = 0;
  console.log(data.kind);
  data.items.map(video  => {
          count++;
          $('.results').append(
          `
          <li> <h1>${video.snippet.title}</h1>
               <p>${video.snippet.description}</p>
               <!-- <img src = "${video.snippet.thumbnails.medium.url}"> -->
               <a href="https://www.youtube.com/watch?v=${video.id.videoId}"> Watch on YouTube</a>
               <iframe src="https://www.youtube.com/embed/${video.id.videoId}" title="video" tabindex="${count}"</iframe>
 
          `);
  });
}

function fetch(searchTerm, callBack){
  const params = {
    part: 'snippet', 
    key: "AIzaSyBrEPE9JGPWkYpX06O2gMOloYSgUKXcMhQ",
    q: searchTerm,
    maxResults: 10,
  }
  $.getJSON(YOUTUBE_SEARCH_URL, params, callBack);
}

$('.search-button').on('click', event => {
  event.preventDefault();
  let searchTerm = $('input').val();
  fetch(searchTerm, render)
 
});







