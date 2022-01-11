import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
	const [menu, setMenu] = useState(true);

	const handlClick = () => {
		setMenu(!menu);
	};

	return (
		<>
			<div className="bg-[#0a192f] py-7">
				<nav className="bg-[#0a192f] top-0 py-3 fixed inset-x-0 bg-opacity-90 backdrop-blur-sm shadow-xl">
					<div className="max-w-8xl mx-auto px-12">
						<div className="flex justify-between">
							{/* <div className="flex space-x-4 justify-between"> */}
							{/* <!---- Logo --------> */}
							<div className="text-white">
								<a
									href=""
									className="flex items-center py-3 px-2 text-gray-500"
								>
									{/* <Image /> */}
									{/* <svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2 text-emerald-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokelinecap="round"
											strokelinejoin="round"
											strokeWidth="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg> */}

									<span>Issam afdl</span>
								</a>
							</div>
							{/* <!---- Primary nav --------> */}
							<div className="hidden md:flex items-center space-x-1">
								<div className="flex ">
									<a
										href=""
										className=" flex items-center py-2 px-3 text-gray-700"
									>
										<span>01</span>
										About
									</a>

									<a
										href=""
										className=" flex items-center py-2 px-3 text-gray-700"
									>
										<span>01</span>
										Experience
									</a>

									<a
										href=""
										className="flex items-center py-2 px-3 text-gray-700"
									>
										<span>01</span>
										Work
									</a>

									<a
										href=""
										className="flex items-center py-2 px-3 text-gray-700"
									>
										<span>01</span>
										Contact
									</a>

									<button className="text-emerald-400 border border-solid border-emerald-400 rounded-sm py-2 px-4 font-mono no-underline leading-3 cursor-pointer ml-5 font-light  bg-transparent  duration-300">
										Resume
									</button>
								</div>
							</div>
							{/* mobile hambergered menu goes here */}
							<div className="md:hidden flex items-center">
								<button onClick={handlClick}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 text-emerald-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokelinecap="round"
											strokelinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					{/* <!---- Mobile menu --------> */}

					<div className={` md:hidden ${menu ? "hidden" : ""}`}>
						<a
							href=""
							className=" flex items-center py-2 px-3 text-gray-700 hover:bg-gray-800"
						>
							<span>01</span>
							About
						</a>

						<a
							href=""
							className=" flex items-center py-2 px-3 text-gray-700 hover:bg-gray-800"
						>
							<span>01</span>
							Experience
						</a>

						<a
							href=""
							className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-800"
						>
							<span>01</span>
							Work
						</a>

						<a
							href=""
							className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-800"
						>
							<span>01</span>
							Contact
						</a>
						<button className="text-emerald-400 border border-solid border-emerald-400 rounded-sm py-2 px-4 font-mono no-underline leading-3 cursor-pointer ml-5 font-light  hover:bg-teal-100 bg-transparent duration-300">
							Resume
						</button>
					</div>
				</nav>
			</div>

			<div className="py-32 bg-[#0a192f] text-center">
				<h1 className="font-extralight text-4xl text-white">
					{" "}
					Navbar in tailwid css!!
				</h1>
			</div>

			<div className="py-32 bg-blue-300 text-center">
				<h1 className="font-extralight text-4xl"> Navbar in tailwid css!!</h1>
			</div>
			<div className="py-32 bg-blue-600 text-center">
				<h1 className="font-extralight text-4xl"> Navbar in tailwid css!!</h1>
			</div>
		</>
	);
};

export default Navbar;
