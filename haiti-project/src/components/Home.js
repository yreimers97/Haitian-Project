import React from "react"
import titlePic from "../titlePic/haitian-revolution.png"

function Home() {
    return(
        <div className="Home">
                <h2> Official Languages: Haitian Creole & French</h2>
            <br/>
                <h2>Geographically: Mountainous</h2>
            <br/>
                <h2>Climate: Warm & Humid</h2>
            <br/>
                <h2>Music Genre: Konpa</h2>

            <footer className="footer">
                <img className= "titlePic" src={titlePic} alt=""/>
            </footer>
        </div>
      
    )
}

export default Home