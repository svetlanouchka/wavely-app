import NextStepButton from "../../ui/NextStepButton";

export default function StepIntroduction({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-center font-albert-sans">Votre séance va bientôt commencer</h1>
            <p className="text-mg text-center font-albert-sans mt-3">Tout dans l’Univers possède sa propre fréquence, qu’on peut mesurer et enregistrer.
                Grâce aux technologies modernes, il est possible d’utiliser sous forme de fichiers audio.</p>
            <p className="text-mg text-center font-albert-sans mt-3">Évitez d'écouter les pistes lorsque vous avez besoin d'être attentif et vigilant:
                au volant, à vélo, lorsque vous traversez la route.</p>
            <p className="text-mg text-red-400 font-semibold font-albert-sans mt-3 text-center">Ne remplace pas la consultation d'un médecin. En cas d'urgence ou nécessité, contactez le médecin.</p>
        <NextStepButton onClick={onNext} />
        </div>
    );

}