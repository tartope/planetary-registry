import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

const planetsAPI = ' http://localhost:8085/planets'

function Registry() {

    const [planets, setPlanets] = useState([]);
    const [searchPlanets, setSearchPlanets] = useState('');

    useEffect(()=>{
        fetch(planetsAPI)
        .then(response => response.json())
        .then(planetsData =>{
            // console.log(planetsData)
            setPlanets(planetsData)
        })
    }, [])

    function handleNewPlanet(planet){
        fetch(planetsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(planet)
        })
        .then(response => response.json())
        .then(json =>{
            setPlanets([...planets, json])
        })
    }

    function handlePlanetSearch(userInput){
        setSearchPlanets(userInput)
    }

    const filteredPlanets = planets.filter(planet =>{
        return planet.name.toUpperCase().includes(searchPlanets.toUpperCase())
    })

    return(
        <div className="registry">
            <Search handlePlanetSearch={handlePlanetSearch} />
            <div className="content">
                <PlanetList planets={filteredPlanets} />
                <NewPlanetForm handleNewPlanet={handleNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;