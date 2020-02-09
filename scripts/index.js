var containerView = new ContainerView();
$(document).ready(function(){
    //windowView = new WindowView($(document).width(),$(document).height(),[2,3]);
    $('.menuContainer').load('./Pages/page1.html');
    containerView.setWidth = $("#containerView").width();
    containerView.setHeigth = $("#containerView").height();
});
var app = angular.module("myApp", ["ngRoute"]);
var number = 1;
containerView.printData(2);
function prueba(){

    $(document).ready(function(){
        for(var i=1;i<=4;i++){
            $('#containerView').append('<div class="viewer" id="viewN' + i + '"></div>');

            $('#viewN' + i)
                .load('./Pages/page' + i + '.html', function (response, status, xhr ) {
                    if (status == "error") {
                        // console.clear(); 
                        console.log("Helo")
                    }
                });
        }
    });
    
}

