import './App.css'
import MusicItem from './features/shared/MusicItem';
import songs from '../songs.json'
import EntryForm from './features/EntryForm';

function App() {


  return (
    <>
      <div>
      <EntryForm />
            {songs.map(song => {
        return(
          <MusicItem
            id={song.id}
            key={song.id}
            title={song.title}
            artist={song.artist}
            keySig={song.key}
            bpm={song.bpm}
            plays={song.plays}
            diff={song.difficulty}
            genre={song.genre}
          />
        )
            })

    }
      </div>
    </>
  )
}

export default App
