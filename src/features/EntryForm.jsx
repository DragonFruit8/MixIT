// Music Entry Form

import { useState } from "react";

function EntryForm() {
  // const genres = [{
  // "popular": [
  //   "Pop",
  //   "Rock",
  //   "Hip-Hop",
  //   "R&B",
  //   "Country",
  //   "Electronic/EDM",
  //   "Folk",
  //   "Indie",
  //   "Alternative",
  //   "Punk",
  //   "Metal",
  //   "Reggae",
  //   "Blues",
  //   "Jazz"
  // ],
  // "classical": [
  //   "Classical",
  //   "Opera",
  //   "Chamber Music",
  //   "Baroque",
  //   "Romantic",
  //   "Modern Classical"
  // ],
  // "electronic": [
  //   "House",
  //   "Techno",
  //   "Trance",
  //   "Dubstep",
  //   "Drum and Bass",
  //   "Ambient",
  //   "Synthwave"
  // ],
  // "rock": [
  //   "Classic Rock",
  //   "Hard Rock",
  //   "Progressive Rock",
  //   "Grunge",
  //   "Gothic Rock",
  //   "Psychedelic Rock"
  // ],
  // "hipHop": [
  //   "Trap",
  //   "Old School Rap",
  //   "Conscious Rap",
  //   "Gangsta Rap",
  //   "Experimental Hip-Hop"
  // ],
  // "jazz": [
  //   "Swing",
  //   "Bebop",
  //   "Smooth Jazz",
  //   "Jazz Fusion",
  //   "Free Jazz"
  // ],
  // "world": [
  //   "Flamenco",
  //   "Bossa Nova",
  //   "Reggaeton",
  //   "K-Pop",
  //   "Bollywood",
  //   "Mariachi",
  //   "Celtic",
  //   "Middle Eastern",
  //   "African Traditional",
  //   "Latin American",
  //   "Asian Folk"
  // ],
  // "experimental": [
  //   "Avant-Garde",
  //   "Noise Music",
  //   "Minimalism",
  //   "Fusion",
  //   "Experimental"]}]
  const [entry, setEntry] = useState({
    title: "",
    artist: "",
    keySig: "",
    bpm: "",
    genre: "",
  });
  const genereList = [
    " select genre",
    "Pop",
    "Rock",
    "Hip-Hop",
    "R&B",
    "Country",
    "Electronic/EDM",
    "Folk",
    "Indie",
    "Alternative",
    "Punk",
    "Metal",
    "Reggae",
    "Blues",
    "Jazz",
    "Classical",
    "Opera",
    "Chamber Music",
    "Baroque",
    "Romantic",
    "Modern Classical",
    "House",
    "Techno",
    "Trance",
    "Dubstep",
    "Drum and Bass",
    "Ambient",
    "Synthwave",
    "Classic Rock",
    "Hard Rock",
    "Progressive Rock",
    "Grunge",
    "Gothic Rock",
    "Psychedelic Rock",
    "Trap",
    "Old School Rap",
    "Conscious Rap",
    "Gangsta Rap",
    "Experimental Hip-Hop",
    "Swing",
    "Bebop",
    "Smooth Jazz",
    "Jazz Fusion",
    "Free Jazz",
    "Flamenco",
    "Bossa Nova",
    "Reggaeton",
    "K-Pop",
    "Bollywood",
    "Mariachi",
    "Celtic",
    "Middle Eastern",
    "African Traditional",
    "Latin American",
    "Asian Folk",
    "Avant-Garde",
    "Noise Music",
    "Minimalism",
    "Fusion",
    "Experimental",
  ];

  const musicKeys = [
    " key",
    "A#",
    "A",
    "Ab",
    "B#",
    "B",
    "Bb",
    "C#",
    "C",
    "Cb",
    "D#",
    "D",
    "Db",
    "E#",
    "E",
    "Eb",
    "F#",
    "F",
    "Fb",
    "G#",
    "G",
    "Gb",
  ];
  const keyList = musicKeys.map((keys) => {
    return keys;
  });
  const list = genereList.toSorted();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEntry((prev) => {
      return { ...prev, [name]: value };
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    setEntry({
      title: entry.title,
      artist: entry.artist,
      keySig: entry.keySig,
      bpm: entry.bpm,
      genre: entry.genre,
    });
    console.log(entry);
  }

  return (
    <form name="songEntry" onSubmit={handleSubmit}>
      <h1>Song Entry</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={entry.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={entry.artist}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="keySig">Key:</label>
        <select
          id="keySig"
          name="keySig"
          value={entry.keyList}
          onChange={handleChange}
        >
          {keyList.map((keys, index) => {
            return (
              <option key={index} value={keys[index]} onChange={handleChange}>
                {keys}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="bpm">BPM:</label>
        <input
          type="number"
          id="bpm"
          name="bpm"
          value={entry.bpm}
          minLength="2"
          maxLength="3"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          name="genre"
          value={entry.genre}
          onChange={handleChange}
        >
          {list.map((genre, index) => {
            return (
              <option key={index} value={genre[index]} onChange={handleChange}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default EntryForm;
