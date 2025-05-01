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

                                    <div className="grid gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name" className="flex justify-between">Your Name
                                                {state?.errors?.name && (
                                                    <p className="text-right text-xs text-red-400 font-normal">{state.errors.name}</p>
                                                )}
                                            </Label>
                                            <Input id="name" type="text" placeholder="Name" name="name" required defaultValue={typeof state?.values?.name === 'string' ? state.values.name : undefined} />
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
                                        
                                        <SubmitButton />
                                    </div>
                                    <div className="text-center text-sm">
                                        Have an account?{" "}
                                        <Link href="/login" className="underline underline-offset-4">
                                            Sign in
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
    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} className="w-full">Sign up</Button>
    );
}

export default Signup;