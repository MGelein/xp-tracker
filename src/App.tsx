import { useData } from './util/hooks';

import './App.scss';
import Overview from './Overview';
import GroupView from './GroupView';

function App() {
    const { group } = useData();
    return (<div className="app">
        {group === null ? <Overview /> : <GroupView />}
    </div>);
}

export default App;