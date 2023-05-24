const Meme = () => {
    // function randomURL() {
    //     console.log(memesData["data"]["memes"][Math.floor(Math.random()*10)]["url"])
    // }
    return (
        <form action="" className="main-container">
            <input type="text" placeholder="top text" className="input-meme"/>
            <input type="text" placeholder="bottom text" className="input-meme"/>
            <button type="submit" className="meme-btn">Get a new meme image 🖼</button>
        </form>
    );
}
 
export default Meme;