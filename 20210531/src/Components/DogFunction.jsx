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
        const url1 = fetchDogImageUrl();
        const url2 = fetchDogImageUrl();
        const url3 = fetchDogImageUrl();


        // 非同期処理 Promise.allを使って３つのpromiseを同時に実行
        Promise.all([url1, url2, url3])
            .then(([url1, url2, url3]) => {
                setDogs1(url1);
                setDogs2(url2);
                setDogs3(url3);
            })
            // いずれかの非同期処理が失敗
            .catch((error) => console.error('エラー', error))
            // pが完了したらloading状態終了　finallyはthenとcatchの両方
            .finally(() => setLoading(false));
    }, []);
    return(
        <>
                {/* {console.log(dogs1.url)} */}
            <h1>Function Hooks</h1>
            {loading ? <img src={dogs1.url1} className='dog' alt='wan-wan1' /> : <p>loading...</p>}
            {loading ? <img src={dogs2.url} className='dog' alt='wan-wan2' /> : <p>loading...</p>}
            {loading ? <img src={dogs3.url} className='dog' alt='wan-wan3' /> : <p>loading...</p>}
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
        if (!response.ok) {
            console.error("エラーレスポンス", response);
        } else {
            // Responseオブジェクト の jsonメソッドも Promise を返す
            // HTTPレスポンスボディ を JSON としてパースしたオブジェクトでresolveされる
            return response.json()
        }
    })
}