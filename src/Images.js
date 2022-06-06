import { useState, useEffect } from "react";
import React from 'react';
import Cards from './Cards';


// api call to fetch data   
//api documentation: https://metmuseum.github.io/#search
// @api call time 
// https://metmuseum.github.io/#search
// use a search api 
//we will need to use state to accomplish this 
//useEffect()
// render the cards that way 
// https://betterprogramming.pub/async-infinite-scroll-in-react-js-71a6f1210c75


function Images({ updateState, imageArray }) {
    const arrayLength = imageArray.length;  //count: 2618 
    const [remainingImageIDs, setRemainingImageIDs] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [imageData, setImageData] = useState([]);

    https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&hasImages=true&artistOrCulture=true&q=vincent

    // https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11&hasImages=true
    useEffect(() => { //initial API call that loads the collection of object IDs
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&hasImages=true&artistOrCulture=true&q=vincent')
            .then(response => response.json())
            .then(response => {
                console.log('response', response)
                console.log('response.objectIDs', response.objectIDs);
                updateState(response.objectIDs)
            })
    },

        []
    );

    // axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/')
    // https://collectionapi.metmuseum.org/public/collection/v1/objects/436173

    // async function fetchMoreData(e) {
    //     e.preventDefault()
    //     let i = 0;
    //     let tempArray = []
    //     let newRemainingIDS = remainingImageIDs
    //     do {
    //         let ObjectID = newRemainingIDS + i

    //         let IDForArray = imageArray[ObjectID]
    //         await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${IDForArray}`)
    //             .then(response => response.json())
    //             .then(response => {
    //                 console.log('response', response)
    //                 tempArray.push(response)
    //             }),
    //             i += 1;
    //     } while (i < 9);

    //     setRemainingImageIDs(newRemainingIDS + 9)
    //     setImageData([...imageData, ...tempArray]) //concat
    //     //.push is destructive && must use spread array both times for objects inside to be one array
    //     setHasMore(arrayLength - (newRemainingIDS + 9) > 0) //gives true or false by default 
    // }


    // console.log("imageData", imageData)

    // newRemainingIDS < arrayLength ? setHasMore(true) : setHasMore(false)
    // setRemainingImageIDs(newRemainingIDS)

    // let testing = imageData.map((img) => {
    //     return (
    //         <div>
    //             {img.title}
    //         </div>
    //     )
    // });

    return (

        <>
         
      <Cards imageData={imageData} />

      
            {/* {imageData.map((img) => {
                    return (
                        <div>
                            {img.title}
                        </div>
                    )

                })} */}


            {/* </div> */}





        </>

    )
};


export default Images;