import { useData } from './util/hooks';

import './Spinner.scss';

function Spinner() {
    const { loaded } = useData();

    return (<div className={`spinner ${loaded ? 'loaded' : ''}`}>
        <div className="breather">
            <span className="text">loading...</span>
        </div>
    </div>);
}

export default Spinner;