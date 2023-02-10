public class A11_methods {
    public static void main(String[] args) {
        // method = a block of code that is executed whenever it is called upon
        hello("Sung", 29);

        int a = 2;
        int b = 3;
        int c = 4;
        System.out.println(add(a, b));
        System.out.println(add(a, b, c));
        System.out.printf("%d This is a format string", 123);
    }

    static void hello(String name, int age) {
        System.out.println("Hello " + name + ". You are " + age + " years old!");
    }

    static int add(int x, int y) {
        return x + y;
    }

    // overloaded method
    static int add(int x, int y, int z) {
        return x + y + z;
    }
}
