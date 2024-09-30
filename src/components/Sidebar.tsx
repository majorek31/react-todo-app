import { ReactNode } from "react";

type ListProps = {
    children: ReactNode;
};

export default function Sidebar(props: ListProps) {
    return (
        <div className="w-1/3 h-full flex justify-between border-l-2 m-0">
            {props.children}
        </div>
    );
}