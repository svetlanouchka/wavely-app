import BackgroundShapes from "@components/BackgroundShapes";
import SignUpForm from "@components/SignUpForm";

export default function SignUpPage() {
    return (

        <div className="relative flex flex-col items-center justify-center h-[50rem]">
            <BackgroundShapes />
            <div className="relative z-10 w-[80%] md:w-[40%] mx-auto bg-gray-light p-4 md:p-5 m-10 md:m-20 my-40 rounded-sm shadow-sm">
                <h1 className="text-4xl font-bold font-albert-sans text-center p-6">Créez votre compte</h1>
                <p className="text-center font-albert-sans p-2 pb-6">Commencez dès maintenant votre chemin vers le bien-être</p>
                <SignUpForm />
            </div>
        </div>
    );
}