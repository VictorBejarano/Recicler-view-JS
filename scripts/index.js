var windowView = new WindowView();
$(document).ready(function(){
    //windowView = new WindowView($(document).width(),$(document).height(),[2,3]);
    $('.menuContainer').load('./Pages/page1.html');
    windowView.setWidth = $(document).width();
    windowView.setHeigth = $(document).height();
});
var app = angular.module("myApp", ["ngRoute"]);
var number = 1;
windowView.printData(2);
function prueba(){
    // ng-include="'./Pages/page3.html'"
    // number = 2;
    // document.getElementById("viewDown").setAttribute("ng-include","'./Pages/page3.html'");
    // document.getElementById("viewDown").setAttribute("class","ng-scope");
    $(document).ready(function(){
        //windowView = new WindowView($(document).width(),$(document).height(),[2,3]);
        $('.menuContainer2').load('./Pages/page2.html');
    });
    
}

