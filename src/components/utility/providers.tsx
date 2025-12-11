import { useEffect, useState } from "react";

import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{children}
			{/* <ToasterProvider /> */}
			<div className="fixed right-6 bottom-6">
				<ModeToggle />
			</div>
		</ThemeProvider>
	);
}

// function ToasterProvider() {
// 	const { resolvedTheme } = useTheme();

// 	return (
// 		<Toaster
// 			position="top-right"
// 			theme={resolvedTheme === "dark" ? "dark" : "light"}
// 		/>
// 	);
// }
