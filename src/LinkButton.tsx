import { CSSProperties, useState, useEffect, useCallback } from 'react';
import { setUrl } from './util/url'

import './LinkButton.scss';
import { useData } from './util/hooks';

const animationDelay = 200;

function LinkButton({
    index,
    name
}: {
    index: number,
    name: string,
}) {
    const { setSlug } = useData();
    const [entering, setEntering] = useState(true);
    const onClick = useCallback(() => {
        const newSlug = setUrl(name);
        setSlug(newSlug);
    }, [name, setSlug])

    useEffect(() => {
        const id = setTimeout(() => setEntering(false), animationDelay * (index + 1));

        return () => clearTimeout(id);
    }, [index]);

    const style = { '--animation-delay': `${animationDelay * index}ms` } as CSSProperties;
    return <button style={style} key={index} className={`link-button ${entering ? 'entering' : ''}`} onClick={onClick}>{name}</button>
}

export default LinkButton