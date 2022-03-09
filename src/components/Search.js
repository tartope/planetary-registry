import React from "react"

function Search({ handlePlanetSearch }) {

    function handleChange(event){
        event.preventDefault();
        const planetSearch = event.target.value;
        handlePlanetSearch(planetSearch)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Search..."/>
        </div>
    );
}

export default Search;