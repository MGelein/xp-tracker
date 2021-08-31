import { useContext } from "react";
import { DataContext } from "../DataContext";

export function useData() {
    const context = useContext(DataContext);
    if (context === null) throw new Error("No context at root!");
    return context;
}