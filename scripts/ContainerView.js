class ContainerView {
/*    constructor(_width,_height) {
        this._width = _width;
        this._height = _height;
        this._center = [this._width / 2,this._height /2];
    }*/
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
    get getNumberView (){
        return this.numberView;        
    }
    //Getters
    get getCenter(){
        this._center = [this._width / 2,this._height /2];
        return  this._center;
    }
    printData(number) {
        console.log("Height: " + this._heigth + " Width: "+ this._width + " Center: " + this.center)
    }
    loadView(idView, folder, root){        
        for(var i=1;i<=this.numberView;i++){
            $(idView).append('<div id="viewN' + i + '"></div>');
            $('#viewN' + i)
                .load('./' + folder + '/' + root + i + '.html', function (response, status, xhr ) {
                    if (status == "error") {
                        alert("Exceed the number of views");
                    }
                }).attr("class","viewer");       
        }        
    }

}