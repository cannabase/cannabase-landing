import {ButtonHTMLAttributes} from "react";

interface ButtonProps {
    text: string,
}

export default function Button({
                                   text
                               }: ButtonProps) {

    return (
        <button
            className="
            bg-lime-500
            hover:bg-lime-600
            text-white
            font-semibold
            py-2
            px-4
            rounded
            shadow
            hover:shadow-md
            inline-flex
            items-center">
            {text}
        </button>
    )
}