# Requirements

Write a class called  Music and Musicplayer 
## Music Properties:

- **MusicId** (_Number_) : musicid When an object is created, it is created and incremented by 1 when creating the next object.
- **title** (_String_):The name of a song, which can be repeated from another object.
- **artist** (_String_):The name of artist
- **time** (_Number_) : The time of the song, if that time is negative, it will be set to 1.00

## Musicplayer Properties:

- **playlist** (_array of Music_) : list of music in musicplayer
- **model** (_String_):Music player model name Ex. "Anon 312S" , "Sony mx1234"
- **status** (_String_) : Status of the music player, which can only "play" and "stop".

## Music Functions:

- **constructor(title,artist,time)** : Create a constructor that takes title, artist and time values bytitle and artist defaults to null and time defaults to 0.
- **getMusic()** : returns the music

## Musicplayer Functions:

- **constructor(model)** : Create a constructor that takes model 
- **addmusic(title,time)** : Add a song to a playlist, if the song added has the same name and time as the song in that playlist, it will not be added and will return.
"alredy have this song in playlist" If added, it will return" song added"
- **removemusic(musicid)** : Delete a song in the playlist and if there is no song it will return "no have music id : x" where x is the musicid you want to delete but if it can delete it will return"remove: x complete "where x represents the MusicID you want to remove.
- **play()** : Change the status of musicplayer, if it is stop it will change to play and if it is play it will change to stop.
- **gettitleMusic()** : Displays the title of all songs in the playlist. Ex. ["baby","call mebaby"]
- **getArtist()** : Show artist name and the number of songs by that artist Ex.{justin bieber:10,puyarn:2}