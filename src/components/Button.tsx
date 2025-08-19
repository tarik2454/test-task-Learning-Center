import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center rounded-lg border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white transition hover:border-blue-400 hover:bg-blue-600 focus:outline-none focus-visible:outline-4 focus-visible:outline-blue-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
