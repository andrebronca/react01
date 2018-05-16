import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'

ReactDOM.render(
    // <HelloWorld txt = 'Lidando com props' />,
    <PropsValidation name="AndRB" age="39" height="1.9" />,
    document.getElementById("root")
)