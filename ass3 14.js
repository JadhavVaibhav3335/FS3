interface Circle {
    radius: number;
    type: 'circle'; 
}

// Define the Rectangle type
interface Rectangle {
    width: number;
    height: number;
    type: 'rectangle'; 
}

function calculateCircleArea(circle: Circle): number {
    return Math.PI * circle.radius * circle.radius;
}

function calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
}

function printShapeInfo(shape: Circle | Rectangle): void {
    if (shape.type === 'circle') {
        const area = calculateCircleArea(shape);
        console.log(`Circle Area: ${area.toFixed(2)}`);
    } else if (shape.type === 'rectangle') {
        // The shape is a Rectangle, so use the calculateRectangleArea function
        const area = calculateRectangleArea(shape);
        console.log(`Rectangle Area: ${area}`);
    } else {
        console.error('Unknown shape type');
    }
}

// Example usage:
const circle: Circle = {
    radius: 5,
    type: 'circle'
};

const rectangle: Rectangle = {
    width: 4,
    height: 6,
    type: 'rectangle'
};

printShapeInfo(circle); // Outputs the area of the circle
printShapeInfo(rectangle); // Outputs the area of the rectangle