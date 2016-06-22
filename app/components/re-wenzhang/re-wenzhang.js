var React = require('React');
require("./re-wenzhang.less")
var ReactGood = require("../re-good/re-good.js")
var Reactcomment = require("../re-comments/re-comments.js")
var ReactZhuan = React.createClass({
	getInitialState: function() {
    	return {"html":""}
  	},
  	componentDidMount: function() {
  		var that = this;
		 $.get(that.props.source, function(result) {
	      	that.setState({
	      		"html":result.html
	      	})
	      })
	},
	render: function() {
		 var ajaxjson= this.state.html.content;
		 var title = this.state.html.title;
		 var name = "我叫代小星";
		return (
			<div className = "ReactZhuan-box">
				<img src= "http://image.tianjimedia.com/uploadImages/2012/012/2YXG0J416V69.jpg" className = "ReactZhuan-box-pagetip"/>
				<h1 className="ReactZhuan-box-multiline2">{title}</h1>
				<div className = "ReactZhuan-box-meta">
					<img src='http://image.tianjimedia.com/uploadImages/2012/012/2YXG0J416V69.jpg' />
					<span>{name}</span>
					<span>两个月前</span>
				</div>
				<div  className = "ReactZhuan-box-text" dangerouslySetInnerHTML={{__html: ajaxjson}} />
				<div className = "ReactZhuan-box-target">
					<span>零售行业</span>
					<span>人物传记</span>
					<span>阅读</span>
				</div>
				<ReactGood />
				<Reactcomment />
			</div>
		)
	}
})

module.exports = ReactZhuan;