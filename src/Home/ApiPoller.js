import React, { useEffect, useState } from 'react';
import Post from './Post';

const ApiPoller = () => {
    const [userAPI, setUserAPI] = useState([]);
    const [wineAPI, setWineAPI] = useState([]);
    const api1 = 'https://randomuser.me/api';
    const api2 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';    

    useEffect(() => {
        setInterval(fetchDataAPI, 5000);                         
    }, []);

    async function fetchDataAPI() {
        const apiU = await fetch(api1)
            .then(res => res.json())
            .then(data => setUserAPI(data.results[0]))
            .catch(err => console.log(err));

        const apiW = await fetch(api2)
            .then(res => res.json())
            .then(data => setWineAPI(data.drinks[0]))
            .catch(err => console.log(err)); 
            
            
    };

    const { name, email, login, picture } = userAPI;
    const { title, first, last } = { ...name }
    const { username, password } = { ...login }
    const { large, medium, thumbnail } = { ...picture }
    const wineImage = wineAPI.strDrinkThumb;
    const wineInstruction = wineAPI.strInstructions;

    const data = { title, first, last, email, username, password, large, wineImage, wineInstruction};
    
    return (
        <div>
            <Post data = {data} />
        </div>
    );
};

export default ApiPoller;