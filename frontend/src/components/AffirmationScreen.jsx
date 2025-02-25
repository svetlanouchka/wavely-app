import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AffirmationScreen({
	splittedAffirmations,
	splitString,
}) {
	const [phraseIndex, setPhraseIndex] = useState(0);

	// const textVariants = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	// };

	const newAffirmation = splittedAffirmations.map((line, index) => (
		<span key={index}>
			{line}
			<br />
			<br />
		</span>
	));

	console.log(newAffirmation);

	return (
		<div className="text-white h-[6rem] scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll m-4 px-2 rounded-sm font-albert-sans">
			<div className="mx-auto h-[5rem] md:w-[50%]">
				<p className="text-2xl mb-8">{newAffirmation}</p>
			</div>

			{/* <motion.div
				key={splittedAffirmations[phraseIndex]}
				variants={textVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.5 }}
				className="h-5" // Animation déclenchée quand 50% de l'élément est visible
			>
				{splittedAffirmations[phraseIndex]}
			</motion.div> */}
		</div>
	);
}
