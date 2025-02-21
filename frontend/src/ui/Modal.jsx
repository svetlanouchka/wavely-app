import useSessionFlow from "../hooks/useSessionFlow";
import closeCrossIcon from "../assets/closeCrossIcon.svg";
import StepIntroduction from "../components/Modals/StepIntroduction";
import StepStressEvaluation from "../components/Modals/StepStressEvaluation";
import StepPreferences from "../components/Modals/StepPreferences";
import StepPostSession from "../components/Modals/StepPostSession";

export default function Modal({ id, onClose, newNoteBefore, initialStep = 1 }) {
	const {
		state,
		nextStep,
		prevStep,
		setNoteBefore,
		setNoteAfter,
		togglePreference,
		setReview,
		setComment,
		reset,
	} = useSessionFlow(initialStep);

	const handleSubmit = async () => {
		const response = await fetch("http://localhost:5000/sessions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				note_before: newNoteBefore,
				note_after: state.noteAfter,
				review: state.review,
				comment: state.comment,
				frequency_id: id,
				user_id: 1,
			}),
		});

		if (!response.ok) {
			throw new Error("Une erreur est survenue");
		}

		const data = await response.json();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-blue-dark/45 backdrop-blur-sm z-50">
			<div className="bg-green-light px-20 py-6 rounded-sm max-w-lg relative animate-fadeIn">
				<button
					type="button"
					className="absolute top-3 right-3 w-6 h-6 text-gray-500 hover:text-gray-800"
					onClick={() => {
						reset();
						onClose();
					}}
				>
					<img src={closeCrossIcon} alt="Fermer" className="w-5 h-5" />
				</button>

				{state.step === 1 && <StepIntroduction onNext={nextStep} />}

				{state.step === 2 && (
					<StepStressEvaluation
						note={state.noteBefore}
						onChange={setNoteBefore}
						onNext={nextStep}
						onPrev={prevStep}
					/>
				)}

				{state.step === 3 && (
					<StepPreferences
						id={id}
						state={state}
						onToggle={togglePreference}
						onNext={nextStep}
						onPrev={prevStep}
					/>
				)}

				{state.step === 4 && (
					<StepPostSession
						note={state.noteAfter}
						onChangeNote={setNoteAfter}
						review={state.review}
						onChangeReview={setReview}
						comment={state.comment}
						onChangeComment={setComment}
						onComplete={() => {
							handleSubmit();
							reset();
							onClose();
						}}
					/>
				)}
			</div>
		</div>
	);
}
