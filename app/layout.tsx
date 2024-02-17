import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";
import "./theme-config.css";
import AuthProvider from "./auth/Provider";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Dbug",
	description: "Debug your application in a minimal way",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<AuthProvider>
					<Theme appearance="light" accentColor="purple">
						<NavBar />
						<main className="p-5">
							<Container>{children}</Container>
						</main>
					</Theme>
				</AuthProvider>
			</body>
		</html>
	);
}
