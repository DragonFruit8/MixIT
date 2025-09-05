// Music [Object] Item

function MusicItem({ title, artist, keySig, bpm, plays, diff, genre }) {
  return (
    <ul>
      <li>
        <p>{title}</p>
        <p>{artist}</p>
        <p>Key: {keySig}</p>
        <p>BPM: {bpm}</p>
        <p>Plays: {plays}</p>
        <p>Difficulty: {diff}</p>
        <p>Genre: {genre}</p>
      </li>
    </ul>
  );
}

export default MusicItem;
