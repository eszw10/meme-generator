import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar"> 
            <div className="logo">
                <img src="/assets/TrollFace.jpg" alt="" width={50}/>
                <h2>Meme Generator</h2>
            </div>
            <h4>By : Erycson Z.W</h4>
        </nav>
    );
}
 
export default Header;