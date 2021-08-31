import { useData } from './util/hooks';
import Header from './Header';
import LinkButton from './LinkButton';

import './Overview.scss';

function Overview() {
    const { groups } = useData();

    return (<div className="overview">
        <Header label="Overzicht" size="large" />
        <div className="overview__content">
            <div className="overview__groups">
                {groups && groups.map(({ name }, index) => {
                    return <LinkButton key={index} index={index} name={name} />
                })}
            </div>
        </div>
    </div>)
}

export default Overview;