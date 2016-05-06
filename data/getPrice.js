//监听从主程序发送的getPrice信号，一旦收到该信号，则分析页面，获取价格，返回给主程序
 self.port.on("getPrice", function() {		
		console.log('getPrice.js is running!');
		
		var price = "not find";
		var url = window.location.href;
		if(url.indexOf("item.jd") != -1){//判断是否为京东商品
			var priceTag = document.querySelector('#summary-price strong');
			if(priceTag){
				price = priceTag.textContent.replace(/￥/, "");
			}
		}else if(url.indexOf("product.suning") != -1){//判断是否为苏宁商品
			var priceTag = document.querySelector('#promotionPrice');
			if(priceTag){
				price = priceTag.textContent.replace(/¥/, "");
			}
		}else if(url.indexOf("www.miyabaobe") != -1){//判断是否为蜜芽商品
			var priceTag = document.querySelector('#item_price');
			if(priceTag){
				price = priceTag.textContent;
			}
		}else if(url.indexOf("item.yunhou") != -1){//判断是否为云猴商品
			var priceTag = document.querySelector('#jScarePrice');
			if(priceTag){
				price = priceTag.textContent;
			}
		}else if(url.indexOf("http://www.kaola.com/product") != -1){//判断是否为考拉商品
			var priceTag = document.querySelector('#js_currentPrice span');
			if(priceTag){
				price = priceTag.textContent;
			}
		}
		
		self.port.emit("returnPrice", price);//返回抓到的价格信息
});


