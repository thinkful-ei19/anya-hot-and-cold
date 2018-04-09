import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/main-game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
