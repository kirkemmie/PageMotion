/*
function PageMotion(){
	var QPag;
	var Title = new Array();
	
	$('.PageMotion').each(function(i){
		
		QPag = i;
		
		$(this).attr('id', 'PageMotion'+i);
		Title[i] = $(this).attr('title');
		
	});

	if(QPag > 0){
		
		if(PageMotionProperties.bottom == true){
			$('body').append('<div class="PageMotion-Menu PageMotion-bottom"></div>');
		}else{
			$('body').append('<div class="PageMotion-Menu PageMotion-top"></div>');
		}
		
		
		
		for(j=0;j<=QPag;j++){
			
			if(j == 0){
				$('.PageMotion-Menu').append('<div class="PageMotion-Item Hover" id="PageMotion-Item'+j+'">'+Title[j]+'</div>');
				$('#PageMotion'+j).show();
			}else{
				$('.PageMotion-Menu').append('<div class="PageMotion-Item" id="PageMotion-Item'+j+'">'+Title[j]+'</div>');
			}
			
		}
		
		var P = 100/(QPag+1);

		$('.PageMotion-Item').css('width', P+'%');
		
	}
	
	$('.PageMotion-Item').each(function(q){
		
		$('#PageMotion-Item'+q).click(function(){
			
			$('.PageMotion-Item').removeClass('Hover');
			$(this).addClass('Hover');
			
			$('.PageMotion').hide();
			$('#PageMotion'+q).fadeIn(PageMotionProperties.speed);
			
		});
		
	});
}

$(document).ready(function(){
	
	PageMotionProperties = {
	
		bottom:true,
		speed:5000
		
	}
	
	PageMotion();
	
});
*/

(function($){

 	$.fn.extend({ 
 		
 		PageMotion: function() {
			
			var defaults = {
				speed:1000,
            };
			
			var options =  $.extend(defaults, options);
			
    		return this.each(function() {
				
				var o = options;

				var QPag;
				var Title = new Array();				
					
				QPag = i;
				
				$(this).attr('id', 'PageMotion'+i);
				Title[i] = $(this).attr('title');
				
			
				if(QPag > 0){
					
					if(o.bottom == true){
						$('body').append('<div class="PageMotion-Menu PageMotion-bottom"></div>');
					}else{
						$('body').append('<div class="PageMotion-Menu PageMotion-top"></div>');
					}					
					
					for(j=0;j<=QPag;j++){
						
						if(j == 0){
							$('.PageMotion-Menu').append('<div class="PageMotion-Item Hover" id="PageMotion-Item'+j+'">'+Title[j]+'</div>');
							$('#PageMotion'+j).show();
						}else{
							$('.PageMotion-Menu').append('<div class="PageMotion-Item" id="PageMotion-Item'+j+'">'+Title[j]+'</div>');
						}
						
					}
					
					var P = 100/(QPag+1);
			
					$('.PageMotion-Item').css('width', P+'%');
					
				}
					
				$('#PageMotion-Item'+i).click(function(){
					
					$('.PageMotion-Item').removeClass('Hover');
					$(this).addClass('Hover');
					
					$('.PageMotion').hide();
					$('#PageMotion'+q).fadeIn(speed);
					
				});
					

			
    		});
    	}
	});
	
	
})(jQuery);



$(document).ready(function() {
	$('.PageMotion').PageMotion({
		speed:5000,
		bottom:true,
	});
});

http://www.queness.com/post/112/a-really-simple-jquery-plugin-tutorial