var self = require('sdk/self');
var buttons = require('sdk/ui/button/action'); 
var tabs = require("sdk/tabs");
var fileIO = require("sdk/io/file");
var system = require("sdk/system");

 var button = buttons.ActionButton({//定义显示在工具栏的图标
	id: "mozilla-link",label: "jingdong",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	 },
	 onClick: handleClick
}); 

function handleClick(state) {//当发现点击事件时，显示配置面板
	
}

tabs.on('load',function(tab){		
	worker = tabs.activeTab.attach({
		contentScriptFile:[self.data.url('getPrice.js'),self.data.url('jquery.js')]
	});
	worker.port.emit("getPrice");
	worker.port.on('returnPrice', function(price){
			console.log("the price is ", price);
	});
});