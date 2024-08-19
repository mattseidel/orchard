import * as React from 'react';
import * as client from 'react-dom/client'
import "./index.css"
import {Main} from './Main';

const root = client.createRoot(document.getElementById('root')!)

root.render(<Main />)