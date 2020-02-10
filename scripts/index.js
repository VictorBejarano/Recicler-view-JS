
$(document).ready(function(){
    var containerView = new ContainerView("#containerView");
    containerView.setWidth = $("#containerView").outerWidth();
    containerView.setHeigth = $("#containerView").outerHeight();
    containerView.printData(2);
    

    console.log()
    containerView.setNumberView = 12
    // $("#containerView").position().top
    $('.triangle-right')
        .css({
            'position':'fixed',
            'left': '2vw',
            'top': (containerView.getHeigth + $("#containerView").position().top) + 'px',
            'width': '0',
            'height': '0',
            'border-top': '2vw solid transparent',
            'border-left': '4vw solid #555',
            'border-bottom': '2vw solid transparent'
        });

    $('.triangle-left')
        .css({
            'position':'fixed',
            'left': '2vw',
            'top': '0px',
            'width': '0',
            'height': '0',
            'border-top': '2vw solid transparent',
            'border-right': '4vw solid #555',
            'border-bottom': '2vw solid transparent'
        });        
});
// var app = angular.module("myApp", ["ngRoute"]);
// var number = 1;

// containerView.printData(2);
// function prueba(){
//     $(document).ready(function(){
//         containerView.loadView('#containerView','Pages','page');
//     });
// }
// function prueba2() {
//     $(document).ready(function(){
//         console.log($("#containerView").position())
//     });
// }

