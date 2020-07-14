class Animal{
    constructor(name){
        this.name = name
    }
    
    eat(){
        console.log(this.name + ' eats')
    }
    sounds(){
        console.log(sounds)
    }
}
class Dog extends Animal{
    constructor(name){
        super(name)
        //this.dog = dog
    }
    sounds(){
        console.log('Dog barks')
    }
}
// var dog = new Dog('Rax', 'Dog')
// dog.eat()
// dog.sounds()

class Cat extends Animal{
    constructor(name){
        super(name)
        //this.cat = cat
    }
    sounds(){
        console.log('Cat meows')
    }
}
// var cat = new Cat('Stormy', 'Cat')
// cat.eat()
// cat.sounds()

let adoptedAnimals = [];

class Home {
    adoptPet(pet){
        adoptedAnimals.push(pet);
    }

    makeAllSounds (){
        for(var i = 0; i < adoptedAnimals.length; i++){
            adoptedAnimals[i].sounds();
        }
    }
}
var home = new Home();
var dog1 = new Dog('Dog');
var dog2 = new Dog();
var cat = new Cat();


home.makeAllSounds();// this doesn't give/return any result/data

home.adoptPet(dog1);
home.makeAllSounds();


home.adoptPet(cat);
home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows

home.adoptPet(dog2);
//home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows
//Dog barks


