import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {       
        setInterval(fetchDatabase, 15000); 
        async function fetchDatabase() {
            const dataLoad = fetch('https://safe-sierra-49597.herokuapp.com/data')
                .then(res => res.json())
                .then(data => setData(data[(data.length-1)]))
                console.log(data)
        }
    }, []);
    console.log(data)
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <button type="button" class="btn btn-outline-dark">Users</button>
                    <div class="card m-5">
                        <img class="card-img-top" src={data.large} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{data.title + ' ' + data.first + ' ' + data.last}</h5>
                            <p class="card-text">{'Email: ' + data.email}</p>
                            <p class="card-text">{'User Name: ' + data.username}</p>
                            <p class="card-text">{'Password: ' + data.password}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <button type="button" class="btn btn-outline-dark">Wine</button>
                    <div class="card m-5">
                        <img class="card-img-top" src={data.wineImage} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text">{'Instruction: ' + data.wineInstruction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;