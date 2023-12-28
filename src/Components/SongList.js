import songsData from "../data/songData"; 
import { useDispatch } from "react-redux";
import selectedSong from "../redux/actions/songActions.js";
const SongList=()=>{
    const dispatch = useDispatch();
    return <div >
        <h1>ALL SONGS</h1>
        {
            songsData.map((song)=>(
               <div key={song.id} style={{backgroundColor:"aqua" , width:"fit-content" , color:"brown" }} onClick={()=>dispatch(selectedSong(song))}>
                <p>{song.name}</p>
                <p>{song.artist}</p>
                <p>{song.duration}</p>
                <p>{song.album}</p>
                
               </div> 
            ))
        }
    </div>

}
export default SongList;