"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useActionState } from "react";
import EmailInput from "@/components/custom/emailInput";
import PasswordInput from "@/components/custom/passwordInput";
import { useFormStatus } from "react-dom";
import { login } from "./action";

function Login() {
    const [state, loginAction] = useActionState(login, undefined);

    const handleGoogleSignUp = () => {
        window.location.href = '/api/auth/google';
    };


    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gradient-to-br from-[#0250c5] to-[#d43f8d]">
            <div className="flex w-full max-w-md flex-col gap-6 bg-muted rounded-[10px] shadow-[3px_4px_7px_1px_rgba(0,0,0,0.14)]">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Sign in to your account</CardTitle>
                            <CardDescription>Login with your Facebook or Google account</CardDescription>
                            <CardFooter className="gap-6 text-sm justify-center">
                                <p>test@gmail.com</p>
                                <p>12345678</p></CardFooter>
                        </CardHeader>
                        <CardContent>
                            <form action={loginAction}>
                                <div className="grid gap-6 mt-2">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="outline" className="w-full cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" > <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /> </svg>
                                            Login with Facebook
                                        </Button>
                                        <Button variant="outline" className="w-full cursor-pointer" onClick={handleGoogleSignUp}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={48} height={48} strokeWidth={1}> <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"></path> </svg>
                                            Login with Google
                                        </Button>
                                    </div>
                                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                        <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
                                    </div>
                                    <div className="grid gap-6">
                                        <EmailInput state={state?.values?.email} title="Email" defaultValue={typeof state?.values?.email === 'string' ? state.values.email : undefined} />
                                        <PasswordInput state={state?.errors?.password} defaultValue={typeof state?.values?.password === 'string' ? state.values.password : undefined} />
                                        <LoginButton />
                                    </div>
                                    <div className="text-center text-sm">
                                        Don&apos;t have an account?<Link href="/signup" className="underline underline-offset-4">
                                            Sign up
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary mt-2">
                            By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} className="w-full">Login</Button>
    );
}

export default Login;
