$('.uis-form-icon').on('click', function(){
	$(this).addClass('uis-active');
	
	$(this).siblings('input').addClass('uis-active');
	$(this).siblings('input').focus();
	
	$(this).siblings('input').focusout(function(e){
		$(this).removeClass('uis-active');
		$(this).siblings('i').removeClass('uis-active');
		$(this).val('')
	})
})
