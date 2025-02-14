import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Frequency from '../components/Frequency';
import Category from '../components/Category';
import ButtonMain from '../ui/ButtonMain';
import Tag from '@components/Tag';

export default function FrequencyPage () {
    const { id } = useParams();
    const [frequency, setFrequency] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/frequencies/${id}`)
            .then((response) => response.json())
            .then((frequencyData) => setFrequency(frequencyData))
            .catch((error) => console.error("Erreur de chargement de la fréquence", error));
    }, [id]);

    return (
        <div className="flex flex-col min-h-screen">
        <div className = "w-full flex justify-start p-4">
            {frequency && <Category categoryId={frequency.category_id} />}
        </div>
            <div className="flex w-full flex-row items-center gap-20 p-10">
                <div className = "bg-gray-light shadow-lg rounded-sm w-[600px] h-[400px] flex justify-center items-center">
                    <img src={frequency?.image_url} alt={frequency?.name} className="w-2/3 h-2/3 object-cover hover:scale-110 duration-300 mx-auto ease-in"/>
                </div>
            <div className = "flex w-full h-full">    
            <div className = "flex flex-col items-start text-left max-w-lg">
                <h1 className="text-3xl text-left t-8">{frequency?.name}</h1>
                <p className="text-gray-600 mt-4">{frequency?.description}</p>
                <Tag frequencyId={id} />
                <ButtonMain
                idButton="start-session"
                text="Lancer la séance"
                style={{ backgroundColor: "#C1FF72", color: "#000000", borderRadius: "50px", width: "200px", marginTop: "20px"}}
                />
            </div>
            </div>
        </div>
        </div>
    );
}