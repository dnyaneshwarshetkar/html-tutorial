class Animal {
    static className = "This is Animal Class";
    static noOfInstances = 0;
    #hairColor;
    color;
    height;
    weight;
    noOfLegs;
    constructor(color,height,weight,noOfLegs,hairColor){
        this.color = color;
        this.height = height;
        this.weight = weight;
        this.noOfLegs =  noOfLegs;
        this.#hairColor = hairColor;
        Animal.noOfInstances  += 1;
    }

    eats(){

    }
    sleep(){
        console.log("Animal is sleeping");
    }
    running(){

    }

    set hairColor(hairColor){
        console.log("Setter");
        this.#hairColor = hairColor;
    }

    get hairColor(){
        console.log("Getter");
        return this.#hairColor;
    }
}

let myDog = new Animal("red", "1ft", 10,4, "yellow");
myDog.hairColor = "pink";
console.log(myDog.hairColor);


class Dog extends Animal {
    tailColor;

    constructor(color,height,weight,noOfLegs,hairColor, tailColor){
        super(color,height,weight,noOfLegs,hairColor);
        this.tailColor = tailColor;
    }

    barking(){

    }

    // sleep function overrided
    /*sleep(){
        console.log("Dog is sleeping");
    }*/
}

class Cat extends Animal {

}



//myDog.eats();

 let yourDog = new Dog("black","2ft",25,4,"black","white");

 yourDog.color;
 yourDog.barking();

 console.log(Animal.noOfInstances);