import ArrowLeft from '../../src/assets/Arrow-left.svg';

export default function PrevStepButton({onClick}) {
    return (
        <button onClick={onClick}>
            <img src={ArrowLeft} alt="Précedent" />
        </button>
    );
}