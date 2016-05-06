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
		}
		
		self.port.emit("returnPrice", price);
});


