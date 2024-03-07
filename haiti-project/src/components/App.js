import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Search from "./Search";

function App() {
  const [haiti, setHaiti] = useState([])
  const [searchHaiti, setSearchHaiti] = useState("")

  const filteredHaiti = haiti.filter(haitian => {
    // if(searchHaiti === "") return true
    return haitian.name.toUpperCase().includes(searchHaiti.toUpperCase()) || haitian.category.toUpperCase().includes(searchHaiti.toUpperCase())
})
console.log(filteredHaiti)

  useEffect(() => {
    fetch('http://localhost:6100/haiti')
    .then(response => response.json())
    .then(haitiInfo => setHaiti(haitiInfo))
  }, [])

  function addForm(myHaiti) {
    fetch('http://localhost:6100/haiti', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        //"Accept": "Application/JSON"
      },
      body: JSON.stringify(myHaiti)
    })
    .then(response => response.json())
    .then(myHaiti => setHaiti([...haiti, myHaiti]))
  }

  function updateSearchHaiti(event){
    setSearchHaiti(event.target.value)
}

  return (
    <div className="App">
      <NavBar />
      <Search searchHaiti={searchHaiti} updateSearchHaiti={updateSearchHaiti} haitian={filteredHaiti}/>
      <Header />
      <Outlet context={{haiti:filteredHaiti, addForm:addForm}}/> 
    </div>
  );
}

export default App;
