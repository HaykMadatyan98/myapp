import React, { useEffect, useState } from 'react';
import { API_URL } from './components/constants';
import Loading from './components/Loading';
import Table from './components/Table';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [usersInfo, setUsersInfo] = useState([]);
    const [error, setError] = useState(null);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
    });


    useEffect(() =>{
        setIsLoading(true)
        fetch(`${API_URL}?results=5`)
        .then(data => {
            if (data.status === 200) {
                return data.json()
            }
            throw Error()
        })
        .then((users) => {
            setUsersInfo(users.results);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    },[])

    if (error) {
        return <div>Error</div>
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <Table users={usersInfo} isMobile={screenSize < 768}/>
    )
}

export default App;
