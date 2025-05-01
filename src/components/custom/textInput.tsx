"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const TextInput = ({ state, defaultValue, title }: { state?: any; defaultValue: string | undefined, title: string }) => {

    return (
        <div className="grid gap-2">

            <div className="grid gap-2">
                <Label htmlFor="name" className="flex justify-between">{title}
                    {state?.errors?.name && (
                        <p className="text-right text-xs text-red-400 font-normal">{state.errors.name}</p>
                    )}
                </Label>
                <Input id="name" type="text" placeholder="Name" name="name" required defaultValue={defaultValue} />
            </div>
        </div>
    );
};

export default TextInput;
