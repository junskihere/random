import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';
// modules
import coreModule from './modules/core';
import postsModule from './modules/posts';
import authModule from './modules/auth';
import commentsModule from './modules/comments';



// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(postsModule);
app.loadModule(authModule);
app.loadModule(commentsModule);

app.init();



var linkInfo = {rel: "stylesheet", href: "http://fonts.googleapis.com/icon?family=Material+Icons"};
var custom = {rel: "stylesheet",type:"text/css", href: "/css/custom.css"};
var MUI = {rel: "stylesheet",type:"text/css", href: "/css/materialize.min.css"};
var Jquery = {rel: "text/javascript",type:"text/css", href: "/js/jquery-1.12.3.min.js"};
var metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1.0"};
var title = "Juns-kis Mantra";

DocHead.setTitle(title);
DocHead.addLink(Jquery);
DocHead.addMeta(metaInfo);
DocHead.addLink(linkInfo);
DocHead.addLink(MUI);
DocHead.addLink(custom);
