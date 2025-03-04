export default function BackgroundShapes() {
	return (
		<div className="absolute w-full h-full md:w-1/2">
			<div className="absolute bottom-0 w-2/3 h-2/3 z-0 bg-blue rounded-full filter blur-3xl" />
			<div className="absolute top-0 right-0 w-2/3 h-2/3 z-0 bg-green rounded-full filter blur-3xl" />
		</div>
	);
}
