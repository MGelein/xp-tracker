import { useEffect } from "react";
import { createContext, useState } from "react";
import { Group, loadGroups } from './util/spreadsheet';

type ContextType = {
    loaded: boolean,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>,

    group: Group | null,
    setGroup: React.Dispatch<React.SetStateAction<Group | null>>,

    groups: Group[],
    setGroups: React.Dispatch<React.SetStateAction<Group[]>>,

    slug: String,
    setSlug: React.Dispatch<React.SetStateAction<string>>,
}

export const DataContext = createContext<ContextType | null>(null);

function AppContext({ children }: {
    children: React.ReactNode
}) {
    const [group, setGroup] = useState<Group | null>(null);
    const [groups, setGroups] = useState<Group[]>([]);
    const [slug, setSlug] = useState(decodeURI(window.location.pathname));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const init = async () => {
            const newGroups = await loadGroups();
            setTimeout(() => {
                setGroups(newGroups);
            }, 300);
            setLoaded(true);
        }
        init();
    }, []);

    useEffect(() => {
        const selectedGroup = groups.find(group => {
            return slug.includes(group.name);
        });
        setGroup(selectedGroup ?? null);
    }, [groups, slug]);

    return (<DataContext.Provider value={{
        group, setGroup,
        groups, setGroups,
        slug, setSlug,
        loaded, setLoaded,
    }}>
        {children}
    </DataContext.Provider>);
}

export default AppContext;