import React from 'react'
import { useState } from 'react';

function EditMediumForm({ selectedMedium, setFormView }) {

    const [newTitle, setNewTitle] = useState("");
    const [newStudio, setNewStudio] = useState("");
    const [newMedium_type, setNewMedium_type] = useState("");
    const [newImage, setNewImage] = useState("");


    //Submit handler for signup:
    function handleSubmit(e) {

        e.preventDefault();

        fetch(`/media/${selectedMedium.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: newTitle,
                studio: newStudio, 
                medium_type: newMedium_type,
                image: newImage
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setFormView(false);
        });
    };

    return (
        <div className="form">
            <h2>Edit List!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTitle">New Title:</label>
                <br/>
                <input 
                    type="text"
                    id="newTitle"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <br/>
                <label htmlFor="newStudio">New Studio:</label>
                <br/>
                <input 
                    name="newStudio"
                    type="text"
                    id="newStudio"
                    value={newStudio}
                    onChange={(e) => setNewStudio(e.target.value)}
                />
                <br/>
                <label htmlFor="newMedium_type">New Type:</label>
                <br/>
                <select name="newMedium_type" onChange={(e) => setNewMedium_type(e.target.value)}>
                    <option value="Select">--Select-Status--</option>
                    <option value="PENDING">Pending</option>
                    <option value="COMPLETE">Complete</option>
                </select>
                <br/>
                <label htmlFor="newImage">New Image:</label>
                <br/>
                <input 
                    name="newImage"
                    type="text"
                    id="newImage"
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                />
                <br/>
                <input type="submit" value="Submit!"/>
            </form>
        </div>
    )
}

export default EditMediumForm
