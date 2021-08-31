import './GroupView.scss';
import Header from './Header';
import { useData } from './util/hooks';

function GroupView() {
    const { group } = useData();

    return (<div className="overview">
        <Header label={group?.name ?? ''} size="large" />
    </div>)
}

export default GroupView;