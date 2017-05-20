//Array of movie objects
//Each movie has a title, rating, and hasWatched properties

var movies = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Fight Club",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
];

function displayMovieInfo(movie){
	var str = movie.hasWatched ? "You have seen " : "You have not seen ";
	return str + "\""+movie.title+"\"" + " - " + movie.rating + " stars";
}

movies.forEach(function(movie){	
	console.log(displayMovieInfo(movie));
});