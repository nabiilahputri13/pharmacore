import { ReactNode } from "react";

interface Card3Props {
  children: ReactNode;
}

export default function Card3({ children }: Card3Props) {
  return (
    <div className="bg-blue-100 text-blue-900 font-semibold p-6 md:p-8 rounded-2xl leading-relaxed">
      {children}
    </div>
  );
}
