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
    printData() {
        app.config(function($routeProvider) {
            $routeProvider
            .when("/banana", {
                templateUrl : "/Pages/page1.html"
            })
            .when("/tomato", {
                template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
            });
        });
    }

}