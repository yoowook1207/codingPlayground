class Employee{  
    float salary=40000;  
   }  
   class Programmer extends Employee{  
    int bonus=10000;  
    public static void main(String args[]){  
      Programmer p=new Programmer();  
      System.out.println("Programmer salary is:"+p.salary);  
      System.out.println("Bonus of Programmer is:"+p.bonus);  
   }  
   } 

// class Animal{  
// void eat(){System.out.println("eating...");}  
// }  
// class Dog extends Animal{  //Level 1 - Inheritance
// void bark(){System.out.println("barking...");}  
// }  
// class BabyDog extends Dog{  //Level 2 - Inheritance
// void weep(){System.out.println("weeping...");}  
// }  
// class TestInheritance2{  
// public static void main(String args[]){  
// BabyDog d=new BabyDog();  
// d.weep();  
// d.bark();  
// d.eat();  
// }} 