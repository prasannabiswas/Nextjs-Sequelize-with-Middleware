import { ReactNode } from "react";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import SiteFooter from "./components/SiteFooter";
import TopBar from "./components/Topbar";

type Props = { children: ReactNode };

export default function DasboardLayout({ children }: Props) {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <TopBar />
            <Header />
            <MainNav />
            <main>
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
