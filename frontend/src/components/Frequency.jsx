import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Frequency({ showDetails = false}) {
    const [frequences, setFrequences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/frequencies')
            .then(response => response.json())
            .then(data => setFrequences(data))
            .catch(error => console.error("Erreur de chargement des fréquences", error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {frequences.map((freq) => (
                <div key={freq.id} className="bg-gray-light shadow-md p-4 flex flex-col items-center text-start">
                    <img src={freq.image_url} alt={freq.name} className="w-62 h-62 hover:scale-110 duration-300 ease-in ease-out object-cover"/>
                    <h2 className="text-lg font-bold mt-4">{freq.name}</h2>

                    {showDetails && (
                        <>
                            <p className="text-sm text-gray-600 mt-2">{freq.description}</p>
                        </>
                    )}
                    <Link to = {`/frequence/${freq.id}`} className="bg-green hover:bg-blue text-white font-bold py-2 px-4 rounded mt-4">
                    Voir plus</Link>
                </div>
            ))}
        </div>
    );
}
