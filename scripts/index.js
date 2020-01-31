var windowView = new WindowView();
$(document).ready(function(){
    //windowView = new WindowView($(document).width(),$(document).height(),[2,3]);
    windowView.setWidth = $(document).width();
    windowView.setHeigth = $(document).height();
});
var app = angular.module("myApp", ["ngRoute"]);
var number = 2;

windowView.printData(number);

function prueba(){
    console.log("funciona")
    
    
}
prueba();
