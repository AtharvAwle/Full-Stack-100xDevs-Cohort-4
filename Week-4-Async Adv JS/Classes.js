class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }

   perimeter() {
        const perimeter = 2 * (this.width + this.height)
        return perimeter;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area)


// Inheritance in classes

class Circle {
   constructor(radius, color) {
       this.radius = radius;  
       this.color = color;
   }

   area() {
      const area = this.radius * this.radius * Math.PI;
       return area;
   }
   
   perimeter() {
        const perimeter = 2 * 3.14 * (this.radius)
        return perimeter;
   }
   paint() {
			console.log(`Painting with color ${this.color}`);
   }

}

const circle = new Circle(2, "red")
const area2 = circle.area();
console.log(area)
