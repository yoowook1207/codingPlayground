public class A15_objectsArray {
    public static void main(String[] args) {

        // int[] numbers = new int[3];
        // char[] characters = new char[4];
        // String[] strings = new String[5];

        // Food[] refrigerator = new Food[3]; // array named 'refrigerator' can hold three Food items in the array
        Food food1 = new Food("pizza");
        Food food2 = new Food("hamburger");
        Food food3 = new Food("hotdog");

        Food[] refrigerator = {food1, food2, food3};
        // refrigerator[0] = food1;
        // refrigerator[1] = food2;
        // refrigerator[2] = food3;

        System.out.println(refrigerator[0].name);
    }
}
