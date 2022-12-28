//
const { template } = require('@babel/core')
class Music{
   
    constructor(title,artist = null,time = 0){
         this.musicID = 1
        this.title = title
        this.artist = artist
        this.time = time
    }

    getMusic(){
        return {
             musicID: this.musicID,
            title: this.title,
            artist: this.artist,
            time: this.time
        }

    }

}
class MusicPlayer{
    constructor(model){
        this.model = model
        this.status = 'stop'
    }

    addmusic(title,time,model){
      this.title = title
      this.model = model
      this.time = time
      if(this.title === Music.title && this.time === Music.time){return 'alredy have this song in playlist'}
      return "song added"
    }

    removemusic(musicid){
      if(playlist.length === 0){return `no have music id : ${musicid}`}
    }
}
module.exports ={Music,MusicPlayer};