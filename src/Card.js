import React, { useState } from "react";
import './App.css'

function Card({ imgObj }) {
    console.log("img", imgObj)

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [imgURL, setImgURL] = useState(imgObj.primaryImage)
    const [imgName, setImgName] = useState(imgObj.title)
    const [objID, setObjID] = useState(imgObj.objectID)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/images/", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                comment: comment,
                imgUrl: imgURL,
                imgName: imgName,
                objID: objID, 

            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setName("")
                setComment("")
            })

    }

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleCommentChange(e) {
        setComment(e.target.value)
    }


    return (

        <div className="images-holder" key={imgObj.objectID}>
            <h1> {imgObj.title} </h1>
         
            <img class="img"
                src={imgObj.primaryImage}
                alt={imgObj.primaryImageSmall}
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
}


export default Card;