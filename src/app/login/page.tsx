import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gradient-to-br from-[#0250c5] to-[#d43f8d]">
            <div className="flex w-full max-w-md flex-col gap-6 bg-muted rounded-[10px] shadow-[3px_4px_7px_1px_rgba(0,0,0,0.14)]">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Sign in to your account</CardTitle>
                            <CardDescription>Login with your Facebook or Google account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid gap-6 mt-2">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="outline" className="w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" > <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /> </svg>
                                            Login with Facebook
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={48} height={48} strokeWidth={1}> <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"></path> </svg>
                                            Login with Google
                                        </Button>
                                    </div>
                                    <div className="grid gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="m@example.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                                <Link href="/" className="ml-auto text-sm underline-offset-4 hover:underline">
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <Input id="password" type="password" required />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Login
                                        </Button>
                                    </div>
                                    <div className="text-center text-sm">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/signup" className="underline underline-offset-4">
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

export default Login;
