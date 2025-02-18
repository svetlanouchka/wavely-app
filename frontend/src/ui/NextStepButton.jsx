import ArrowRight from '../../src/assets/Arrow-right.svg';

export default function NextStepButton({onClick}) {
    return (
        <button onClick={onClick}>
            <img src={ArrowRight} alt="Suivant" />
        </button>
    );
}