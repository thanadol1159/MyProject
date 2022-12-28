const {Music,MusicPlayer} = require('./Musicplayer.js')

test('output#1: Music constructor', () => {
  const Ms1 = new Music("MUSE","punyarb",2)
  expect(Ms1.getMusic()).toStrictEqual({ musicID: 1, title: 'MUSE', artist: 'punyarb', time: 2 })
}) 
test('output#2: Music Player constructor', () => {
  const Ms1 = new MusicPlayer("Sony Walkman")
  expect(Ms1.model).toBe('Sony Walkman')
  expect(Ms1.status).toBe('stop')
  const Ms2 = new MusicPlayer("Hiby")
  expect(Ms2.model).toBe('Hiby')
  expect(Ms2.status).toBe('stop')
})

test('output#3: Musicplayer constructor && Remove Music', () => {
  const Mp1 = new MusicPlayer("Sony XM40")
  Mp1.addmusic("MUSE","PUNYARB",1)
  Mp1.addmusic("Love youself","Justin",3)
  Mp1.addmusic("Fireboy","PP-Krit",3.2)
  Mp1.addmusic("12345 i love you","thebottomblue",1)
  expect(Mp1.removemusic(2)).toBe('remove: 2 complete ')

  const Mp2 = new MusicPlayer("Sony XM40")
  Mp2.addmusic("MUSE","PUNYARB",1)
  Mp2.addmusic("Love youself","Justin",3)
  Mp2.addmusic("Fireboy","PP-Krit",3.2)
  Mp2.addmusic("12345 i love you","thebottomblue",1)
  expect(Mp1.removemusic(10)).toBe('no have music id : 10')
})
test('output#4: Music Player constructor && addMusic', () => {
  const Ms1 = new MusicPlayer("Sony Walkman")
  expect(Ms1.addmusic("MUSE","punyarb",2)).toBe('song added')
  expect(Ms1.addmusic("FireBoy","PP-Krit",2.5)).toBe('song added')
  expect(Ms1.addmusic("MUSE","punyarb",2)).toBe('alredy have this song in playlist')
})
test('output#5: Music Player constructor && playMusic', () => {
  const Ms2 = new MusicPlayer("Sony Walkman")
  expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('song added')
  expect(Ms2.addmusic("FireBoy","PP-Krit",2.5)).toBe('song added')
  // expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('alredy have this song in playlist')
  expect(Ms2.addmusic("17","Dept",5)).toBe('song added')
  expect(Ms2.addmusic("die for you","joji",5)).toBe('song added')

  expect(Ms2.play()).toStrictEqual()
  expect(Ms2.status).toBe('play')
  expect(Ms2.play()).toStrictEqual()
  expect(Ms2.status).toBe('stop')
})

test('output#5: Music Player constructor && getTitleMusic', () => {
  const Ms2 = new MusicPlayer("Sony Walkman")
  expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('song added')
  expect(Ms2.addmusic("FireBoy","PP-Krit",2.5)).toBe('song added')
  expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('alredy have this song in playlist')

  expect(Ms2.gettitleMusic()).toStrictEqual([ 'MUSE', 'FireBoy' ])
  expect(Ms2.addmusic("17","Dept",5)).toBe('song added')
  expect(Ms2.addmusic("die for you","joji",5)).toBe('song added')
  
  expect(Ms2.gettitleMusic()).toStrictEqual([ 'MUSE', 'FireBoy', '17', 'die for you' ])
})

test('output#6: Music Player constructor && getArtist', () => {
  const Ms2 = new MusicPlayer("Sony Walkman")
  expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('song added')
  expect(Ms2.addmusic("FireBoy","PP-Krit",2.5)).toBe('song added')

  expect(Ms2.addmusic("MUSE","punyarb",2)).toBe('alredy have this song in playlist')

  expect(Ms2.getArtist()).toStrictEqual({ punyarb: 1, 'PP-Krit': 1 })
  expect(Ms2.addmusic("17","Dept",5)).toBe('song added')
  expect(Ms2.addmusic("die for you","joji",5)).toBe('song added')

  expect(Ms2.getArtist()).toStrictEqual({ punyarb: 1, 'PP-Krit': 1, Dept: 1, joji: 1 })
})

