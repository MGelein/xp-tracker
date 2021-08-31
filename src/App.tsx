import { useCallback } from 'react';
import { useData } from './util/hooks';
import Overview from './Overview';
import GroupView from './GroupView';
import Spinner from './Spinner';

import './App.scss';

function App() {
    const { group, groups } = useData();
    const getOverview = useCallback(() => groups.length > 0 ? <Overview /> : <Spinner />, [groups]);

    return (<div className="app">
        {group === null ? getOverview() : <GroupView />}
    </div>);
}

export default App;