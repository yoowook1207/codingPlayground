public class A7_StringMethods {
    public static void main(String[] args) {
        String name = "Bro";

        // boolean result = name.equalsIgnoreCase("bro"); = true
        // int result = name.length(); = 3
        // char result = name.charAt(1); = r
        // int result = name.indexOf("B"); = 0
        // boolean result = name.isEmpty(); = false
        // String result = name.toUpperCase(); = BRO
        // String result = name.toLowerCase(); = bro
        // String result = name.trim() = trim all empty spaces
        String result = name.replace('o', 'e');

        System.out.println(result);
    }
}
