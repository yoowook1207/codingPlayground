// Encapsulation = can be accessed to private attributes of a class through methods (getters & setters)

public class A23_encapsulation {
    public static void main(String[] args) {

        Car1 myCar = new Car1("Chevy", "Camaro", 2021);
        Car1 myCar2 = new Car1("Ford", "Mustang", 2023);


        System.out.println(myCar.getMake());
        System.out.println(myCar.getYear());
        myCar.setYear(2022);
        System.out.println(myCar.getYear());

        // myCar2 = myCar; // share same memory address
        System.out.println("-------------"); 
        System.out.println(myCar2.getMake());
        System.out.println(myCar2.getModel());
        System.out.println(myCar2.getYear());  

        myCar2.copy(myCar);
        System.out.println("-------------"); 
        System.out.println(myCar.getMake());
        System.out.println(myCar.getModel());
        System.out.println(myCar.getYear()); 

        System.out.println("-------------"); 
        System.out.println(myCar2.getMake());
        System.out.println(myCar2.getModel());
        System.out.println(myCar2.getYear());  

        Car1 myCar3 = new Car1(myCar);
        System.out.println("-------------"); 
        System.out.println(myCar3.getMake());
        System.out.println(myCar3.getModel());
        System.out.println(myCar3.getYear());  
    }
}

class Car1 {

    private String make;
    private String model;
    private int year;

    Car1(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Car1(Car1 x) {
        this.copy(x);
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public void setMake(String newMake) {
        this.make = newMake;
    }
    
    public void setModel(String newModel) {
        this.model = newModel;
    }

    public void setYear(int newYear) {
        this.year = newYear;
    }

    public void copy(Car1 x) {
        this.setMake(x.getMake());
        this.setModel(x.getModel());
        this.setYear(x.getYear());
    }
}