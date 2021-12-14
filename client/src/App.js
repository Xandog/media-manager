import React from "react";
import { useState, useEffect } from "react";
//import {Route, useHistory } from "react-router-dom";

//Main Components
import NavBar from "./NavBar";
import Footer from "./Footer";
import AccountPrompt from "./AccountPrompt";
import ProfileView from "./ProfileView";
import MainView from "./MainView";

//Form Components
import ProfileForm from "./Forms/ProfileForm";
import CreateListForm from "./Forms/CreateListForm";
import CreateMediumForm from "./Forms/CreateMediumForm";
import EditListForm from "./Forms/EditListForm";
import EditMediumForm from "./Forms/EditMediumForm";


function App() {

  const [user, setUser] = useState(null);
  const [formView, setFormView] = useState(false);
  const [formFilter, setFormFilter] = useState("");
  const [selectedList, setSelectedList] = useState(null);
  const [selectedMedium, setSelectedMedium] = useState(null);

  //Auto-login
  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if(response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        console.log(response)
      }
    });
  }, []);


  //Filters which forms get rendered:
  function selectedForm(filter) {

    switch(filter) {
      case "PATCH_PROFILE":
        return <ProfileForm user={user} setUser={setUser} setFormView={setFormView}/>;
      case "PATCH_LIST":
        return <EditListForm selectedList={selectedList} setFormView={setFormView}/>;
      case "PATCH_MEDIUM":
        return <EditMediumForm selectedMedium={selectedMedium} setFormView={setFormView}/>;
      case "CREATE_LIST":
        return <CreateListForm user={user} setFormView={setFormView}/>;
      case "CREATE_MEDIUM":
        return <CreateMediumForm selectedList={selectedList} setFormView={setFormView}/>;
    };
  };


//debugger
  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser}
      />
      <Footer/>
      {!user ? (
        <AccountPrompt
        user={user}
        setUser={setUser}
        />
      ) : (
        <>
          {!formView ? (
            <>
              <ProfileView 
                user={user} 
                setFormView={setFormView} 
                setFormFilter={setFormFilter}
              />
              <MainView 
                user={user} 
                setFormView={setFormView} 
                setFormFilter={setFormFilter}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                setSelectedMedium={setSelectedMedium}
              />
            </>
          ) : (
            <div>{selectedForm(formFilter)}</div>
          )}
        </>
      )}
    </div>
  );
}

export default App;