var React = require('react');
var ReactDOM = require('react-dom');

var ReactTopbar = require('./components/re-topbar/re-topbar.jsx');
var Index_bg = require('./other/index_bg/index_bg.jsx');
var Reactariticlist = require("./components/re-articlist/re-articlist.jsx");
var Reactariticlist1 = require("./components/re-articlist1/re-articlist1.jsx");
var Indexfooter = require("./other/index_footer/index_footer.jsx");

require("./iframe/public/reset.css")

ReactDOM.render(
 <div class="index">
 	<ReactTopbar />
 	<Index_bg />
 	<Reactariticlist />
 	<Reactariticlist1 />
 	<Indexfooter />
 </div>,
  document.querySelector('#zh-react')
);
