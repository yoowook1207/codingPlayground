public class A13_OOP {
    public static void main(String[] args) {
        Car myCar = new Car("Chevrolet", "Corvette", 2023, "Blue", 50000.00);
        Car myCar2 = new Car("Hyundai", "SantaFe", 2021, "Grey", 40000.00);

        System.out.println(myCar.model);
        System.out.println(myCar2.model);
        System.out.println("----------");
        System.out.println(myCar.toString());
        System.out.println("----------");
        myCar.drive();
        myCar2.brake();
    }
}

