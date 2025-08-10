import { Heart, Search, ShoppingCart, User } from "lucide-react";
import IconButton from "../partials/IconButton";
import ThemeToggle from "../partials/ThemeToggle";
import Link from "next/link";


const Header = () => {
    return (
        <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
                <Link href="/" className="font-black text-xl tracking-tight"><span className="text-primary">Wat</span>Mart</Link>
                <div className="hidden max-w-2xl flex-1 md:flex">
                    <div className="relative w-full">
                        <input placeholder="Products search" className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary" />
                        <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <IconButton label="Wishlist"><Heart className="h-5 w-5" /></IconButton>
                    <IconButton label="Cart"><ShoppingCart className="h-5 w-5" /></IconButton>
                    <button className="hidden items-center rounded-md border px-3 py-2 text-sm sm:inline-flex hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <User className="mr-2 h-4 w-4" /> Login / Sign Up
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

export default Header;