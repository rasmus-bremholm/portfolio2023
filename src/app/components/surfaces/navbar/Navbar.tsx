"use client";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import Link from "next/link";
import { motion, AnimatePresence, animate } from "framer-motion";
import styles from "./Navbar.module.scss";

interface MenuItems {
	title: string;
	link: string;
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuItems: MenuItems[] = [
		{ title: "Blog", link: "/blog" },
		{ title: "Projects", link: "/projects" },
		{ title: "Contact", link: "/contact" },
	];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div id='Mobile Menu' className={styles.mobileMenu}>
				<div id='Logo Section' className={styles.logoSection}></div>
				<div id='Hamburger Container'>
					<button onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"} aria-expanded={menuOpen} aria-controls='mobile-menu'>
						{menuOpen ?
							<Close />
						:	<Menu />}
					</button>
				</div>
				{menuOpen && (
					<AnimatePresence>
						<motion.div id='Hamburger Menu' role='menu' aria-label='mobile-menu'>
							{menuItems.map((item, index) => (
								<Link key={index} href={item.link} onClick={() => setMenuOpen(false)}>
									{item.title}
								</Link>
							))}
						</motion.div>
					</AnimatePresence>
				)}
			</div>
			<div id='Desktop Menu' className={styles.desktopMenu}>
				<div id='Logo Section' className={styles.logoSection}></div>
				<div id='Links Section' role='navigation'>
					{menuItems.map((item, index) => (
						<Link key={index} href={item.link}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
