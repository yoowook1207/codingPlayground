class Employee {
    int salary = 40000;

    void shout() {
        System.out.println("I wanna quit!");
    }
}

class Programmer extends Employee {
    int bonus = 10000;

    int totalSalary = this.bonus + this.salary;

    public static void main(String args[]) {
        Programmer p = new Programmer();

        System.out.println("Programmer total salary is:" + p.totalSalary);
        System.out.println("Bonus of the programmer is:" + p.bonus);
        p.shout();
    }
}