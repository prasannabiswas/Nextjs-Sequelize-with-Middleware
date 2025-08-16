const SiteFooter = () => {
    return (
        <footer className="mt-10 border-t">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <p className="text-lg font-bold"><span className="text-primary">Amp</span>Kart</p>
                    <p className="mt-2 text-sm text-muted-foreground">Electrical products at wholesale pricing. Fast delivery, GST billing.</p>
                </div>
                <div>
                    <p className="mb-2 text-sm font-semibold">Shop</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><a href="#">Circuit Breakers</a></li>
                        <li><a href="#">Distribution Boxes</a></li>
                        <li><a href="#">Wires & Cables</a></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 text-sm font-semibold">Support</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 text-sm font-semibold">Legal</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Your Company</div>
        </footer>
    );
}

export default SiteFooter;