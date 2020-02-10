class ContainerView {
    constructor(idContainer) {
        this.idContainer = idContainer;
        this._heigth = $(idContainer).outerHeight();
        this._width = $(idContainer).outerWidth();
        this._center = [this._width / 2,this._height /2];
    }
    //Setters
    set setWidth (_width) {
        this._width = _width;
    }
    set setHeigth (_heigth) {
        this._heigth = _heigth;        
    }
    get getWidth () {
        return this._width;
    }
    get getHeigth () {
        return this._heigth;        
    }
    set setNumberView (numberView){
        if(numberView > 0){
            this.numberView = numberView;
        } else {
            alert('Invalid view number')
            console.error('Invalid view number');
        }        
    }
    get getNumberView (){
        return this.numberView;        
    }
    //Getters
    get getCenter(){        
        return  this._center;
    }
    get getCenterAbsolute(){
        this._center = [this._width / 2,this._height /2];
        return  this._center;
    }
    printData(number) {
        console.log("Height: " + this._heigth + " Width: "+ this._width + " Center: " + this.center)
    }
    loadView(folder, root){        
        for(var i=1;i<=this.numberView;i++){
            $(this.idContainer).append('<div id="viewN' + i + '"></div>');
            $('#viewN' + i)
                .load('./' + folder + '/' + root + i + '.html', function (response, status, xhr ) {
                    if (status == "error") {
                        alert("Exceed the number of views");
                    }
                }).attr("class","viewer");       
        }        
    }

}