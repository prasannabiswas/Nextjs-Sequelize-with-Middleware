"use client";

import Link from "next/link"
import { useActionState } from "react"
import { signup } from "./action";
import { useFormStatus } from "react-dom";

// Custom Components
import PasswordInput from "@/components/custom/passwordInput";

// shadcn ui-imports
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function Signup() {
    const [state, signupAction] = useActionState(signup, undefined);

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gradient-to-br from-[#0250c5] to-[#d43f8d]">
            <div className="flex w-full max-w-md flex-col gap-6 bg-muted rounded-[10px] shadow-[3px_4px_7px_1px_rgba(0,0,0,0.14)]">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Create Your Account</CardTitle>
                            <CardDescription>Create Your Account with Acto Community</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={signupAction}>
                                <div className="grid gap-6 mt-7">
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
                                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                        <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
                                    </div>
                                    <div className="grid gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name" className="flex justify-between">Your Name
                                                {state?.errors?.name && (
                                                    <p className="text-right text-xs text-red-400 font-normal">{state.errors.name}</p>
                                                )}
                                            </Label>
                                            <Input id="name" type="text" placeholder="Name" name="name" required defaultValue={typeof state?.values?.name === 'string' ? state.values.name : undefined}/>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email" className="flex justify-between">Email
                                                {state?.errors?.email && (
                                                    <p className="text-right text-xs text-red-400 font-normal">{state.errors.email}</p>
                                                )}
                                            </Label>
                                            <Input id="email" type="email" name="email" placeholder="m@example.com" required defaultValue={typeof state?.values?.email === 'string' ? state.values.email : undefined} />
                                        </div>

                                        <PasswordInput state={state?.errors?.password} defaultValue={typeof state?.values?.password === 'string' ? state.values.password : undefined} />


                                        <div className="grid gap-2">
                                            <Label htmlFor="contacts" className="flex justify-between">Contacts
                                                {state?.errors?.number && (
                                                    <p className="text-right text-xs text-red-400 font-normal">{state.errors.number}</p>
                                                )}
                                            </Label>
                                            <div className="flex justify-start items-center gap-1">
                                                <Select>
                                                    <SelectTrigger >
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="IND">+91</SelectItem>
                                                            <SelectItem value="USA">+1</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                <Input id="contacts" type="tel" required name="number" defaultValue={typeof state?.values?.number === 'string' ? state.values.number : undefined} />
                                            </div>
                                        </div>
                                        <SubmitButton />
                                    </div>
                                    <div className="text-center text-sm">
                                        Have an account?{" "}
                                        <a href="#" className="underline underline-offset-4">
                                            Sign in
                                        </a>
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
    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} className="w-full">Sign up</Button>
    );
}

export default Signup;