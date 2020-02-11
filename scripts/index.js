
$(document).ready(function(){
    var containerView = new ContainerView("#containerView");
    var pointer = new Pointer("#containerView");
    var unitVW2PX = $(document).width() / 100;
    containerView.setNumberView = 12;
    containerView.printData(2);
    pointer.setColorPointer = 'yellow'
    pointer.drawRight(
            2 + 'vw', 
            (containerView.getCenterPosition[1] - unitVW2PX)+ 'px', 
            2
        );
    pointer.drawLeft(
            94 + 'vw', 
            (containerView.getCenterPosition[1] - unitVW2PX)+ 'px', 
            2
        );
    containerView.loadView("Pages","page");
    
    $("#buttonP").click(function(){
        containerView.loadPrevious("Pages","page");
    });

    $("#buttonN").click(function(){
        containerView.loadNext("Pages","page");
    });
    
    console.log(containerView.getCenterPosition[1])
    containerView.printData(2);      
});

