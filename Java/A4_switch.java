import java.time.LocalDateTime;  
import java.time.format.DateTimeFormatter;  

public class A4_switch {
    public static void main(String[] args) {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("EEEE");  
        LocalDateTime now = LocalDateTime.now();   

        String day = dtf.format(now);

        switch(day) {
            case "Sunday": System.out.println("It is Sunday!");
            break;
            case "Monday": System.out.println("It is Monday!");
            break;
            case "Tuesday": System.out.println("It is Tuesday!");
            break;
            case "Wednesday": System.out.println("It is Wednesday!");
            break;
            case "Thursday": System.out.println("It is Thursday!");
            break;
            case "Friday": System.out.println("It is Friday!");
            break;
            case "Saturday": System.out.println("It is Saturday!");
            break;
            default: System.out.println("That is not a day!");
        }
    }
}
