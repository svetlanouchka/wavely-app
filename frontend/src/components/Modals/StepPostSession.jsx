import { useState } from "react";
import ButtonMain from "../../ui/ButtonMain";
import StarReview from "../../ui/StarReview";
import FieldComment from "../../ui/FieldComment";

export default function StepPostSession({ note, onChangeNote, review, onChangeReview, comment, onChangeComment, onComplete}){
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
            <p className="text-sm text-center font-albert-sans font-bold">Votre séance est terminé !</p>
            <p className="text-sm text-center font-albert-sans mt-2">Sur une échelle de 1 à 10, où en êtes-vous maintenant par rapport au stress ? Prenez un moment pour noter votre ressenti.</p>
            <label htmlFor="slider" className="text-sm font-light">Choisissez une valeur : {note}</label>
            <input
                type="range"
                id="slider"
                name="slider"
                min="1"
                max="10"
                value={note}
                onChange={(e) => onChangeNote(Number(e.target.value))}
                className="w-64 h-2 bg-blue rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between w-64 text-sm">
                <span>Je suis complétement detendu</span>
                <span>Je subis un stress intense</span>
            </div>
            <p className="text-sm text-center font-albert-sans mt-2">Notez votre expérience pour nous aider à nous améliorer</p>
            <StarReview maxStars={5} value={review} onChange={onChangeReview} />
            <p className="text-sm text-center font-albert-sans mt-2">Partagez vos impressions sur cette séance : ce que vous avez ressenti, apprécié ou ce que nous pourrions améliorer.</p>
            <FieldComment value={comment} onChange={onChangeComment} />
            <ButtonMain text="Valider" onClick={onComplete} />
    </div>
    )
}
