import SignUpForm from "@components/SignUpForm";

export default function SignUpPage() {
    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-4xl font-bold font-albert-sans text-center p-6">Créez votre compte</h1>
            <p className="text-center font-albert-sans p-2 pb-6">Commencez dès maintenant votre chemin vers le bien-être</p>
            <SignUpForm />
        </div>
    );
}