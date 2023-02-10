// interface = similar to inheritance, but specifies what a class must do.
// classes can apply more than one interface, inheritance is limited to 1 super class

public class A24_interface {
    public static void main(String[] args) {
        Rabbit rabbit = new Rabbit();
        rabbit.flee();
        Hawk hawk = new Hawk();
        hawk.hunt();
    }
}

class Rabbit implements Prey {
    @Override
    public void flee() {
        System.out.println("The rabbit is fleeing");
    }
}

class Hawk implements Predator {

    @Override
    public void hunt() {
        System.out.println("The hawk is hunting");
    }

}

class Fish implements Prey, Predator{

    String name = "Fish1";

    @Override
    public void hunt() {
        System.out.println("The fish is hunting");
        
    }

    @Override
    public void flee() {
        System.out.println("The fish is fleeing");        
    }

}

interface Prey {
    void flee();
}

interface Predator {
    void hunt();
}