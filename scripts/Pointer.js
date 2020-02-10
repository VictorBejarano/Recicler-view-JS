class Pointer {
    constructor (idContainer){
        this.idContainer = idContainer;
        this.colorPointer = '#555'
        this.counter = 0;
    }
    set setColorPointer(colorPointer){
        this.colorPointer = colorPointer;
    }
    drawRight(_x , _y , _w){
        $(this.idContainer).append('<div id="triangle-right' + this.counter + '"></div>');
        $('#triangle-right' + this.counter)
            .css({
                'position':'fixed',
                'left': _x,
                'top': _y,
                'width': '0',
                'height': '0',
                'border-top': _w + 'vw solid transparent',
                'border-left': (_w * 2) + 'vw solid ' + this.colorPointer,
                'border-bottom': _w + 'vw solid transparent'
            });
        this.counter++;
    }
    drawLeft(_x , _y , _w){
        $(this.idContainer).append('<div id="triangle-left' + this.counter + '"></div>');
        $('#triangle-left' + this.counter)
            .css({
                'position':'fixed',
                'left': _x,
                'top': _y,
                'width': '0',
                'height': '0',
                'border-top': _w + 'vw solid transparent',
                'border-right': (_w * 2) + 'vw solid ' + this.colorPointer,
                'border-bottom': _w + 'vw solid transparent'
            });
        this.counter++;
    }
}