import React from "react";
import './Cards.css';


function Cards({ imageData }) {

    //we will be returning cards 
    //each card has a favorite button (star)
    //each card has a comment form 
    //comment writes to db.json in "POST"
    //

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("submitted! (for now)");
    }

    let eachImage = imageData.map((img) => {
        return (
            <div class="img" key={img.objectID}>
                <h1> {img.title} </h1> 
                <h2> {img.artistDisplayName} </h2> 

                <img
                    src={img.primaryImage}
                    alt={img.primaryImageSmall}
                /><button id="favorite">⭐️</button>
                <br></br>

                <form onSubmit={handleSubmit}>
                    <label>
                        Comment:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
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
