var containerView = new ContainerView();
$(document).ready(function(){
    containerView.setWidth = $("#containerView").width();
    containerView.setHeigth = $("#containerView").height();
    containerView.setNumberView = 12
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
        console.log($("#viewN2").position())
    });
}

