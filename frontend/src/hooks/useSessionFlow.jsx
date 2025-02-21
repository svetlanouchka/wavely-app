import { useReducer } from 'react';

const initialState = (initialStep = 1) => ({
    step: initialStep,
    noteBefore: 5, 
    noteAfter: 5,
    preferences: {
        affirmations: false,
        relaxingSound: false,
        noAccompaniment: true, 
    }, 
    review: 0,
    comment: "",
});

function reducer(state, action) {
    switch (action.type) {
        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };
        case "PREV_STEP":
            return { ...state, step: Math.max(1, state.step - 1) };
        case "SET_NOTE_BEFORE":
            return { ...state, noteBefore: action.payload };
        case "SET_NOTE_AFTER":
            return { ...state, noteAfter: action.payload };
        case "TOGGLE_PREFERENCE":
            return { ...state, preferences: { ...state.preferences, [action.payload]: !state.preferences[action.payload] } };
        case "SET_REVIEW":
            return { ...state, review: action.payload };
        case "SET_COMMENT":
            return { ...state, comment: action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export default function useSessionFlow(initialStep = 1) {
    const [state, dispatch] = useReducer(reducer, initialState(initialStep));

    const nextStep = () => dispatch({ type: "NEXT_STEP" });
    const prevStep = () => dispatch({ type: "PREV_STEP" });

    const setNoteBefore = (value) => dispatch({ type: "SET_NOTE_BEFORE", payload: value });
    const setNoteAfter = (value) => dispatch({ type: "SET_NOTE_AFTER", payload: value });
    const togglePreference = (pref) => dispatch({ type: "TOGGLE_PREFERENCE", payload: pref });
    const setReview = (value) => dispatch({ type: "SET_REVIEW", payload: value });
    const setComment = (value) => dispatch({ type: "SET_COMMENT", payload: value });
    const reset = () => dispatch({ type: "RESET" });

    return { 
        state, 
        nextStep,
        prevStep,
        setNoteBefore,
        setNoteAfter,
        togglePreference,
        setReview,
        setComment,
        reset,
        dispatch };
}