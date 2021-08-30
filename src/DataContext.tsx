import { useEffect } from "react";
import { createContext, useState } from "react";
import { Group, loadGroups } from './util/spreadsheet';

type ContextType = {

    group: Group | null,
    setGroup: React.Dispatch<React.SetStateAction<Group | null>>,

    groups: Group[],
    setGroups: React.Dispatch<React.SetStateAction<Group[]>>,
}

const DataContext = createContext<ContextType | null>(null);

function AppContext({ children }: {
    children: React.ReactNode
}) {
    const [group, setGroup] = useState<Group | null>(null);
    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        const init = async () => {
            const newGroups = await loadGroups();
            setGroups(newGroups);
            const url = window.location.pathname;
            const selectedGroup = newGroups.find(group => url.includes(group.name));
            if (selectedGroup) setGroup(selectedGroup);
        }
        init();
    }, []);

    return (<DataContext.Provider value={{
        group, setGroup,
        groups, setGroups,
    }}>
        {children}
    </DataContext.Provider>);
}

export default AppContext;