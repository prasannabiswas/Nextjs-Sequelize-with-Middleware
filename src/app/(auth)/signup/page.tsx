'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Eye, EyeOff, LoaderCircleIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { getSignupSchema, SignupSchemaType } from '../form/signup-schema';


function Signup() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmationVisible, setPasswordConfirmationVisible] =
        useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<SignupSchemaType>({
        resolver: zodResolver(getSignupSchema()),
        defaultValues: {
            name: 'Test',
            email: 'test@mail.com',
            password: 'Pass@123',
            passwordConfirmation: 'Pass@123',
            accept: true,
        },
    });

    async function onSubmit(values: SignupSchemaType) {
        setIsProcessing(true);
        setError(null);

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.error || 'Invalid credentials');
            } else {
                router.push('/login');
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
    };


    return (
        <div className="min-h-svh bg-background">
            {/* Top brand bar */}
            <header className="w-full border-b bg-white/70 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        ShopBrand
                    </Link>
                    <div className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="underline underline-offset-4">
                            Sign in
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl grid-cols-1 md:grid-cols-2">
                {/* Promo / brand side */}
                <section className="relative hidden md:flex flex-col justify-between overflow-hidden rounded-none md:rounded-l-xl bg-gradient-to-br from-[#0250c5] to-[#d43f8d] p-8 text-white">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight">Join the club</h2>
                        <p className="mt-2 text-white/80">
                            Create an account to get faster checkout, order tracking, and member-only deals.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">Exclusive member pricing</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">Early access to drops</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                            <p className="text-sm">Hassle-free returns</p>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(ellipse_at_center,#fff_0,transparent_60%)]" />
                </section>

                {/* Signup form card */}
                <section className="flex items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-md">
                        <div className="rounded-xl border bg-card shadow-sm">
                            <div className="p-6 sm:p-8">
                                <Suspense>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="space-y-1">
                                                <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
                                                <p className="text-sm text-muted-foreground">
                                                    Already a member?{" "}
                                                    <Link href="/login" className="font-medium underline underline-offset-4">
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>

                                            {error && (
                                                <Alert variant="destructive">
                                                    <AlertCircle />
                                                    <AlertTitle>{error}</AlertTitle>
                                                </Alert>
                                            )}

                                            {/* Social sign up (optional placeholders) */}
                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                <Button type="button" variant="outline" className="w-full">
                                                    <span className="mr-2 inline-block h-4 w-4 rounded-full bg-primary/20" />
                                                    Sign up with Google
                                                </Button>
                                                <Button type="button" variant="outline" className="w-full">
                                                    <span className="mr-2 inline-block h-4 w-4 rounded-full bg-primary/20" />
                                                    Sign up with Apple
                                                </Button>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute inset-0 flex items-center">
                                                    <span className="w-full border-t" />
                                                </div>
                                                <div className="relative flex justify-center text-xs uppercase">
                                                    <span className="bg-card px-2 text-muted-foreground">or sign up with email</span>
                                                </div>
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Your name" autoComplete="name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

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
                                                        <FormLabel>Password</FormLabel>
                                                        <div className="relative">
                                                            <Input
                                                                placeholder="Create a password"
                                                                type={passwordVisible ? "text" : "password"}
                                                                autoComplete="new-password"
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

                                            <FormField
                                                control={form.control}
                                                name="passwordConfirmation"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Confirm password</FormLabel>
                                                        <div className="relative">
                                                            <Input
                                                                type={passwordConfirmationVisible ? "text" : "password"}
                                                                autoComplete="new-password"
                                                                placeholder="Re-enter your password"
                                                                {...field}
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => setPasswordConfirmationVisible(!passwordConfirmationVisible)}
                                                                className="absolute end-0 top-1/2 -translate-y-1/2 me-1.5 h-7 w-7 !bg-transparent"
                                                                aria-label={
                                                                    passwordConfirmationVisible ? "Hide password confirmation" : "Show password confirmation"
                                                                }
                                                            >
                                                                {passwordConfirmationVisible ? (
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

                                            <div className="flex items-center">
                                                <FormField
                                                    control={form.control}
                                                    name="accept"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
                                                                    <Checkbox
                                                                        id="accept"
                                                                        checked={field.value}
                                                                        onCheckedChange={(checked) => field.onChange(!!checked)}
                                                                    />
                                                                    I agree to the{" "}
                                                                    <Link
                                                                        href="/privacy-policy"
                                                                        target="_blank"
                                                                        className="font-semibold text-foreground hover:text-primary"
                                                                    >
                                                                        Privacy Policy
                                                                    </Link>
                                                                </label>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <Button className="w-full" type="submit" disabled={isProcessing}>
                                                    {isProcessing ? <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
                                                    Create account
                                                </Button>
                                            </div>

                                            {/* Reassurance row */}
                                            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                                                <div>No spam ever</div>
                                                <div>1-click unsubscribe</div>
                                                <div>Secure data</div>
                                            </div>
                                        </form>
                                    </Form>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Signup;