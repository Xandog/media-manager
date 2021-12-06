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
            <h3>{medium.title}</h3>
            <p>{medium.studio}</p>
            <p>{medium.medium_type}</p>
            <img 
                className="mediumImage" 
                src={medium.image} 
                style={{width: "100px", height: "50px"}} 
                alt={medium.title}
            />
            <button className="cardButton" onClick={() => {
                setFormView(true)
                setFormFilter("PATCH_MEDIUM")
                setSelectedMedium(medium)
            }}>
                Edit
            </button>
            <button className="cardButton" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MediumCard
