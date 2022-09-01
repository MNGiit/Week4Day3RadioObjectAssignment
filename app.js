// How to begin: 
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 
class Radio {
    constructor(stations) {
        this.stations = stations;
    }
}

class Station {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
    }
}

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

let songs = [];
songs.push(new Song("Classical 1", "Ancient Musician 1"));
songs.push(new Song("Classical 2", "Ancient Musician 1"));
songs.push(new Song("Classical 3", "Ancient Musician 2"));
songs.push(new Song("Classical 4", "Ancient Musician 2"));
songs.push(new Song("Classical 5", "Ancient Musician 3"));

songs.push(new Song("Synthwave 1", "Synthwave Musician 1"));
songs.push(new Song("Synthwave 2", "Synthwave Musician 1"));
songs.push(new Song("Synthwave 3", "Synthwave Musician 2"));
songs.push(new Song("Synthwave 4", "Synthwave Musician 2"));
songs.push(new Song("Synthwave 5", "Synthwave Musician 3"));

let stations = [];
stations.push(new Station("Classic music rocks", [songs[0], songs[1], songs[2], songs[3], songs[4]]));
stations.push(new Station("Synthwave is better", [songs[5], songs[6], songs[7], songs[8], songs[9]]));