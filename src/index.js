import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// webpack (aka our task-runner) knows to look for index inside of the App folder.
// Then the 'export default' slaps it right in there!
import App from './App';

$(document).ready(() => {
  // See the thing I'm passing into the "App" tag as if it were html? That's a prop!
  // Notice also that App is capitalized. That's meaningful, unfortunately.
  // If something's a react component, it should start with a capital letter
  ReactDOM.render(<App nameOfFriend="Leo" />, $('#app-container')[0]);
});
