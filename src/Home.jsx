import Logo from "./assets/LOGO.png";
import construction from "./assets/construction.svg";
const Home = () => {
	return (
	<div className="w-full h-screen overflow-hidden flex items-center justify-center bg-amber-50 text-center text-sm sm:text-base md:text-2xl text-saddlebrown font-arimo px-4">
			<div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 py-2">
			
				<div className="">
					<img
						className="w-[400px] sm:w-[800px] md:w-[1000px] h-auto max-h-[48vh] object-contain"
						alt="logo"
						src={Logo}
					/>
				</div>

				<div className="w-full max-w-xl shadow-lg  rounded-2xl bg-amber-100 px-4 py-4 flex flex-col items-center gap-1">
					<div className="text-base sm:text-lg text-amber-600 font-semibold">تحت الإنشاء</div>
					<div className="text-sm sm:text-base text-amber-600">Under Construction</div>
				</div>


				<div className="w-full max-w-xl shadow-lg rounded-2xl bg-amber-100 box-border  text-base flex flex-col gap-4 p-6">
					<div className="w-full flex items-center justify-center gap-3">
						<svg className="h-5 w-5 text-amber-600 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							<rect x={3} y={5} width={18} height={14} rx={2} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
						</svg>
						<div className="text-sm text-amber-600 sm:text-base">admin@rawafed.academy</div>
					</div>
					<div className="w-full flex items-center justify-center">
						<div className=" bg-amber-600 w-16 h-px" />
					</div>

					<div className="w-full flex items-center justify-center gap-3">
						<div className="text-sm text-amber-600 sm:text-base">مسقط - سلطنة عُمان</div>
						<svg className="h-5 w-5 text-amber-600 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>

					<div className="w-full flex items-center justify-center gap-3 ">
						<svg className="h-5 w-5 text-amber-600 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
						</svg>

						<div className="text-sm sm:text-base  text-amber-600">Muscat - Sultanate of Oman</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
