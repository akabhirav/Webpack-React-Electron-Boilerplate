import React from 'react';
import {render} from 'react-dom';
/** Load renderer ipc to send calls to main process*/
import {ipcRenderer} from 'electron';

import '../../css/index.css';

/** Example method to quit app by sending a custom event to main process and receiving the same in main process*/
function quitApp() {
  ipcRenderer.send('close-main-window');
}

/** Render basic element or anything build your react app here*/
render(
  <button style={{textAlign: 'center'}} onClick={quitApp}>Quit</button>,
  document.getElementById('app')
);
