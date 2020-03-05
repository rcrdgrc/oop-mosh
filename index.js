//objects in js are key value pairs 
function createcCircle(radius) {
    return {
        radius,
        loaction: {
            x: 1,
            y: 1,
        },
        draw: function () {
            console.log('draw');
        }
    }
}
const circle = createcCircle(1);

// construction function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);