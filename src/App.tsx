import { useData } from './util/hooks';

import './App.scss';

function App() {
    const { group } = useData();
    return <>{group && group.name}{!group && 'Overview'}</>
}

export default App;