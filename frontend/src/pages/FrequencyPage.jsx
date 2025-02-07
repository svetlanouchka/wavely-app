import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Frequency from '../components/Frequency';
import ButtonMain from '../ui/ButtonMain';

export default function FrequencyPage () {
    const { id } = useParams();
    const [frequency, setFrequency] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/frequencies/${id}`)
            .then((response) => response.json())
            .then((data) => setFrequency(data))
            .catch((error) => console.error("Erreur de chargement de la fréquence", error));
    }, [id]);

    return (
        <div className = "flex justify-between gap-20 p-10 ">
            <div className = "bg-gray-light shadow-lg rounded-sm p-4 w-600">
            <img src={frequency?.image_url} alt={frequency?.name} className="w-100 h-100 hover:scale-110 duration-300 mx-auto ease-in object-cover"/>
            </div>
            <div className = "flex flex-col text-left">
            <h1 className="text-3xl text-left t-8">{frequency?.name}</h1>
            <p className="text-gray-600 mt-4">{frequency?.description}</p>
            <ButtonMain
            idButton="start-session"
            text="Lancer la séance"
            style={{ backgroundColor: "#C1FF72", color: "#000000", borderRadius: "50px", width: "200px", marginTop: "20px"}}
            />
            </div>
        </div>
    );
}