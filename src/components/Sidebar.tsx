import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="lg:w-1/3 sm:w-full lg:h-full flex justify-between border-r-2 m-0">
      {props.children}
    </div>
  );
}
