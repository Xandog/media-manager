import React from 'react'
import { useState } from 'react';

function CreateMediumForm({ selectedList, setFormView }) {

    const [formData, setFormData] = useState ({
        title: "",
        studio: "",
        medium_type: "",
        image: "",
        list_id: selectedList.id
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
        const response = await fetch("/media", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData),
        });

        // response.json() returns a Promise, we must await it
        const data = await response.json();
        if (response.ok) {
          console.log("Medium created:", data);
          setFormView(false);
          //afterCreateRecipe();
        } else {
            console.log(response);
        };
    };



    return (
        <div className="form">
            <h2>Create A New Medium!</h2>
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
                <label htmlFor="studio">Studio:</label>
                <br/>
                <input 
                    name="studio"
                    type="text"
                    id="studio"
                    value={formData.studio}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="medium_type">Type:</label>
                <br/>
                <select name="medium_type" onChange={handleChange}>
                    <option value="Select">--Select-Status--</option>
                    <option value="PENDING">Pending</option>
                    <option value="COMPLETE">Complete</option>
                </select>
                <br/>
                <label htmlFor="image">Image:</label>
                <br/>
                <input 
                    name="image"
                    type="text"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" value="Submit New Medium!"/>
            </form>
        </div>
    )
}

export default CreateMediumForm
