import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
							{/* <!---- Logo --------> */}
							<div className="text-white">
								<Link href="/">
									<a className="flex items-center py-3 px-2 text-gray-500">
										<Image
											// loader={myLoader}
											src="/logo.png"
											alt="Picture of the author"
											width={50}
											height={50}
										/>
									</a>
								</Link>
							</div>
							{/* <!---- Primary nav --------> */}
							<div className="hidden md:flex items-center ">
								<div className="flex space-x-2 ">
									<a
										href="#about"
										className=" flex items-center py-2 px-3 text-[#ccd6f6] hover:text-teal-300 focus:text-teal-300"
									>
										<span className="pr-1 text-teal-300">01.</span>
										About
									</a>

									<a
										href="#experience"
										className=" flex items-center py-2 px-3  text-[#ccd6f6]   hover:text-teal-300 focus:text-teal-300"
									>
										<span className="pr-1 text-teal-300">02.</span>
										Experience
									</a>

									<a
										href="#work"
										className="flex items-center py-2 px-3  text-[#ccd6f6]   hover:text-teal-300 focus:text-teal-300"
									>
										<span className="pr-1 text-teal-300">03.</span>
										Work
									</a>

									<a
										href="contact"
										className="flex items-center py-2 px-3  text-[#ccd6f6]   hover:text-teal-300 focus:text-teal-300"
									>
										<span className="pr-1 text-teal-300">04.</span>
										Contact
									</a>

									{/* <button className="text-emerald-400 hover:animate-bounce  border border-solid border-emerald-400 rounded-md py-3 px-4 ml-4  no-underline leading-3 cursor-pointer  font-light  bg-transparent  duration-300"></button> */}

									<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
										<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
											Resume
										</span>
									</button>
								</div>
							</div>
							{/* mobile hambergered menu goes here */}
							<div className="md:hidden flex items-center">
								<button onClick={handlClick}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 text-emerald-400"
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
							className=" flex items-center py-2 px-3 text-[#ccd6f6] hover:text-teal-300 focus:text-teal-300"
						>
							<span className="pr-1 text-teal-300">01.</span>
							About
						</a>

						<a
							href=""
							className=" flex items-center py-2 px-3 text-[#ccd6f6] hover:text-teal-300 focus:text-teal-300"
						>
							<span className="pr-1 text-teal-300">02.</span>
							Experience
						</a>

						<a
							href=""
							className="flex items-center py-2 px-3 text-[#ccd6f6] hover:text-teal-300 focus:text-teal-300"
						>
							<span className="pr-1 text-teal-300">03.</span>
							Work
						</a>

						<a
							href=""
							className="flex items-center py-2 px-3 text-[#ccd6f6] hover:text-teal-300 focus:text-teal-300"
						>
							<span className="pr-1 text-teal-300">04.</span>
							Contact
						</a>
						<button className="relative inline-flex items-center justify-center p-0.5 mb-2 ml-3 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Resume
							</span>
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
