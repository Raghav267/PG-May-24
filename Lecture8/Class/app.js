class Car {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


    // Getter and Setter Methods amd Static Method
    get getter() {
        return this.price;
    }

    set setter(newPrice) {
        if (newPrice < 0) {
            this.price = 0;

        }
        else {
            this.price = newPrice;
        }
    }
}

const abc = new Car("XYZ", 100);
// console.log(abc);
// console.log(abc.getter);
// abc.setter = -50;
// console.log(abc.getter)


class Racing extends Car {
    constructor(name, price, topspeed, color) {
        super(name, price);
        this.topspeed = topspeed;
        this.color = color;
    }

    get getColor() {
        return this.color;
    }


}

const r1 = new Racing("QWERTY", 350, 80, "Black");
console.log(r1);
console.log(r1.getter);
