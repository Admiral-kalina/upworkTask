import React, { ReactNode } from 'react';
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    classname?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, classname }) => {
    return (
        <button className={clsx(
            'bg-[#1B264F]',
            classname
        )}>
            <p className="font-poppins text-parL text-[#FFF] tracking-widest font-bold">{children}</p>
        </button>
    );
};
