public class A32_methodChaining {
    public static void main(String[] args) {
        String name = "sung";

        name = name.concat(" code").toUpperCase().trim();

        System.out.println(name);
    }
}
