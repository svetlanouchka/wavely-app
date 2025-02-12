export default function BackgroundShapes() {
    return (
        <div className="absolute w-[700px] h-[700px]">
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-blue rounded-full filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-green rounded-full filter blur-3xl"></div>
        </div>
    );
}