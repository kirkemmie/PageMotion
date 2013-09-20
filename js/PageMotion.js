$(document).ready(function(){
	
	var QPag;
	var Title = new Array();
	
	$('.PageMotion').each(function(i){
		
		QPag = i;
		
		$(this).attr('id', 'PageMotion'+i);
		Title[i] = $(this).attr('title');
		
	});

	if(QPag > 0){
		
		$('body').append('<div class="PageMotion-Menu"></div>');
		
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
			$('#PageMotion'+q).fadeIn();
			
		});
		
	});
	
});