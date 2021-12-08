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
                alt="https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
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
