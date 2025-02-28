import { format, parseISO } from "date-fns";

export default function Rectangle({ key, date, name, pic, onClick }) {
	const newDate = format(parseISO(date), "dd/MM/yyyy HH:mm");

	console.log(newDate);

	return (
		<div
			key={key}
			className="flex flex-row justify-between pl-6 items-center gap-2 font-albert-sans border-1 border-gray-400 rounded-lg bg-gray-light py-4 text-left mb-4 transition-transform duration-200 hover:scale-105 cursor-pointer"
			onClick={onClick}
			onKeyUp={onClick}
		>
			<div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
				<p className="text-[0.9rem] whitespace-nowrap">{newDate}</p>
				<p className="text-[0.9rem] font-semibold">{name}</p>
			</div>
			<div className="flex w-1/3 md:w-1/4 justify-center">
				<img src={pic} alt={`${name}`} className=" h-[38px]" />
			</div>
		</div>
	);
}
