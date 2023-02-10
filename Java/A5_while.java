import java.util.Scanner;

public class A5_while {
    public static void main( String[] args) {
        // while loop = executes a block of code as long as a it's condition remains true.
        Scanner scanner = new Scanner(System.in);
        String name = "";

        do{
            System.out.println("Enter your name: ");
            name = scanner.nextLine();
        } while(name.isBlank());

        // do loop = executes a block of code once, and check the condition.

        System.out.println("Hello " + name);
        scanner.close();
    }
}
