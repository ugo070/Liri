## Liri-node-app

# Introduction

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface,LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands.

---

# Setup

1. Clone the repository

2. Run npm install, and the following packages should be installed:

   Node-Spotify-API

   Axios : This module will be used to get the IMDB and BandsInTown API data

   Moment

   DotEnv

3. Create a .env file in the same directory as the rest of the files. In the .env file should be:

   '# Spotify API keys'


    'SPOTIFY_ID=your-spotify-ID-here'

    'SPOTIFY_SECRET=your-spotify-secret-here'

## HOW TO USE LIRI

### **Video Guide**

Watch the video here: https://drive.google.com/file/d/1rT4qbvQoZnfuvI2KZXd_XE3xHcxFMZR9/view

### **Step by Step instructions**

1.  Open your terminal such as Bash.
2.  Navigate to the folder that contains the `liri.js` file.
3.  Depending on the command you run, the output will vary.
    The `Commands` are:

    - `concert-this`

    - `spotify-this-song`

    - `movie-this`

    - `do-what-it-says`

**Example 1**: Run the `concert-this` command

        node liri.js concert-this <name of artist or band>

Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

![Results](/screenshots/concert_this_results.PNG)

**Example 2**: Run the `spotify-this-song` command

        node liri.js spotify-this-song <name of song>

Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

![Results](/screenshots/spotify_this_results.PNG)

**Example 3**: Run the `movie-this` command

        node liri.js movie-this <name of movie>

Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:

![Results](/screenshots/movie_this_results.PNG)

    **Example 4**: Run the `do-what-it-says` command

        node liri.js do-what-it-says

    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file.  The program will take the text inside of random.txt and use it to call the first command with the second part as it's parameter

    Currently in random.txt, the following text is there:

    spotify-this-song,`I-want-it-That Way`

    This would call the spotify-this-song function and pass in "I Want it That Way" as the song.

    See screen-shot below:

    ![Results](/screenshots/dothis_this_results.PNG)

---

## TECHNOLOGIES USED

- Javascript
- Nodejs
- Node packages:
  - Node-Spotify-API
  - Request
  - Moment
  - DotEnv
- APIs used:
  - Bands in Town
  - OMDB
- Git
- GitHub
