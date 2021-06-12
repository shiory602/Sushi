import React, { useState, useEffect } from 'react';
import './Dog.css';

export default function DogFunction () {
    const [dogs1, setDogs1] = useState('');
    const [dogs2, setDogs2] = useState('');
    const [dogs3, setDogs3] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // loading状態開始
        setLoading(true);
        const dog1 = fetchDogImageUrl();
        const dog2 = fetchDogImageUrl();
        const dog3 = fetchDogImageUrl();


        // 非同期処理 Promise.allを使って３つのpromiseを同時に実行
        Promise.all([dog1, dog2, dog3])
            .then(([dog1, dog2, dog3]) => {
                setDogs1(dog1);
                setDogs2(dog2);
                setDogs3(dog3);
            })
            // いずれかの非同期処理が失敗
            .catch((response) => {
                if (!response.ok) {
                    console.response("エラーレスポンス", response);
                } else {
                    // Responseオブジェクト の jsonメソッドも Promise を返す
                    // HTTPレスポンスボディ を JSON としてパースしたオブジェクトでresolveされる
                    return response.json();
                }
            })
            // pが完了したらloading状態終了　finallyはthenとcatchの両方
            .finally(() => setLoading(false));
    }, []);
    return(
        <>
            <h1>Function Hooks</h1>
            {loading ? <p>loading...</p> : <img src={dogs1.message} className='dog' alt='wan-wan1' />}
            {loading ? <p>loading...</p> : <img src={dogs2.message} className='dog' alt='wan-wan2' />}
            {loading ? <p>loading...</p> : <img src={dogs3.message} className='dog' alt='wan-wan3' />}
        </>
    )
}

/**
 * @returns {Promise<string>}
 */
function fetchDogImageUrl() {
    // fetch で GET の HTTPリクエストを行う -> fetchメソッド は Promiseインスタンス を返す
    return fetch('https://dog.ceo/api/breeds/image/random')
    // Promiseインスタンス は Responseオブジェクトで resolve され、 thenコールバックが呼び出される
    .then(response => {
        // Responseオブジェクト の jsonメソッドも Promise を返す
        // HTTPレスポンスボディ を JSON としてパースしたオブジェクトでresolveされる
        return response.json();
    })
}