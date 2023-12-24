import { useState } from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: (e: React.FormEvent<HTMLInputElement>) => { const newValue = (e.target as HTMLInputElement).value; newValue && setValue(newValue) } },
        () => setValue(initialValue)
    ];
};