class WindowView {
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
        app.config(function($routeProvider) {
            for (var i = 1; i <= number; i++) {
                $routeProvider
                .when("/banana" + i, {
                    templateUrl : "/Pages/page" + i +".html"
                });
            };
            
        });
    }

}