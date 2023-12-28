
import './App.css';
import Counter from './Components/Counter';
import Song from './Components/Song';
import SongList from './Components/SongList';


function App() {
  return (
    <div>
    <Counter></Counter>
    <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px"
            }}
            >
            <SongList />
            <Song />
            </div>

    </div>
    
  );
}

export default App;
