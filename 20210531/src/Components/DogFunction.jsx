import React, { useState, useEffect } from 'react';
import './Dog.css';

export default function DogFunction () {
    const [dogs1, setDogs1] = useState([]);
    const [dogs2, setDogs2] = useState([]);
    const [dogs3, setDogs3] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setDogs1(data))
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setDogs2(data))
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setDogs3(data))
        // setLoading(false);
    }, []);
    return(
        <>
            <h1>Function Hooks</h1>
            {/* {loading ? <p>loading...</p> : <img src={dogs1.message} className='dog' alt='wan-wan1' />} */}
            <img src={dogs1.message} className='dog' alt='wan-wan1' />
            <img src={dogs2.message} className='dog' alt='wan-wan2' />
            <img src={dogs3.message} className='dog' alt='wan-wan3' />
        </>
    )
}