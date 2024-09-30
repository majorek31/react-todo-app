import { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
}

export default function CenteredBox({ children }: ListProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-200">
      <div className="bg-white text-black w-1/2 h-2/3 rounded-2xl shadow-xl overflow-hidden">
        {children}
      </div>
    </div>
    );
}
