
$(document).ready(function(){
    $(window).scroll(function(){
        var w = $(this).scrollTop()
        if ( w > 100) {
            $("#mainNav").css({
                'background-color':'white',
                
                
            });
            
        } else {
            $("#mainNav").css({
                'background-color':
                'rgba(34,34,34,.05)',
               
                
            });
        }
    }); 
});
    