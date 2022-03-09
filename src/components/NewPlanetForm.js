import React from "react"
// import {v4 as uuid} from "uuid"

function NewPlanetForm({ handleNewPlanet }) {

    function handleSubmitForm(event){
        event.preventDefault();
        const name = event.target['name'].value
        const climate = event.target['climate'].value
        const terrain = event.target['terrain'].value
        const population = event.target['population'].value

        const newPlanet = {
            name: name,
            climate: climate,
            terrain: terrain,
            population: population,
        }

        handleNewPlanet(newPlanet)
        event.target.reset()
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="climate" placeholder="Climate" />
            <input type="text" name="terrain" placeholder="Terrain"/>
            <input type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;