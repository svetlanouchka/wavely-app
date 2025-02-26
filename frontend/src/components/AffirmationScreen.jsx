import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function AffirmationScreen({
	splittedAffirmations,
	splitString,
}) {
	const { scrollY } = useScroll();

	const newAffirmation = splittedAffirmations.map((line, index) => (
		<span key={index}>
			{line}
			<br />
			<br />
		</span>
	));

	console.log(scrollY);

	return (
		<div className="text-white bottom-0 z-10 mx-auto scrollbar-none scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll m-4 px-2 rounded-md font-albert-sans w-full md:w-[30rem] h-[8.5rem] border-amber-50 ">
			<div className="mx-auto h-[5rem] ">
				<p className="text-2xl">{newAffirmation}</p>
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
