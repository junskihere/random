import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

import '/public/js/jquery-1.12.3.min.js';
 import '/public/css/materialize.min.css';
 import '/public/js/materialize.min.js';

function loadStories() {

  require('../client/modules/accounts/components/.stories/register');
  // require as many stories as you need.
}

configure(loadStories, module);
