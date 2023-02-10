class Animal {
    void speak() {
         System.out.println("The animal speaks");
    }
}

class Horse extends Animal {
    void speak() {
        System.out.println("The horse speaks");
    }
}

public class A19_methodOverriding {
    public static void main(String[] args) {
        Horse horse = new Horse();
        new Animal().speak();
        horse.speak();
    }
}
