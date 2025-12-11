import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/utility/theme-provider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<button
			type="button"
			className="group cursor-pointer bg-primary text-primary-foreground size-6 flex items-center justify-center rounded-full [&_svg]:size-3"
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark");
			}}
		>
			{theme === "dark" ? (
				<Sun className="text-dark size-4" />
			) : (
				<Moon className="text-dark size-4" />
			)}

			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
