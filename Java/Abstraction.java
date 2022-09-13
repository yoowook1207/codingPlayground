abstract class Bank{
    abstract void getRateOfInterest();
}
    class SBI extends Bank{
        void getRateOfInterest(){System.out.println("7%");}
    }
    class PNB extends Bank{
        void getRateOfInterest(){System.out.println("5%");}
    }

    class TestBank {
        public static void main(String args[]){  

        Bank sbi = new SBI();
        sbi.getRateOfInterest();

        Bank pnb = new PNB();
        pnb.getRateOfInterest();
    }
}