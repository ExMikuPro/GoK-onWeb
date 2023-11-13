/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import NarBar from './navBar'

render(() => <NarBar />,document.getElementById('header')!);
render(() => <App />,document.getElementById('row')!);
