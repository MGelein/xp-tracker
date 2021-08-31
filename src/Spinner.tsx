import './Spinner.scss';

function Spinner() {
    return (<div className="spinner">
        <div className="breather">
            <span className="text">loading...</span>
        </div>
    </div>);
}

export default Spinner;