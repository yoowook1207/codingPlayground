import java.util.ArrayList;

public class A10_forEach {
    public static void main(String[] args) {

        // String[] animals = {"cat", "dog", "rat"};
        ArrayList<String> animals = new ArrayList<String>();
        animals.add("cat");
        animals.add("dog");
        animals.add("rat");

        for(String i : animals) {
            System.out.println(i);
        }
    }

}
