class Dog{  
    int age;  
    String name; 
    String breed; 
    Dog(int i,String n){  
    age = i;  
    name = n;  
    }
    Dog(int i, String n, String a) {
        age = i;
        name = n;
        breed = a;
    }
    void display(){System.out.println(age+" "+name+" "+breed);}  
   
    public static void main(String args[]){  
    Dog d1 = new Dog(3,"Joy");  
    Dog d2 = new Dog(4,"Boss", "Maltipoo");   
    d1.display();  
    d2.display();  
   }  
}  