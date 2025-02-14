import { useState, useEffect} from 'react';

export default function Tag ({ frequencyId }) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/frequencies/${frequencyId}/tags`)
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error("Erreur de chargement des tags", error));
    }
    , []);

    return (
        <div className="flex flex-wrap items-start gap-8 p-4 mt-2">
        {tags.map((tag) => (
            <button
                key={tag.id} 
                className="bg-blue-violet text-white text-sm font-albert-sans font-normal rounded-lg p-2 px-4 flex justify-between text-center">
                {tag.name}
            </button>
        ))}
        </div>
    );
}
