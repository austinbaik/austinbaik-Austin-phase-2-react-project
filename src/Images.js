import { useState, useEffect } from "react";
import React from 'react';
import Cards from './Cards';
import './App.css';


function Images() {
    const [objArray, setObjArray] = useState([])

    useEffect(() => {  //initial API call that loads the collection of object IDs
        console.log("in useEffect")

        let objectIds = [436533, 436528, 436529, 436532, 436535, 437984, 436536, 436526, 438722, 436531, 437998, 436525, 436534, 436524, 436530, 437980, 436527, ]
        // https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&hasImages=true&artistOrCulture=true&q=vincent
        //api query for all Vincent van Gogh paintings with image from Met collection 
        const urls = objectIds.map(id => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        let tempArray = []

        urls.forEach(u => {
            console.log("u", u)
            // loadData(u)
            fetch(`${u}`)
                .then(response => response.json())
                .then(data => {

                    tempArray = [...tempArray, data]
                })
                .then(() => setObjArray(tempArray)) // API response delivers the painting object from the Met's API and then set to State image object 
            

            //component appears more than once in the page 
            //something higher up the tree is unmounting and remounting 
            //strict mode 
    })}, [])


    // This code left commented out for reference to future application roadmap utilizing infinite scroll
    
    // const loadData = async (u) => {
    //     let tempArray = []
    //     await fetch(`${u}`)
    //     .then(response => response.json())
    //     .then(data => setObjArray([...objArray, data]))
    // }



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
    // newRemainingIDS < arrayLength ? setHasMore(true) : setHasMore(false)
    // setRemainingImageIDs(newRemainingIDS)


    return (
        //array of image objects is sent down as a prop to Cards component 
        <div className="body">

            <Cards imageData={objArray} /> 
            
        </div>

    )
};


export default Images;