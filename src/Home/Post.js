import React, { useEffect } from 'react';
import Home from './Home';


const Post = ({data}) => {
    console.log(data);

    useEffect(() => {
        fetch(`https://safe-sierra-49597.herokuapp.com/data`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }, [data]);

    return (
       <div>
           
       </div>
    );
};

export default Post;