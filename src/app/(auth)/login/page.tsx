'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoaderCircleIcon } from 'lucide-react';
import { getLoginSchema, LoginSchemaType } from '../form/login-schema';

function Login() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // const [dataState, setData] = useActionState()

    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(getLoginSchema()),
        defaultValues: {
            email: 'test@mail.com',
            password: 'Pass@123',
        },
    });

    async function onSubmit(values: LoginSchemaType) {
        setIsProcessing(true);
        setError(null);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.error || 'Invalid credentials');
            } else {
                router.push('/');
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'An unexpected error occurred. Please try again.'
            );
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <div className="min-h-svh bg-background">
            {/* Top brand bar */}
            <header className="w-full border-b bg-white/70 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        ShopBrand
                    </Link>
                    <div className="text-sm text-muted-foreground">
                        Need help? <Link href="/support" className="underline underline-offset-4">Contact us</Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl grid-cols-1 md:grid-cols-2">
                {/* Promo / brand side */}
                <section className="relative hidden md:flex flex-col justify-between overflow-hidden rounded-none md:rounded-l-xl bg-gradient-to-br from-[#0250c5] to-[#d43f8d] p-8 text-white">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight">Welcome back</h2>
                        <p className="mt-2 text-white/80">
                            Sign in to track orders, manage returns, and check out faster.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">Free 30-day returns</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">Secure checkout & payments</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">24/7 customer care</p>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(ellipse_at_center,#fff_0,transparent_60%)]" />
                </section>

                {/* Auth card */}
                <section className="flex items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-md">
                        <div className="rounded-xl border bg-card shadow-sm">
                            <div className="p-6 sm:p-8">
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-1">
                                            <h1 className="text-2xl font-semibold tracking-tight">Sign in to your account</h1>
                                            <p className="text-sm text-muted-foreground">
                                                New customer?{" "}
                                                <Link href="/signup" className="font-medium underline underline-offset-4">
                                                    Create an account
                                                </Link>
                                            </p>
                                        </div>

                                        {error && (
                                            <Alert variant="destructive">
                                                <AlertCircle />
                                                <AlertTitle>{error}</AlertTitle>
                                            </Alert>
                                        )}

                                        {/* Social sign in (optional placeholders) */}
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <Button type="button" variant="outline" className="w-full">
                                                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-primary/20" />
                                                Continue with Google
                                            </Button>
                                            <Button type="button" variant="outline" className="w-full">
                                                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-primary/20" />
                                                Continue with Apple
                                            </Button>
                                        </div>

                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-card px-2 text-muted-foreground">or sign in with email</span>
                                            </div>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="you@example.com" autoComplete="email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex items-center justify-between">
                                                        <FormLabel>Password</FormLabel>
                                                        <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-primary">
                                                            Forgot password?
                                                        </Link>
                                                    </div>
                                                    <div className="relative">
                                                        <Input
                                                            placeholder="Your password"
                                                            type={passwordVisible ? "text" : "password"}
                                                            autoComplete="current-password"
                                                            {...field}
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                                            className="absolute end-0 top-1/2 -translate-y-1/2 me-1.5 h-7 w-7 !bg-transparent"
                                                            aria-label={passwordVisible ? "Hide password" : "Show password"}
                                                        >
                                                            {passwordVisible ? (
                                                                <EyeOff className="text-muted-foreground" />
                                                            ) : (
                                                                <Eye className="text-muted-foreground" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {/* Remember me + guest checkout */}
                                        <div className="flex items-center justify-between">
                                            <label className="flex select-none items-center gap-2 text-sm text-muted-foreground">
                                                <input type="checkbox" defaultChecked={true} className="h-4 w-4 accent-primary" />
                                                Keep me signed in
                                            </label>
                                            <Link href="/guest-checkout" className="text-sm underline underline-offset-4">
                                                Continue as guest
                                            </Link>
                                        </div>

                                        <div className="space-y-3">
                                            <Button className="w-full" type="submit" disabled={isProcessing} size="lg">
                                                {isProcessing ? <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
                                                Sign in
                                            </Button>
                                        </div>

                                        {/* Small reassurance row */}
                                        <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                                            <div>Secure payments</div>
                                            <div>Order tracking</div>
                                            <div>Easy returns</div>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
}

export default Login;
