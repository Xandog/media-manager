//import React, { useEffect } from 'react'
import { useState } from 'react';

function EditListForm({ selectedList, setFormView}) {

    const [newTitle, setNewTitle] = useState("");
    const [newList_type, setList_type] = useState("");


    //Submit handler for signup:
    function handleSubmit(e) {

        e.preventDefault();

        fetch(`/lists/${selectedList.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {title: newTitle, list_type: newList_type} ),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.reload(false);
            setFormView(false);
        });
    };

    return (
        <div className="form">
            <button className="formButton" onClick={()=>setFormView(false)}>Cancel</button>
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
                <label htmlFor="newList_type">New Type:</label>
                <br/>
                <select name="newList_type" onChange={(e) => setList_type(e.target.value)}>
                    <option value="Select">--Select-Category--</option>
                    <option value="MOVIES">Movies</option>
                    <option value="SHOWS">Shows</option>
                    <option value="GAMES">Games</option>
                </select>
                <br/>
                <input type="submit" value="Submit!"/>
            </form>
        </div>
    )
}

export default EditListForm
