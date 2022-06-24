import React, { useState, useEffect } from "react";

//renders the image cards with comments from db.json
//will need to read from state 

function Favorites() {

    const [allCommentedImages, setAllCommentedImages] = useState([])

    useEffect(() => {
        console.log("favorites page fires")

        let dbJSONObj = []
        fetch("http://localhost:3000/images")
            .then(response => response.json())
            .then(data => {

                dbJSONObj = data
            })
            .then(() => setAllCommentedImages(dbJSONObj))


        //component appears more than once in the page 
        //something higher up the tree is unmounting and remounting 
        //strict mode 
    }, [])


    let eachComment = allCommentedImages.map(commentObj => {
        return (
            <div key={commentObj.id}>
                <img src={commentObj.imgUrl} />
                <div>{commentObj.comment}</div>
            </div>
        )


    })


    return (
        <div> {eachComment} </div>
    )
}


export default Favorites