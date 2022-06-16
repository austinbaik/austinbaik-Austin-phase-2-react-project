import React, { useState } from "react";
import './App.css';


function Cards({ imageData }) {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/images?id=7", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name, 
                comment: comment
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }



    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    let eachImage = imageData.map((img) => {
        return (
            <div class="img-div" key={img.objectID}>
                <h1> {img.title} </h1>
                <h2> {img.artistDisplayName} </h2>

                <img class="img"
                    src={img.primaryImage}
                    alt={img.primaryImageSmall}
                />

                <br></br>

                <form onSubmit={handleSubmit}>
                    <label>
                        Comment:
                        <input type="text" onChange={handleNameChange} value={name} />
                    </label>
                        Name:
                    <input type="text" onChange={handleCommentChange} value={comment} />
                    <button type="submit">Submit</button>
                </form>


            </div>
        )
    });

    return (
        <>
            "Hold This Space"
            <div>
                {eachImage}
            </div>
        </>
    )

}


export default Cards;




    // DATASTRUCTURE:
    // {
    //     "objectID": 436173,
    //     "isHighlight": true,
    //     "accessionNumber": "29.100.35",
    //     "accessionYear": "1929",
    //     "isPublicDomain": true,
    //     "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP253480.jpg",
    //     "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP253480.jpg",
    //     "additionalImages": [

    //     ],
    //     "constituents": [
    //       {
    //         "constituentID": 161821,
    //         "role": "Artist",
    //         "name": "Edgar Degas",
    //         "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500115194",
    //         "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q46373",
    //         "gender": ""
    //       }
    //     ],
    //     "department": "European Paintings",
    //     "objectName": "Drawing",
    //     "title": "Woman Having Her Hair Combed",
    //     "culture": "",
    //     "period": "",
    //     "dynasty": "",
    //     "reign": "",
    //     "portfolio": "",
    //     "artistRole": "Artist",
    //     "artistPrefix": "",
    //     "artistDisplayName": "Edgar Degas",
    //     "artistDisplayBio": "French, Paris 1834–1917 Paris",
    //     "artistSuffix": "",
    //     "artistAlphaSort": "Degas, Edgar",
    //     "artistNationality": "French",
    //     "artistBeginDate": "1834",
    //     "artistEndDate": "1917",
    //     "artistGender": "",
    //     "artistWikidata_URL": "https://www.wikidata.org/wiki/Q46373",
    //     "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500115194",
    //     "objectDate": "ca. 1886–88",
    //     "objectBeginDate": 1886,
    //     "objectEndDate": 1888,
    //     "medium": "Pastel on light green wove paper, now discolored to warm gray, affixed to original pulpboard mount",
    //     "dimensions": "29 1/8 x 23 7/8 in. (74 x 60.6 cm)",
    //     "measurements": [
    //       {
    //         "elementName": "Overall",
    //         "elementDescription": null,
    //         "elementMeasurements": {
    //           "Height": 74,
    //           "Width": 60.6
    //         }
    //       }
    //     ],
    //     "creditLine": "H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929",
    //     "geographyType": "",
    //     "city": "",
    //     "state": "",
    //     "county": "",
    //     "country": "",
    //     "region": "",
    //     "subregion": "",
    //     "locale": "",
    //     "locus": "",
    //     "excavation": "",
    //     "river": "",
    //     "classification": "Drawings",
    //     "rightsAndReproduction": "",
    //     "linkResource": "",
    //     "metadataDate": "2022-06-02T12:28:57.13Z",
    //     "repository": "Metropolitan Museum of Art, New York, NY",
    //     "objectURL": "https://www.metmuseum.org/art/collection/search/436173",
    //     "tags": [
    //       {
    //         "term": "Women",
    //         "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
    //         "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
    //       },
    //       {
    //         "term": "Female Nudes",
    //         "AAT_URL": "http://vocab.getty.edu/page/aat/300189568",
    //         "Wikidata_URL": "https://www.wikidata.org/wiki/Q40446"
    //       }
    //     ],
    //     "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19912688",
    //     "isTimelineWork": false,
    //     "GalleryNumber": "817"
    //   }

    // DATASTRUCTURE:
    // {
    //     "objectID": 436173,
    //     "isHighlight": true,
    //     "accessionNumber": "29.100.35",
    //     "accessionYear": "1929",
    //     "isPublicDomain": true,
    //     "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP253480.jpg",
