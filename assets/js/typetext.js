var content = "Hi, I'm Genesis Ivan Aquino."
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
$(ele).hide().appendTo('.intro-text').each(function (i) {
    $(this).delay(100 * i)
    .queue(function(next) {
    	if (i+1 === content.length) {
	    	sub_text()
	    }
          next();
    })
    .css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
function sub_text(){
	var content_2 = "A Web and Software Developer."
	var ele_2 = '<span>' + content_2.split('').join('</span><span>') + '</span>';
	$(ele_2).hide().appendTo('.basic-text').each(function (i) {
	    $(this).delay(100 * i).css({
	        display: 'inline',
	        opacity: 0
	    }).animate({
	        opacity: 1
	    }, 100);
	});
}