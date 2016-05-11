import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';
import injectTapEventPlugin from 'react-tap-event-plugin';
// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
injectTapEventPlugin();
DocHead.setTitle("Jun Jun Here Ahh");
