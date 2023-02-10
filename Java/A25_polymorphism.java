import java.util.Scanner;

public class A25_polymorphism {
    public static void main(String[] args) {
        Plane car = new Plane();
        Bicycle bicycle = new Bicycle();
        Boat boat = new Boat();

        Vehicle[] racers = {car, bicycle, boat}; // using polymorphism to store different type data into the array
    
        for(Vehicle x : racers) {
            x.go();
        }

        Scanner scanner = new Scanner(System.in);
        Vehicle vehicle;
        System.out.println("What vehicle do you want?");
        System.out.println("Plane=1 Bicycle=2 Boat=3");
        int choice = scanner.nextInt();

        if(choice==1) {
            vehicle = new Plane();
            vehicle.go();
        }
        else if(choice==2) {
            vehicle = new Bicycle();
            vehicle.go();
        }
        else if(choice==3) {
            vehicle = new Boat();
            vehicle.go();
        }
        else {
            System.out.println("That choice is invalid");
            new Vehicle().go();
        }
        scanner.close();
    }
}

class Vehicle {
    void go() {
        System.out.println("What is your favorite vehicle?");
    }
}

class Plane extends Vehicle {
    @Override
    void go() {
        System.out.println("*Plane: Vroom!*");
    }
}

class Bicycle extends Vehicle {
    @Override
    void go() {
        System.out.println("*Bicycle: Tiring!*");
    }
}

class Boat extends Vehicle {
    @Override
    void go() {
        System.out.println("*Boat: Vroom!*");
    }
}