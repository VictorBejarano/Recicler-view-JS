class WindowView {
    constructor(_width,_height) {
        this._width = _width;
        this._height = _height;
        this._center = [this._width / 2,this._height /2];
    }

    printData() {
        console.log(this._center)
    }

}