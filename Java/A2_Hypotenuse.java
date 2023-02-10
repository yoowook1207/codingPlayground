import java.util.Scanner;

public class A2_Hypotenuse {
    public static void main(String[] args) {
        double x = 3.14;
        double y = -10;

        double z = Math.max(x, y);
        double absY = Math.abs(y);
        double sqrtX = Math.sqrt(x);
        double roundX = Math.round(x); // ceil (round up), floor (round down)

        System.out.println(z); // 3.14
        System.out.println(absY); // 10.0
        System.out.println(sqrtX); // 1.7720..
        System.out.println(roundX); // 3.0

        double a;
        double b;
        double c;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter side a: ");
        a = scanner.nextDouble();
        System.out.println("Enter side b: ");
        b = scanner.nextDouble();

        c = Math.sqrt((a*a)+(b*b));

        System.out.println("The hypotenuse is : " + c);
        scanner.close();
    }
}
