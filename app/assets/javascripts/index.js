import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/index.css';
import Itinerary from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Itinerary />, document.getElementById('root'));
registerServiceWorker();
