import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-8 md:px-10 xl:px-30">{children}</div>
  );
}
