"use client";
import { useState } from "react";
import { Menu, Close, Home, Book, AccountTree, ConnectWithoutContact } from "@mui/icons-material";
import Link from "next/link";
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from "@mui/material";
import LogoButton from "../../buttons/LogoButton";

interface MenuItems {
	title: string;
	link: string;
	icon: React.ReactNode;
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false); // Change to false in prod!

	const menuItems: MenuItems[] = [
		{ title: "Home", link: "/", icon: <Home /> },
		{ title: "Blog", link: "/blog", icon: <Book /> },
		{ title: "Projects", link: "/projects", icon: <AccountTree /> },
		{ title: "Contact", link: "/contact", icon: <ConnectWithoutContact /> },
	];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Box component='nav'>
			<Box id='Mobile Menu' sx={{ display: { xs: "flex", md: "none", alignItems: "center" } }}>
				<Box id='Logo Section'>
					<Link href={"/"}>
						<LogoButton />
					</Link>
				</Box>
				<Box id='Hamburger Container'>
					<IconButton onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"} aria-expanded={menuOpen} aria-controls='mobile-menu'>
						{menuOpen ?
							<Close />
						:	<Menu color='secondary' />}
					</IconButton>
				</Box>

				<Drawer id='Hamburger Menu' role='menu' aria-label='mobile-menu' anchor='top' open={menuOpen} onClose={() => setMenuOpen(false)}>
					<List>
						{menuItems.map((item, index) => (
							<ListItem key={index}>
								<ListItemButton component={Link} href={item.link} onClick={() => setMenuOpen(false)}>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			</Box>
			<Box id='Desktop Menu' sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
				<Box id='Logo Section'>
					<Link href={"/"}>
						<LogoButton />
					</Link>
				</Box>
				{menuItems.map((item, index) => (
					<Link key={index} href={item.link}>
						{item.title}
					</Link>
				))}
			</Box>
		</Box>
	);
}
