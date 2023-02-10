import java.util.ArrayList;

public class A9_ArrayList {
    public static void main(String[] args) {
        // ArrayList = a resizable array. Elements can be added and removed after compilation phase.
        //             Store reference data types

        ArrayList<String> food = new ArrayList<String>();

        food.add("pizza");
        food.add("hamburger");
        food.add("hotdog");

        food.set(0, "sushi");
        // food.clear(); // empty out the ArrayList

        for(int i=0; i<food.size(); i++) {
            System.out.println(food.get(i));
        }
    }

}
