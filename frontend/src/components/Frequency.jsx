import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonMain from '../ui/ButtonMain';
import Category from './Category';

export default function Frequency() {
    const [frequences, setFrequences] = useState([]);
    const [filteredFrequences, setFilteredFrequences] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isClicked, setIsClicked] = useState(false);


    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/frequencies')
            .then(response => response.json())
            .then(data => {
                setFrequences(data);
                setFilteredFrequences(data);
            })
            .catch(error => console.error("Erreur de chargement des fréquences", error));
    }, []);

    const handleSelectCategory = (categoryId) => {
        if (categoryId === selectedCategory) {
            setFilteredFrequences(frequences);
            setSelectedCategory(null);
            setIsClicked(false);
        } else {
            const filtered = frequences.filter((freq) => freq.category_id === categoryId);
            setFilteredFrequences(filtered);
            setSelectedCategory(categoryId);
            setIsClicked(true);
        }
    };


    return (
        <div>
            <Category isClicked={isClicked} onSelectCategory={handleSelectCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {filteredFrequences.map((freq) => (
                <div key={freq.id} className="bg-gray-light shadow-lg rounded-sm p-4 flex flex-col items-center text-start">
                    <img src={freq.image_url} alt={freq.name} className="w-60 h-60 hover:scale-110 duration-300 ease-in object-cover"/>
                    <div className='flex justify-between items-center mt-4 w-full'>
                    <h2 className="text-lg font-albert mt-4">{freq.name}</h2>
                    <ButtonMain
                    idButton={`freq-btn-${freq.id}`}
                    text="Voir"
                    style={{ backgroundColor: "#C1FF72", color: "#000000", borderRadius: "50px" }}
                    onClick={() => navigate(`/frequencies/${freq.id}`)}
                    />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
