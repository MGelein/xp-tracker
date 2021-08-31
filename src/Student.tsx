import { useEffect } from 'react';
import { CSSProperties } from 'react';
import { useState } from 'react';

import './Student.scss';

const staggerTime = 100;

function Student({
    name,
    xp,
    emoji,
    index,
    target,
}: {
    name: string,
    xp: number,
    emoji: string,
    index: number,
    target: number,
}) {
    const [animating, setAnimating] = useState(false);
    const percentage = (xp / target) * 100;
    const style = { '--percentage': percentage } as CSSProperties;
    const animStyle = { '--anim-delay': `${staggerTime * index}ms` } as CSSProperties;

    useEffect(() => {
        const id = setTimeout(() => setAnimating(true), 200);
        return () => clearTimeout(id);
    }, []);

    return (<div className="student" style={animStyle}>
        <span className="student__index">{index + 1}</span>
        <span className="student__emoji">{emoji}</span>
        <div className="student__info">
            <div className="student__name-xp">
                <span className="student__name">{name}</span>
                <span className="student__xp">{xp}<span className="student__xp-target">/{target}</span>&nbsp;XP</span>
            </div>
            <div>
                <div style={style} className={`student__xp-bar ${animating ? 'animating' : ''}`}></div>
                <div className="student__xp-bar__outline"></div>
            </div>
        </div>
    </div>);
}

export default Student;