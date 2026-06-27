import ModeToggle from "@/components/utility/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <a href="#">Logo</a>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
