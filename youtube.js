const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromYouTubeApi(searchTerm, callback) {
  const query = {
    q: `${searchTerm} in:name`,
    per_page: 5
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}
function renderResult(result) {
  return `
    <div>
      <h2>
      <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
      <p>Number of watchers: <span class="js-watchers-count">${result.watchers_count}</span></p>
      <p>Number of open issues: <span class="js-issues-count">${result.open_issues}</span></p>
    </div>
  `;
}
function displayYouTubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $(".js-testing-search-button-result").html(results);
}
function watchSubmit() {
  $(".js-youtube-search-form").submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find(".js-query");
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromYouTubeApi(query, displayYouTubeSearchData);
  });
}
function handleSubmitButton(){
	$(".js-testing-search-button-result").text("Testing search button result.").hide();
	//when the submit button is clicked, show the text.
	$(".js-youtube-search-form").submit("click", event => {
	  event.preventDefault();
	 $(".js-testing-search-button-result").show();
	 $(".js-reset-button").show();
	});
}//handleSubmitButton
function handleResetButton(){
  $(".js-reset-button").on("click", event => {
    event.preventDefault();
    $(".js-testing-search-button-result").hide();
    $(".js-reset-button").hide();
  });
}//handleResetButton
function handleEveything(){
	handleSubmitButton();
	handleResetButton();
	watchSubmit();
}

$(handleEveything)