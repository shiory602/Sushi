import React, { useState, useEffect } from 'react';
import './Dog.css';

export default function DogFunction () {
    const [dogs1, setDogs1] = useState([]);
    const [dogs2, setDogs2] = useState([]);
    const [dogs3, setDogs3] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // loading状態開始
        setLoading(true);

        // 非同期処理
        const p = Promise.all([
            fetch('https://dog.ceo/api/breeds/image/random'),
            fetch('https://dog.ceo/api/breeds/image/random'),
            fetch('https://dog.ceo/api/breeds/image/random')
        ])
            .then(([url1, url2, url3]) => {
                setDogs1(url1);
                setDogs2(url2);
                setDogs3(url3);
                fetchDogImageUrl();
                console.log(dogs1);
            })
            .catch((error) => console.error('エラー', error))
            // pが完了したらloading状態終了　finallyはthenとcatchの両方
            .finally(() => setLoading(false));
    }, []);
    return(
        <>
            <h1>Function Hooks</h1>
            {loading ? <img src={dogs1.message} className='dog' alt='wan-wan1' /> : <p>loading...</p>}
            {loading ? <img src={dogs2.message} className='dog' alt='wan-wan2' /> : <p>loading...</p>}
            {loading ? <img src={dogs3.message} className='dog' alt='wan-wan3' /> : <p>loading...</p>}
        </>
    )
}

/**
 * @returns {Promise<string>}
 */
function fetchDogImageUrl() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());
}