import React from 'react'
import { useState } from "react";

import ListCard from './ListCard'
import MediumCard from './MediumCard';

function MainView({ user, setFormView, setFormFilter, selectedList, setSelectedList, setSelectedMedium }) {
    
    const [listView, setListView] = useState(true);
    const [lists, setlists] = useState(user.lists);
    const [media, setMedia] = useState([]);


    //Filters lists state variable:
    function filterLists(filter) {

        const filteredLists = user.lists.filter((list) => filter === list.list_type);

        switch(filter) {
            case "ALL":
                setlists(user.lists)
                break;
            case "MOVIES":
                setlists(filteredLists)
                break;
            case "SHOWS":
                setlists(filteredLists)
                break;
            case "GAMES":
                setlists(filteredLists)
        };
    };

    //Filters media in the selectedList state variable:
    function filterMedia(filter) {

        const filteredMedia = selectedList.media.filter((medium) => filter === medium.medium_type);

        switch(filter) {
            case "ALL":
                setMedia(selectedList.media)
                break;
            case "PENDING":
                setMedia(filteredMedia)
                break;
            case "COMPLETE":
                setMedia(filteredMedia)
        };
    };

    

    return (
        <div className="MainView">
            {listView ? (
                <>
                    <div className="filterBar">
                        <button className="filterButton" onClick={() => filterLists("ALL")}>All</button>
                        <button className="filterButton" onClick={() => filterLists("MOVIES")}>Movies</button>
                        <button className="filterButton" onClick={() => filterLists("SHOWS")}>Shows</button>
                        <button className="filterButton" onClick={() => filterLists("GAMES")}>Games</button>
                    </div>
                    <div className="cardGrid">
                        {lists.map((list) => {
                            return ( 
                                <ListCard 
                                    key={list.id} 
                                    list={list} 
                                    setSelectedList={setSelectedList}
                                    setMedia={setMedia} 
                                    setListView={setListView}
                                    setFormView={setFormView} 
                                    setFormFilter={setFormFilter}
                                />
                            )
                        })}
                        <div className="listCard" id="createButtonL" onClick={() => {
                            setFormView(true)
                            setFormFilter("CREATE_LIST")
                        }}>
                            <h3>Create New List</h3>
                            <p>➕</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="filterBar">
                        <button className="filterButton" onClick={() => setListView(true)}>Lists</button>
                        <button className="filterButton" onClick={() => filterMedia("ALL")}>All</button>
                        <button className="filterButton" onClick={() => filterMedia("PENDING")}>Pending</button>
                        <button className="filterButton" onClick={() => filterMedia("COMPLETE")}>Complete</button>
                    </div>
                    <div className="cardGrid">
                        {media.map((medium) => {
                            return <MediumCard 
                                key={medium.id} 
                                medium={medium}
                                setSelectedMedium={setSelectedMedium}
                                setFormView={setFormView} 
                                setFormFilter={setFormFilter}
                            />
                        })}
                        <div id="createButtonM" onClick={() => {
                            setFormView(true)
                            setFormFilter("CREATE_MEDIUM")
                        }}>
                            <h3>Create New Medium</h3>
                            <p>➕</p>
                        </div>
                    </div>
                </>
            )}  
        </div>
    )
}

export default MainView