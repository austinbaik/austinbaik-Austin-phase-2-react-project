import React, { useState, useEffect } from "react";
import './App.css';

//This component renders the image cards with comments from db.json

function Favorites() {

    const [allCommentedImages, setAllCommentedImages] = useState([])

    useEffect(() => { //when component initializes, useEffect sends a Fetch request to db.json 
                        //returned objects contain image info and user comment 
                        //sets State with the array of objects 
        console.log("favorites page fires")

        let dbJSONObj = []
        fetch("http://localhost:3000/images")
            .then(response => response.json())
            .then(data => {

                dbJSONObj = data
            })
            .then(() => setAllCommentedImages(dbJSONObj))
    }, [])


    let eachComment = allCommentedImages.map(commentObj => { //.map method is called to build the individual image and comment objects for page render
        return (
            <div  className="images-holder" key={commentObj.id}>
                <img class="img" src={commentObj.imgUrl} />
                <div>{commentObj.comment}</div>
                <div>-{commentObj.name}</div>
            </div>
        )


    })


    return (
        <div > {eachComment} </div>
    )
}


export default Favorites