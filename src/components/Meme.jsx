import { useState } from "react";
import memesData from "../data/MemesData";

const Meme = () => {
    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMemeImage() {
        let memesArray = memesData.data.memes
        setMeme(meme => {
            return {
                ...meme,
                randomImage : memesArray[Math.floor(Math.random()*memesArray.length)].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(meme => {
            return {
                ...meme,
                [name] : value
            }
        })
    }

    return (
        <form action="" className="main-container">
            <input type="text" placeholder="top text" className="input-meme" name="topText" onChange={handleChange} value={meme.topText}/>
            <input type="text" placeholder="bottom text" className="input-meme" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
            <button type="button" className="meme-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </form>
    );
}
 
export default Meme;