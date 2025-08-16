'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Tooltip from './Tooltip';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) {
        // avoid hydration mismatch; render a neutral icon
        return (
            <button
                type="button"
                aria-label="Toggle theme"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background/70 backdrop-blur text-foreground"
            >
                <Sun className="h-5 w-5" />
            </button>
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <Tooltip side="bottom" content={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            <button
                type="button"
                aria-label="Toggle theme"
                aria-pressed={isDark}
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background/70 backdrop-blur text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
                <Sun className={`h-5 w-5 transition-all ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                <Moon className={`absolute h-5 w-5 transition-all ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </button>
        </Tooltip>
    );
}
