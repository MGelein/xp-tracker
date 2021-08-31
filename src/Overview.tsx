import { useData } from './util/hooks';
import Spinner from './Spinner';

import './Overview.scss';

function Overview() {
    const { groups } = useData();

    return (<div className="overview">
        <Spinner />
    </div>)
}

export default Overview;