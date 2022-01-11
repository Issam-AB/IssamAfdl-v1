import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio V1</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1 className="text-2xl text-red-500 underline">Hello World</h1>
		</div>
	);
}
