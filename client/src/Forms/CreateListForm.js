import React from 'react'
import { useState } from 'react';

function CreateListForm({ user, setFormView }) {

    const [formData, setFormData] = useState ({
        title: "",
        list_type: "",
        user_id: user.id,
    });


    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // make the function async to enable the await keyword
    async function handleSubmit(e) {

        e.preventDefault();

        // fetch returns a Promise, we must await it
        const response = await fetch("/lists", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData),
        });

        // response.json() returns a Promise, we must await it
        const data = await response.json();
        if (response.ok) {
          console.log("List created:", data);
          setFormView(false);
          //afterCreateRecipe();
        } else {
            console.log(response);
        };
    };



    return (
        <div className="form">
            <h2>Create A New List!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <br/>
                <input 
                    name="title"
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="list_type">Type:</label>
                <br/>
                <select name="list_type" onChange={handleChange}>
                    <option value="Select">--Select-Category--</option>
                    <option value="MOVIES">Movies</option>
                    <option value="SHOWS">Shows</option>
                    <option value="GAMES">Games</option>
                </select>
                <br/>
                <input type="submit" value="Submit New List!"/>
            </form>
        </div>
    )
}

export default CreateListForm