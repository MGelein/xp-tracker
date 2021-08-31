import { useCallback } from 'react';
import Header from './Header';
import { useData } from './util/hooks';
import Student from './Student';
import { setUrl } from './util/url';

import './GroupView.scss';

function GroupView() {
    const { group, setSlug } = useData();
    const onBackClick = useCallback(() => {
        setUrl('');
        setSlug('');
    }, [setSlug]);

    return (<div className="group">
        <Header label={group?.name ?? ''} size="large">
            <span className="group__back" onClick={onBackClick}>
                <span className="symbol">&lt;</span>
                <span className="text">overzicht</span>
            </span>
        </Header>
        <div className="group__students">
            {group?.students.map(({ name, xp, emoji }, index) => {
                return <Student target={group.xpTarget} key={index} index={index} name={name} xp={xp} emoji={emoji} />
            })}
        </div>
    </div>)
}

export default GroupView;