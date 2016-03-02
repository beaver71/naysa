

(function($){

    $.fn.imageOverlay = function(){
        return this.each(function(){
            
            var $this = $(this);
            
            $this.hover(function(){
                    var width = $this.find("img").width();
                    var height = $this.find("img").height();
                    var offsetTop = $this.find('img').offset.top;
                    var offsetLeft = $this.find('img').offset.left;
                
                    $this
                        .find('.overlay')
                        .css({
                               width: width,
                               height: height,
                               backgroundColor: 'rgba(0,0,0,0.5)',
                               position: 'absolute',
                               top: offsetTop,
                               left: offsetLeft    
                             });
                
                    console.log(width);
                }, function(){
                    $this
                        .find('.overlay')
                        .css({
                               width: 0,
                               height: 0,
                               backgroundColor: 'rgba(0,0,0,0)'    
                             });
                    console.log('out');
            });
            
        });
    }

}(jQuery));


(function($){
    
    $('.content-expertise-bollybabes, .content-expertise-games, .content-expertise-astro ,.content-expertise-app').imageOverlay();
    
}(jQuery));