var containerView = new ContainerView();
$(document).ready(function(){
    containerView.setWidth = $("#containerView").width();
    containerView.setHeigth = $("#containerView").height();
    containerView.printData(2);
    
    var temp = 100 * $("#containerView").height() / $(document).height();
    console.log(temp)
    containerView.setNumberView = 12
    // $("#containerView").position().top
    $('.triangle-right')
        .css({
            'position':'fixed',
            'left': '2vw',
            'top': (temp) + 'vh',
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
var app = angular.module("myApp", ["ngRoute"]);
var number = 1;

containerView.printData(2);
function prueba(){
    $(document).ready(function(){
        containerView.loadView('#containerView','Pages','page');
    });
}
function prueba2() {
    $(document).ready(function(){
        console.log($("#containerView").position())
    });
}

