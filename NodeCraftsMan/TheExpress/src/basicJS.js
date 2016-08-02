/**
 * Use this file to type in the basic code in the craftsman book that test the work.
 * Created by user on 8/2/16.
 */

/**
 * This is the demo of the function prototype thing OOC programing in JS, different to c++.
 * */

var Car = function () {
    
};

Car.prototype.honk = function () {
    console.log('honk honk.');
};

var myCar1 = new Car();
var myCar2 = new Car();

myCar1.honk();
myCar2.honk();
/* the object's function can be changed at anytime, even runtime in js*/
myCar1.honk = function () {
    console.log('this is car2');
};

myCar1.honk();
myCar2.honk();

/* A better way to trade off the prototype keyword in increasing the mem slightly*/
/* Also this is the inheritance */
var vehicle = {};
vehicle.drive = function () {
 console.log('vroom....');
};

var car = Object.create(vehicle);
car.honk = function () {
console.log('honk honk');
};

var myVehicle = Object.create(vehicle);
var myCar11 = Object.create(car);
var myCar22 = Object.create(car);

myCar11.honk();
myCar22.honk();

myVehicle.drive();
myCar11.drive();
myCar22.drive();


