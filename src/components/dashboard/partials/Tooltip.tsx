'use client';

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ content, children, side = "top" }: { content: string; children: React.ReactNode; side?: "top" | "bottom" | "left" | "right" }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className="relative inline-flex"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
        >
            {children}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: side === "top" ? 6 : -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: side === "top" ? 6 : -6 }}
                        transition={{ duration: 0.18 }}
                        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-white shadow ${side === "top"
                            ? "-top-2 translate-y-[-100%] left-1/2 -translate-x-1/2"
                            : side === "bottom"
                                ? "-bottom-2 translate-y-[100%] left-1/2 -translate-x-1/2"
                                : side === "left"
                                    ? "top-1/2 -translate-y-1/2 -left-2 -translate-x-[100%]"
                                    : "top-1/2 -translate-y-1/2 -right-2 translate-x-[100%]"
                            }`}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Tooltip;