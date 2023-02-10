public class A16_objectPassing {
    public static void main(String[] args) {
        Garage garage =new Garage();
    
        Car car = new Car("BMW");

        garage.park(car);
        }
}
