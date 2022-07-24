import React from 'react';
import './App.css';


//Home page component for the application. 
//Users navigating to this application are directed to this landing page 

function Home() {

    return (
        <div class=".body">
            <h1>Welcome!</h1>
            <h2>The Metropolitan Museum of Art's Collection of Vincent van Gogh</h2>
            <div>
                This site displays the Metropolitan Museum of Art's collection of Vincent van Gogh's artwork. 
                <br></br>
                <br></br>

                Special thanks to the Met's open access API      

                <img className="images-holder" src="https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg" alt="Vincent van Gogh"/>
            </div>
        </div>
    )
}

export default Home; 