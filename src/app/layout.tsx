import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "V-tube",
	description: "V-tube is a video sharing platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} antialiased`}>
					<TRPCProvider>{children}</TRPCProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
