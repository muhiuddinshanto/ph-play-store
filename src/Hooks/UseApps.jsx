import React, { useEffect, useState } from 'react';

const UseApps = () => {
    const [apps, setApps] = useState([]);
            const [loading, setLoading] = useState(true);
            
                useEffect(() => {
                fetch('/data.json')
                    .then(res => res.json())
                    .then(data => {
                        setApps(data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error(err);
                        setLoading(false);
                    });
                }, []);
    return {apps, loading};
};

export default UseApps;