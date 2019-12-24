const axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
const moment = require("moment");
const fs = require("fs");
var Spotify = require("node-spotify-api");
let searchTermHyphen = process.argv.slice(3).join("-");
let searchTermSpace = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);
// var seatgeek = keys.seatgeek.id;

// if (process.argv[2] === "concert-this") {
//   concertThis(searchTermHyphen);
// }
// function concertThis(searchTermHyphen) {
//   const URL = `https://api.seatgeek.com/2/events?client_id=${seatgeek}&performers.slug=${searchTermHyphen}`;
//   axios.get(URL).then(function(response) {
//     const answer = response.data.events[0];
//     console.log(answer.venue.name);
//     console.log(answer.venue.extended_address);
//     //formatting date with moment
//     console.log(moment(answer.datetime_local).format("MM/DD/YYYY"));
//   });
// }

if (process.argv[2] === "spotify-this-song") {
  spotifyThisSong(searchTermSpace);
}
function spotifyThisSong(searchTermSpace) {
  // setting search parameter to These Are Special Times of base if undeclared
  if (!searchTermSpace) {
    searchTermSpace = "These Are Special Times";
  }

  spotify.search({ type: "track", query: searchTermSpace }, function(
    err,
    data
  ) {
    // (below) if error redo search with the These Are Special Times as search param
    if (err) {
      spotify.search(
        { type: "track", query: "These Are Special Times" },
        function(err, data) {
          if (err) {
            return console.log("Error occurred: " + err);
          } else {
            const answer = data.tracks.items[0];
            console.log(answer.artists[i].name);
            console.log(answer.name);
            console.log(answer.external_urls.spotify);
            console.log(answer.album.name);
          }
        }
      );
      return console.log("Error occurred: " + err);
    }
    // (above) if error redo search with These Are Special Times as search param

    const answer = data.tracks.items[0];

    //looping through multiple artists if they exist
    for (i = 0; i < answer.artists.length; i++) {
      console.log(answer.artists[i].name);
    }

    console.log(answer.name);
    console.log(answer.external_urls.spotify);
    console.log(answer.album.name);
  });
}

if (process.argv[2] === "movie-this") {
  movieThis(searchTermHyphen);
}
function movieThis(searchTermHyphen) {
  // setting search parameter to Transporter if undeclared
  if (!searchTermHyphen) {
    searchTermHyphen = "Transporter";
  }

  const URL = `http://www.omdbapi.com/?apikey=trilogy&t=${searchTermHyphen}`;
  axios.get(URL).then(function(response) {
    const answer = response.data;
    console.log(answer.Title);
    console.log(answer.Year);
    console.log("IMDB rating: " + answer.Ratings[0].Value);
    // console.log("Rotten Tomatoes rating: " + answer.Ratings[1].Value);
    console.log(answer.Country);
    console.log(answer.Language);
    console.log(answer.Plot);
    console.log(answer.Actors);
  });
}

if (process.argv[2] === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", (err, data) => {
    if (err) throw err;
    const dataArray = data.split(",");
    if (dataArray[0] === "concert-this") {
      concertThis(dataArray[1].replace(" ", "-"));
    }
    if (dataArray[0] === "spotify-this-song") {
      spotifyThisSong(dataArray[1]);
    }
    if (dataArray[0] === "movie-this") {
      movieThis(dataArray[1].replace(" ", "-"));
    }
  });
}
