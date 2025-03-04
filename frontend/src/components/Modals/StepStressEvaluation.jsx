import PrevStepButton from "../../ui/PrevStepButton";
import NextStepButton from "../../ui/NextStepButton";

export default function StepStressEvaluation({
	note,
	onChange,
	onNext,
	onPrev,
}) {
	return (
		<div className="flex flex-col items-center justify-center h-full space-y-4">
			<p className="text-mg text-center font-albert-sans font-bold">
				Avant de commencer, prenez un instant pour évaluer votre niveau de
				stress.
			</p>
			<p className="text-mg text-center font-albert-sans mt-2">
				Sur une échelle de 1 à 10, où 1 correspond à un état totalement détendu
				et 10 à un stress intense, comment vous sentez-vous actuellement ?{" "}
			</p>
			<p className="text-mg text-center font-albert-sans mt-2">
				Cela nous aidera à mieux suivre votre bien-être.
			</p>
			<label htmlFor="slider" className="text--lg font-light">
				Choisissez une valuer : {note}
			</label>
			<input
				type="range"
				id="slider"
				name="slider"
				min="1"
				max="10"
				value={note}
				onChange={(e) => onChange(Number(e.target.value))}
				className="w-64 h-2 bg-blue rounded-lg appearance-none cursor-pointer"
			/>
			<div className="flex justify-between w-64 text-sm">
				<span>Je suis complétement detendu</span>
				<span>Je subis un stress intense</span>
			</div>
			<div className="flex justify-center w-64">
				<PrevStepButton onClick={onPrev} />
				<NextStepButton onClick={onNext} />
			</div>
		</div>
	);
}
