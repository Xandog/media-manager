import React from 'react'

function MediumCard({ medium, setSelectedMedium, setFormView, setFormFilter }) {

    //Deletes a Medium:
    function handleDelete() {
        fetch(`/media/${medium.id}`, {
            method: "DELETE" 
        })
        .then((response) => {
            if (response.ok) {
                console.log(response);
                window.location.reload(false);
            } else {
                console.log(response);
            }
        });
    };


    return (
        <div className="mediumCard">
            <p id="cardTypeM">{medium.medium_type}</p>
            <img 
                className="mediumImage" 
                src={medium.image} 
                alt={medium.title}
            />
            <h3>{medium.title}</h3>
            <p>{medium.studio}</p>
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
