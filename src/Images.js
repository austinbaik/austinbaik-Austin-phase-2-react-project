import { useEffect } from "react";
import React from 'react';
import Cards from './Cards';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";




// api call to fetch data   
//api documentation: https://metmuseum.github.io/#search
// @api call time 
// https://metmuseum.github.io/#search
// use a search api 
//we will need to use state to accomplish this 
//useEffect()
// render the cards that way 


function Images({ updateState, imageArray }) {


    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11&hasImages=true')
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

    const arrayLength = imageArray.length;  //count: 2618 
    const [remainingImages, setRemainingImages] = setState(0);
    const [hasMore, setHasMore] = setState(true);
    const [imageData, setImageData] = setState([]);

    // https://collectionapi.metmuseum.org/public/collection/v1/objects/436173

    function fetchMoreData(){
        // let i = remainingImages, for ( i = [], < 10)
        // let imageID = imageArray[i]

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${imageID}`)
            .then(response => response.json())
            .then(response => {
                console.log('response', response)
                console.log('response.objectIDs', response.objectIDs);
                setImageData((response.objectIDs)) //concat 
            }) 

            remainingImages < arrayLength ? setHasMore(true) : setHasMore(false)
    }

    // first api call -> loads to state -> begin rendering the cards (which make api calls ad hoc?)
    // db,json < what goes here?  

    // at end of page get next 9 images?

    // function fetchImageObjects({imageArray}){
    //         // https://collectionapi.metmuseum.org/public/collection/v1/objects/{number}
    //         fetch ()
    //     }



    return (

        <div>
            <div style="height:700px;overflow:auto;">
            </div>

            <InfiniteScroll
                dataLength={remainingImages}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}

            >
                

                <Cards />
            </InfiniteScroll>


        </div>
    )
};


export default Images;