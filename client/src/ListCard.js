import React from 'react'

function ListCard({ list, setSelectedList, setListView, setMedia, setFormView, setFormFilter }) {

    //Fetches List data and saves to selectedList:
    function handleSelect() {
        fetch(`lists/${list.id}`, {
            method: "GET"
        })
        .then((response) => {
            if(response.ok) {
                response.json().then((list) => {
                    setSelectedList(list)
                    setMedia(list.media)
                    setListView(false);
                });
            } else {
                console.log(response);
            }
        });
    };

    //Deletes a List:
    function handleDelete() {
        fetch(`/lists/${list.id}`, {
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
        <div className="listCard" onClick={handleSelect}>
            <h3>{list.title}</h3>
            <p>{list.list_type}</p>
            <button className="cardButton" onClick={() => {
                setFormView(true)
                setFormFilter("PATCH_LIST")
            }}>
                Edit
            </button>
            <button className="cardButton" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ListCard
