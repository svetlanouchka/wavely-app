import svetPic from "../../../public/Svet.png";
import mattPic from "../../../public/Matt.png";
import waves from "../assets/Waves.mp4";
import goodMood from "../../../backend/public/assets/images/frequences/bonne_humeur.png";
import success from "../../../backend/public/assets/images/frequences/success.png";
import connection from "../../../backend/public/assets/images/frequences/harmoniser_poids.png";
import ButtonMain from "../ui/ButtonMain";
import { Link } from "react-router-dom";

export default function AboutPage() {
	return (
		<div className="flex flex-col items-center justify-center font-albert-sans text-[1.3rem] md:text-[1.1rem] py-2 px-6 my-8 mx-auto max-w-[768px]">
			<div>
				<h1 className="text-4xl text-center font-semibold">
					Wavely : Plongez dans l'univers des fréquences bienveillantes
				</h1>
				<p className="my-8">
					Bienvenue dans un univers où les fréquences sonores et les
					affirmations positives travaillent en harmonie pour favoriser votre
					bien-être. Wavely est née de la passion commune d’une développeuse et
					d’une énergothérapeute, pour offrir un outil accessible qui guide
					chacun vers l’équilibre et la sérénité.{" "}
				</p>
			</div>
			<div>
				<h2 className="text-3xl font-medium text-center">Notre mission</h2>
				<p className="my-8">
					Nous croyons en la capacité du corps et de l’esprit à s’auto-guérir
					grâce aux vibrations harmoniques. Notre objectif est de rendre cette
					approche accessible à tous, grâce aux technologies modernes et à une
					expérience utilisateur simple et immersive.{" "}
				</p>
				<video className="mb-8" autoPlay loop muted>
					<source src={waves} type="video/mp4" />
				</video>
			</div>
			<div>
				<h2 className="text-3xl font-medium text-center">L'équipe</h2>
				<div className="flex flex-row gap-4 md:gap-12 my-8">
					<div>
						<img className="md:w-[300px]" src={svetPic} alt="Svetlana" />
						<h3 className="text-2xl my-2 text-center">Svetlana</h3>
						<p className="md:text-center">Co-founder & Lead tech</p>
					</div>
					<div>
						<img className="md:w-[300px]" src={mattPic} alt="Matt" />
						<h3 className="text-2xl my-2 text-center">Matt</h3>
						<p className="md:text-center">Co-founder & Lead tech</p>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-3xl font-medium text-center">
					Pourquoi utiliser Wavely&nbsp;?
				</h2>
				<div className="my-8 flex flex-col gap-4 md:flex-row">
					<div className="border-0 bg-white rounded-4xl p-4 md:w-1/3">
						<img
							className="w-[200px] mx-auto"
							src={goodMood}
							alt="Fréquence 1"
						/>
						<p>
							<b>Écoutez des fréquences ciblées.</b> Chaque fréquence est conçue
							pour répondre à des besoins spécifiques, comme éliminer le stress,
							soulager la douleur ou renforcer la confiance en soi.
						</p>
					</div>
					<div className="border-0 bg-white rounded-4xl p-4 md:w-1/3">
						<img
							className="w-[200px] mx-auto"
							src={success}
							alt="Fréquence 2"
						/>
						<p>
							<b>Affirmations positives.</b> Des phrases puissantes accompagnent
							certaines pistes pour renforcer votre état d’esprit et maximiser
							les effets des fréquences.
						</p>
					</div>
					<div className="border-0 bg-white rounded-4xl p-4 md:w-1/3">
						<img
							className="w-[200px] mx-auto"
							src={connection}
							alt="Fréquence 3"
						/>
						<p className="break-normal">
							<b>Personnalisation totale.</b> Choisissez vos options : fréquence
							seule, avec une affirmation, avec un son relaxant, ou les deux.
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-medium text-center">
						Comment ça fonctionne&nbsp;?
					</h2>
					<div className="my-8">
						<p className="mb-4">
							Grâce à des recherches approfondies et aux retours de nos premiers
							utilisateurs, nous avons développé une interface intuitive :
						</p>
						<ul>
							<li className="mb-2">
								1. Sélectionnez votre fréquence : En fonction de vos besoins
								actuels (stress, douleur, énergie, etc.).
							</li>
							<li className="mb-2">
								2. Personnalisez votre expérience : Choisissez vos options
								sonores.
							</li>
							<li>
								3. Relaxez-vous : Installez-vous confortablement et laissez les
								vibrations agir.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-0 bg-white rounded-4xl p-4 text-red-600 mb-8">
				<h2 className="text-3xl font-medium text-center">Avertissement</h2>
				<p className="my-8">
					Les fréquences proposées ne remplacent pas une consultation médicale.
					En cas de douleur persistante ou de situation urgente, consultez un
					professionnel de santé.
				</p>
			</div>
			<div className="mb-12">
				<p>
					Vous êtes curieux de découvrir les bienfaits des fréquences ? Lancez
					une séance. Partagez votre expérience avec nous et contribuez à
					améliorer notre service.
				</p>
			</div>
			<Link to="/frequencies">
				<ButtonMain type="button" text="Lancez une séance" />
			</Link>
		</div>
	);
}
