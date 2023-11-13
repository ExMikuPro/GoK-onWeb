/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './header.css';
import App from './App';
import NarBar from './navBar'
import IndexTitle from './indexTitle';

render(() => <IndexTitle />, document.getElementById("title")!)
render(() => <NarBar />, document.getElementById("nav")!)
