import { useNavigate } from "react-router-dom";
import ButtonMain from "../../ui/ButtonMain";
import PrevStepButton from "../../ui/PrevStepButton";

export default function StepPreferences({preferences, onToggle, onPrev}) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
            <p classname="text-mg text-center font-albert-sans font-semibold">Choisissez vos préférences pour cette séance.</p>
            <p className="text-mg text-center font-albert-sans font-light mt-3">La fréquence par défaut est silencieuse et ne contient aucun autre son. Vous pouvez toutefois personnaliser votre expérience selon vos envies :</p>
            <label className="flex items-center space-x-2"><input
            type="checkbox" checked={preferences.affirmations}
                onChange={() => onToggle('affirmations')} /> <span>Avec des affirmations</span>
            </label>
            <label className="flex items-center space-x-2"><input
            type="checkbox" checked={preferences.relaxingSound}
                onChange={() => onToggle('relaxingSound')} /> <span>Avec un son relaxant</span>
            </label>
            <label className="flex items-center space-x-2"><input 
            type="checkbox" checked={!preferences.affirmations && !preferences.relaxingSound} disabled/> <span>Sans accompagnement</span>
            </label>
            <PrevStepButton onClick={onPrev} />
            <ButtonMain text="Lancer la séance" onClick={() => navigate("/seance")} />

        </div>
    )
}