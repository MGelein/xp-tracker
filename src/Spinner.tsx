import { useEffect } from 'react';
import { useState } from 'react';

import './Spinner.scss';

function Spinner() {
    return (<div className="spinner">
        <div className="breather">
            <span className="text">Loading</span>
        </div>
    </div>);
}

export default Spinner;