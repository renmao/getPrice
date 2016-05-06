 self.port.on("getPrice", function() {		
		console.log('getPrice.js is running!');
		
		var price = "not find";
		var url = window.location.href;
		if(url.indexOf("item.jd") != -1){
			var priceTag = document.querySelector('#summary-price strong');
			if(priceTag){
				price = priceTag.textContent.replace(/￥/, "");
			}
		}else if(url.indexOf("product.suning") != -1){
			var priceTag = document.querySelector('#promotionPrice');
			if(priceTag){
				price = priceTag.textContent.replace(/¥/, "");
			}
		}else if(url.indexOf("www.miyabaobe") != -1){
			var priceTag = document.querySelector('#item_price');
			if(priceTag){
				price = priceTag.textContent;
			}
		}else if(url.indexOf("item.yunhou") != -1){
			var priceTag = document.querySelector('#jScarePrice');
			if(priceTag){
				price = priceTag.textContent;
			}
		}else if(url.indexOf("http://www.kaola.com/product") != -1){
			var priceTag = document.querySelector('#js_currentPrice span');
			if(priceTag){
				price = priceTag.textContent;
			}
		}
		
		self.port.emit("returnPrice", price);
});


