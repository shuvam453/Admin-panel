jQuery(document).ready(function($){


    // $(".menu-item-has-children > a").click(function(){
    //     $(".sub-menu").toggleSlide();
    //     $(".sub-menu").toggleClass("open");
    //     $(".sub-menu").addClass("active");
    // });


    $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
    // $('.navbar-nav li .clickD').click(function(e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //     if ($this.next().hasClass('show'))
    //        {
    //            $this.next().removeClass('show');
    //            $this.removeClass('toggled');
    //        } 
    //        else 
    //        {
    //            $this.parent().parent().find('.sub-menu').removeClass('show');
    //            $this.parent().parent().find('.toggled').removeClass('toggled');
    //            $this.next().toggleClass('show');
    //            $this.toggleClass('toggled');
    //        }
    // });
   
    // $(window).on('resize', function(){
    //     if ($(this).width() < 1025) {
    //         $('html').click(function(){
    //             $('.navbar-nav li .clickD').removeClass('toggled');
    //             $('.toggled').removeClass('toggled');
    //             $('.sub-menu').removeClass('show');
    //         });
    //         $(document).click(function(){
    //             $('.navbar-nav li .clickD').removeClass('toggled');
    //             $('.toggled').removeClass('toggled');
    //             $('.sub-menu').removeClass('show');
    //         });
    //         $('.navbar-nav').click(function(e){
    //            e.stopPropagation();
    //         });
    //     }
    // });


    $(".menu-item-has-children>a").click(function(){
            $('.menu-item-has-children').toggleClass('active');
        	$(".sub-menu").slideToggle();
        });


    $(".userPop").click(function(){
        $('.user_popUp').slideToggle().toggleClass('active');

    });
})