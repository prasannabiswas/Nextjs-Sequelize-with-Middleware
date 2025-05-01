"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const EmailInput = ({ state, defaultValue, title }: { state?: any; defaultValue: string | undefined, title: string }) => {

    return (
        <div className="grid gap-2">
            <Label htmlFor="email" className="flex justify-between">{title}
                {state?.errors?.email && (
                    <p className="text-right text-xs text-red-400 font-normal">{state.errors.email}</p>
                )}
            </Label>
            <Input id="email" type="email" name="email" placeholder="m@example.com" required defaultValue={defaultValue} />
        </div>
    );
};

export default EmailInput;
