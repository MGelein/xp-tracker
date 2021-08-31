import { useEffect } from "react";
import { createContext, useState } from "react";
import { Group, loadGroups } from './util/spreadsheet';

type ContextType = {

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

    useEffect(() => {
        const init = async () => {
            const newGroups = await loadGroups();
            setGroups(newGroups);
        }
        init();
    }, []);

    useEffect(() => {
        const selectedGroup = groups.find(group => {
            console.log(slug, group.name)
            return slug.includes(group.name);
        });
        if (selectedGroup) setGroup(selectedGroup);
    }, [groups, slug]);

    useEffect(() => console.log(slug), [slug]);

    return (<DataContext.Provider value={{
        group, setGroup,
        groups, setGroups,
        slug, setSlug,
    }}>
        {children}
    </DataContext.Provider>);
}

export default AppContext;