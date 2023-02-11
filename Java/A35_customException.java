import java.util.Scanner;

public class A35_customException {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int age = scan.nextInt();

        try {
            checkAge(age);

        } catch (Exception e) {
            System.out.println("A problem occurred: " + e);
        }
        scan.close();
    }

    static void checkAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("\n" + "You are not an adult! You must be 18+");
        } else {
            System.out.println("signed up!");
            ;
        }
    }
}

class AgeException extends Exception {
    AgeException(String message) {
        super(message);
    }
}