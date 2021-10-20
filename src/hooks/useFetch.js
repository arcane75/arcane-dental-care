import { useEffect, useState } from 'react';

const useFetch = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return [services]
};

export default useFetch;

