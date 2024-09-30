import { ReactNode } from "react";

type CenteredBoxProps = {
  children: ReactNode;
};

export default function CenteredBox({ children }: CenteredBoxProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-200">
      <div className="bg-white text-black max-lg:w-11/12 md:w-3/6 h-2/3 rounded-2xl shadow-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
