import QuestionReponse from "@components/QuestionReponse";
export default function FaqPage() {
    return (
    <>
        <div className="relative flex flex-col justify-start min-h-screen p-10">
                <div className="md:text-5xl text-4xl text-center font-righteous w-full md:m-10 m-5 mt-10 break-words">Questions/Réponses</div>
                <QuestionReponse title="Que sont les fréquences et comment peuvent-elles être utilisées&nbsp;?">
                    <p>Tout dans l’Univers possède une fréquence unique qui peut être mesurée et enregistrée. Grâce aux technologies modernes, ces fréquences peuvent être utilisées sous forme de fichiers audio pour harmoniser l’esprit et le corps.</p>  
                </QuestionReponse>
                <QuestionReponse title="Pourquoi utiliser des affirmations positives avec les fréquences&nbsp;?">
                    <p>Les affirmations positives renforcent l’effet des vibrations harmoniques en préparant votre esprit à recevoir leurs bienfaits. Elles aident à créer une synergie entre le mental et le corps pour maximiser les résultats.</p>
                </QuestionReponse>
                <QuestionReponse title="Quels sont les bienfaits des fréquences&nbsp;?">
                    <p>Les fréquences peuvent être utilisées pour réduire le stress, améliorer la concentration, favoriser le sommeil, augmenter la créativité, stimuler la motivation, renforcer la confiance en soi, soulager la douleur, etc.</p>
                </QuestionReponse>
                <QuestionReponse title="Quelles précautions dois-je prendre lorsque j’écoute les fréquences&nbsp;?">
                    <p>Il est recommandé de vous asseoir ou de vous allonger confortablement dans un endroit calme. Évitez d’écouter les fréquences dans des situations nécessitant une attention accrue, comme au volant, à vélo, ou lorsque vous traversez une route.</p>
                </QuestionReponse>
                <QuestionReponse title="Comment puis-je savoir si les fréquences fonctionnent pour moi&nbsp;?">
                    <p>Les effets des fréquences peuvent varier d’une personne à l’autre. Pour en ressentir les bienfaits, il est recommandé de les écouter régulièrement pendant au moins 21 jours. Vous pouvez également tenir un journal pour noter vos impressions et vos ressentis.</p>
                </QuestionReponse>
                <QuestionReponse title=" Cette application remplace-t-elle une consultation médicale&nbsp;?">
                    <p>Non, cette application ne remplace pas une consultation médicale. Si vous avez des problèmes de santé, il est recommandé de consulter un professionnel de la santé qualifié avant d’utiliser les fréquences.</p>
                </QuestionReponse>

            </div>
    </>
    );
}