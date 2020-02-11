class ContainerView {
    constructor(idContainer) {
        this.idContainer = idContainer;
        this._heigth = $(idContainer).outerHeight();
        this._width = $(idContainer).outerWidth();
        this._center;
        this._y = $(idContainer).position().top;
        this._x = $(idContainer).position().left;
        this._center = [(this._width / 2),(this._heigth /2)];
        this._centerPos = [(this._x + this._center[0]),(this._y + this._center[1])];
        this.counter = 1;
    }
    //Setters
    set setWidth (_width) {
        this._width = _width;
    }
    set setHeigth (_heigth) {
        this._heigth = _heigth;        
    }
    set setNumberView (numberView){
        if(numberView > 0){
            this.numberView = numberView;
        } else {
            alert('Invalid view number')
            console.error('Invalid view number');
        }        
    }
    //Getters
    get getWidth () {
        return this._width;
    }
    get getHeigth () {
        return this._heigth;        
    }
    get getCenter(){  
        return  this._center;
    }
    get getCenterPosition(){
        return  this._centerPos;
    }
    
    printData(number) {
        console.log("Height: " + this._heigth + " Width: "+ this._width + " Center: " + this._center)
    }
    loadView(folder, root){        
        $(this.idContainer).append('<div id="viewN' + this.counter + '"></div>');
        $('#viewN' + this.counter)
            .load('./' + folder + '/' + root + this.counter + '.html', function (response, status, xhr ) {
                if (status == "error") {
                     alert("Exceed the number of views");
                }
            })
            .attr("class","viewer")
            .css({
                'height': $(this.idContainer).height() + 'px',
                'width': $(this.idContainer).width() + 'px'
            });
        this.counter++;           
    }
    loadNext(folder, root){
        if(this.counter <= this.numberView){
            var i = this.counter;
            var timeAnim = 1000;
            var tempPosition = $('#viewN' + (i- 1)).position().top;
            $(this.idContainer).append('<div id="viewN' + i + '"></div>');
            $('#viewN' + (i- 1))
                .animate({
                    top: -($('#viewN' + (i - 1)).height()) + 'px'
                },timeAnim,
                function() {
                    $('#viewN' + (i- 1)).remove();
                });
            $('#viewN' + i)
                    .load('./' + folder + '/' + root + i+ '.html', function (response, status, xhr ) {
                        if (status == "error") {
                            alert("Exceed the number of views");
                        }
                    })
                    .attr("class","viewer")
                    .css({
                        'height': $(this.idContainer).height() + 'px',
                        'width': $(this.idContainer).width() + 'px',
                        'top' : $(this.idContainer).width() + 'px'
                    })
                    .animate({
                        top: tempPosition + 'px'
                    },timeAnim);
            this.counter++;
        }
 
        
    }

}