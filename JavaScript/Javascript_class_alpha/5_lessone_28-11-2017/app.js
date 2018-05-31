document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dec98e79d2aec75190733d49177237a3')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (var i = 0; i < data.results.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<img src="http://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" atl="${data.results[i].title} poster" class="card-img-top" />
<div class="card-body">
<h4 class="card-title">${data.results[i].title}</h4>
<p class="card-text">${data.results[i].overview}</p>
<a href="#"
class="btn btn-primary float-right movie-details"
data-toggle="modal"
data-target="#movie-modal"
data-movie-id="${data.results[i].id}"
>Read More</a>
</div>
<div class="card-footer text-muted text-right">
<i class="octicon octicon-clock" style="font-size: 16px;"></i> ${data.results[i].release_date} &nbsp;
<i class="octicon octicon-heart" style="font-size: 16px;"></i> ${data.results[i].vote_average}
</div>`;
        const posts = document.querySelector('#movies-container');
        posts.appendChild(newDiv);
      }
    });
});