// A13_OOP.java
// A16_objectPassing.java
public class Car {

    String name;
    String make;
    String model;
    int year;
    String color;
    double price;

    Car(String name) {
        this.name = name;
    }

    Car(String make, String model, int year, String color, double price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    void drive() {
        System.out.println("You drive the " + this.model + ". Vroom!");
    }

    void brake() {
        System.out.println(this.model + " stops. Screeech!");
    }

    public String toString() {
        return make + "\n" + model + "\n" + color + "\n" + year;
    }

}
