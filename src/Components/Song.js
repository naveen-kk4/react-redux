import { useSelector } from "react-redux";


const Song = ()=>{
    const song = useSelector((state)=>state.song);
    return (
      <div>
    {song && (
        <div>
            <p>{song.name}</p>
            <p>{song.artist}</p>
        </div>
    )}
      </div>
    )
}
export default Song;