import React, { useState, useEffect } from 'react';

export default function Category( { onSelectCategory, isClicked }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erreur de chargement des catégories", error));
    }
    , []);

    return (
            <div className="flex justify-center items-start gap-8 p-4 mt-2">
            {categories.map((cat) => (
                <button
                key={cat.id} 
                    className={` hover:bg-blue-dark text-white text-sm rounded-2xl p-2 px-4 flex justify-between text-center transition ${isClicked ? "focus:bg-blue-dark bg-blue" : "bg-blue"}`}
                onClick={() => onSelectCategory(cat.id)}>
                    {cat.name}
                </button>
            ))}
            </div>
    );
}