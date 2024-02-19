import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";
import "./theme-config.css";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Dbug",
	description: "Debug your application in a minimal way",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<QueryClientProvider>
					<AuthProvider>
						<Theme appearance="light" panelBackground="solid">
							<NavBar />
							<main className="p-5">
								<Container>{children}</Container>
							</main>
						</Theme>
					</AuthProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
