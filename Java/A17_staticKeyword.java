public class A17_staticKeyword {
    public static void main(String[] args) {
        //static = modifier. A single copy of a variable/method is created and shared.
        new Friend("SpongeBob");
        new Friend("Patrick");
        new Friend("Mike");
        new Friend("Jack");
        Friend.displayFriends();
    }
}
