import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Frequency from '../components/Frequency';
import Category from '../components/Category';
import ButtonMain from '../ui/ButtonMain';
import Tag from '@components/Tag';
import { set } from 'date-fns';
import Modal from '../ui/Modal';

export default function FrequencyPage () {
    const { id } = useParams();
    const [frequency, setFrequency] = useState(null);
    const [recommendedFrequencies, setRecommendedFrequencies] = useState([]);
    const [tags, setTags] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/frequencies/${id}`)
            .then((response) => response.json())
            .then((frequencyData) => {
                setFrequency(frequencyData);

                fetch(`http://localhost:5000/frequencies/${id}/tags`)
                    .then((response) => response.json())
                    .then((tagsData) => {
                        setTags(tagsData);
                    })
                    .catch((error) => console.error("Erreur de chargement des tags", error));
            })
            .catch((error) => console.error("Erreur de chargement de la fréquence", error));
    }, [id]);

    useEffect(() => {
        const loadRecommendedFrequencies = async () => {
            if (tags.length > 0 && frequency) {
                const randomFrequencies = [];

                const getFrequenciesForTag = async (randomTag) => {
                    
                    const allFrequencies = await fetch(`http://localhost:5000/tags/${randomTag.id}/frequencies`)
                        .then((response) => response.json())
                        .catch((error) => console.error("Erreur de chargement des fréquences par tag", error));
                    console.log("all", allFrequencies);

                    const filteredFrequencies = allFrequencies.filter(
                        (freq) =>
                            freq.id !== frequency.id  
                    );
                    console.log("filtered", filteredFrequencies);
                    while (randomFrequencies.length < 3 && filteredFrequencies.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredFrequencies.length);
                        randomFrequencies.push(filteredFrequencies.splice(randomIndex, 1)[0]);
                    }
                };
                
                for (let i = 0; i < tags.length; i++) {
                    const randomTag = tags[i];
                    await getFrequenciesForTag(randomTag);
                    if (randomFrequencies.length >= 3) break;  
                }
                
                const uniqueRecommendedFrequencies = [
                    ...new Map(randomFrequencies.map((freq) => [freq.id, freq])).values(),
                ];
                
                setRecommendedFrequencies(uniqueRecommendedFrequencies);
            }
        };
        
        loadRecommendedFrequencies();
    }, [tags, frequency]);

    console.log("recommended", recommendedFrequencies);


    return (
        <div className="flex flex-col min-h-screen">
        <div className = "w-full flex justify-start p-4">
            {frequency && <Category categoryId={frequency.category_id} />}
        </div>
            <div className="flex w-full flex-row items-center gap-20 p-10">
                <div className = "bg-gray-light shadow-lg rounded-sm w-full h-full flex justify-center items-center">
                    <img src={frequency?.image_url} alt={frequency?.name} className="w-4/5 h-4/5 object-cover hover:scale-110 duration-300 mx-auto ease-in"/>
                </div>
            <div className = "flex w-full h-full">    
            <div className = "flex flex-col items-start text-left max-w-lg">
                <h1 className="text-3xl font-albert-sans text-left t-8">{frequency?.name}</h1>
                        <p className="text-gray-600 font-albert-sans mt-4">{frequency?.description}</p>
                <Tag frequencyId={id} />
                <ButtonMain
                idButton="start-session"
                text="Lancer la séance"
                style={{ backgroundColor: "#C1FF72", color: "#000000", borderRadius: "50px", width: "200px", marginTop: "20px"}}
                onClick={() => setIsModalOpen(true)}    
                />
            </div>
            </div>
        </div>


        <div className="p-10">
            <h2 className="text-2xl font-albert-sans text-left">Essayez ces ondes</h2>
            <div className="flex flex-wrap gap-10 pt-10">
                {recommendedFrequencies.map((freq) => (
                    <div key={freq.id} className="bg-gray-light w-70 h-70 shadow-lg rounded-sm p-2 flex flex-col items-center text-start">
                        <h2 className="text-lg font-albert mt-4">{freq.name}</h2>
                        <img src={freq.image_url} alt={freq.name} className="w-50 h-50 hover:scale-110 duration-300 ease-in object-cover" />



                    </div>
                ))}
            </div>
        </div>
        {isModalOpen && <Modal id={id} onClose={() => setIsModalOpen(false)} />}
    </div>
            

    );
}