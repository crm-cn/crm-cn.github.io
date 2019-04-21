var item = document.getElementsByTagName("a");
var filelist = new Array(".html",".htm",".txt");
for(var i=0;i<item.length;i++){
	item[i].index = i;
	item[i].addEventListener("click",function(n){
		var itemhref = item[this.index].getAttribute("href");
		if(itemhref!=""&&itemhref!=null){
			for(var g=0;g<filelist.length;g++){
				if(itemhref.endsWith(filelist[g])){
					var fromopen = document.createElement("form");
					fromopen.setAttribute("method","post");
					fromopen.setAttribute("action",itemhref);
					fromopen.setAttribute("style","width:0px; height:0px; overflow:hidden;");
					document.body.appendChild(fromopen);
					fromopen.submit();
					fromopen.parentNode.removeChild(fromopen);
					n.preventDefault();
					break;
				}
			}
		}
	}, false);
}