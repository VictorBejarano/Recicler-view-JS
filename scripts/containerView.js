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
    //Getters
    get getCenter(){
        this._center = [this._width / 2,this._height /2];
        return  this._center;
    }
    printData(number) {
        console.log("Height: " + this._heigth + " Width: "+ this._width + " Center: " + this.center)
    }

}