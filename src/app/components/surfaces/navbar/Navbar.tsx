"use client";
import { useState } from "react";
import { Menu, Close, Home, Book, AccountTree, ConnectWithoutContact } from "@mui/icons-material";
import Link from "next/link";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Container } from "@mui/material";
import LogoButton from "../../buttons/LogoButton";

interface MenuItems {
	title: string;
	link: string;
	icon: React.ReactNode;
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

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
		<AppBar position='static' component='nav' elevation={0} sx={{ backgroundColor: "background.default" }}>
			<Container maxWidth='lg'>
				<Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: { xs: 64, md: 70 } }}>
					{/* Logo Section */}
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link href='/' style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
							<LogoButton />
						</Link>
					</Box>

					{/* Desktop Menu */}
					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
						{menuItems.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								style={{
									textDecoration: "none",
									color: "inherit",
									position: "relative",
									fontSize: "1rem",
									fontWeight: 400,
									padding: "4px 0",
								}}>
								<Box
									component='span'
									sx={{
										color: "text.primary",
										position: "relative",
										"&:hover": {
											color: "primary.main",
										},
										"&::after": {
											content: '""',
											position: "absolute",
											bottom: -4,
											left: 0,
											width: 0,
											height: "2px",
											backgroundColor: "primary.main",
											transition: "width 0.3s ease",
										},
										"&:hover::after": {
											width: "100%",
										},
									}}>
									{item.title}
								</Box>
							</Link>
						))}
					</Box>

					{/* Mobile Menu Button */}
					<IconButton
						onClick={toggleMenu}
						aria-label={menuOpen ? "Close Menu" : "Open Menu"}
						aria-expanded={menuOpen}
						aria-controls='mobile-menu'
						sx={{
							display: { xs: "flex", md: "none" },
							color: menuOpen ? "primary.main" : "text.primary",
						}}>
						{menuOpen ?
							<Close />
						:	<Menu />}
					</IconButton>

					{/* Mobile Drawer */}
					<Drawer
						id='mobile-menu'
						anchor='top'
						open={menuOpen}
						onClose={() => setMenuOpen(false)}
						slotProps={{
							paper: {
								sx: {
									backgroundColor: "#171717",
									borderBottom: "1px solid",
									borderColor: "divider",
									mt: 8,
								},
							},
						}}
						sx={{
							display: { xs: "block", md: "none" },
						}}>
						<List sx={{ py: 2 }}>
							{menuItems.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemButton
										component={Link}
										href={item.link}
										onClick={() => setMenuOpen(false)}
										sx={{
											backgroundColor: "transparent",
											py: 1.5,
											"&:hover": {
												backgroundColor: "rgba(3, 166, 120, 0.08)",
												"& .MuiListItemIcon-root": {
													color: "primary.main",
												},
												"& .MuiListItemText-primary": {
													color: "primary.main",
												},
											},
										}}>
										<ListItemIcon sx={{ color: "text.primary", minWidth: 40 }}>{item.icon}</ListItemIcon>
										<ListItemText
											primary={item.title}
											primaryTypographyProps={{
												fontSize: "1.1rem",
												fontWeight: 400,
												color: "text.primary",
											}}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
