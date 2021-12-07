import React from 'react'

function MediumCard({ medium, setSelectedMedium, setFormView, setFormFilter }) {

    //Deletes a Medium:
    function handleDelete() {
        fetch(`/media/${medium.id}`, {
            method: "DELETE" 
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                // afterDelete();
            } else {
                console.log(response)
            }
        });
    };


    return (
        <div className="mediumCard">
            <img 
                className="mediumImage" 
                src={medium.image} 
                style={{width: "150px", height: "200px"}} 
                alt={medium.title}
            />
            <h3>{medium.title}</h3>
            <p>{medium.studio}</p>
            <p>{medium.medium_type}</p>
            <button className="cardButton" id="medButtonE" onClick={() => {
                setFormView(true)
                setFormFilter("PATCH_MEDIUM")
                setSelectedMedium(medium)
            }}>
                Edit
            </button>
            <button className="cardButton" id="medButtonD" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MediumCard
