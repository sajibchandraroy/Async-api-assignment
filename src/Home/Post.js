import React, { useEffect } from 'react';
import Home from './Home';


const Post = ({data}) => {
    console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/data`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }, [data]);

    return (
       <div>
           <Home />
       </div>
    );
};

export default Post;