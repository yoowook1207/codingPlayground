public class A36_innerClass {
    public static void main(String[] args) {

        /*
         * inner class = A class inside of another class.
         * useful if a class should be limited in scope.
         * usually private, but not necessary
         * helps group classes that belong together
         * extremely useful for listeners for specific events
         * precursor for anonymous inner classes
         */

        Outside out = new Outside();
        Outside.Inside in = out.new Inside();
        in.helloWorld();

        Greeting greeting = new Greeting() {
            public void Welcome() {
                System.out.println("Wassap Sung!");
            }
        };

        Greeting greeting2 = new Greeting();

        greeting.Welcome();
        greeting2.Welcome();
    }

}

class Outside {

    String x = "Hello";

    class Inside {
        String y = "World!";

        void helloWorld() {
            System.out.println(x + " " + y);

        }
    }
}

class Greeting {
    void Welcome() {
        System.out.println("Hello Sung!");
    }
}
