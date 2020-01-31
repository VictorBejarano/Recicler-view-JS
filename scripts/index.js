var windowView = new WindowView();
$(document).ready(function(){
    //windowView = new WindowView($(document).width(),$(document).height(),[2,3]);
    windowView.setWidth = $(document).width();
    windowView.setHeigth = $(document).height();
});
var app = angular.module("myApp", ["ngRoute"]);
windowView.printData();
alert(windowView.getCenter)

