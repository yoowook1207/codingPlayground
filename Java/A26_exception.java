import java.util.InputMismatchException;
import java.util.Scanner;

public class A26_exception {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            //any code that considered dangerous, put in try block
            System.out.println("Enter a whole number to divide: ");
            int x = scanner.nextInt();
    
            System.out.println("Enter a whole number to be divided by: ");
            int y = scanner.nextInt();
    
            int z = x/y;
    
            System.out.println("result: " + z);
        }
        catch(ArithmeticException e) {
            System.out.println("You can't divide by zero!");
        }
        catch(InputMismatchException e) {
            System.out.println("Please enter a number!");
        }
        catch(Exception e) {
            System.out.println("Something went wrong");
        }
        finally {
            System.out.println("Good job");
            scanner.close();
        }

    }

}
