// Encapsulation

public class Student{  
    //private data member 
    private int id; 
    private String name;  
    private String collegeName;
    private String address;

    //getter method
    public int getId(){
        return id;
    }  
    public String getName(){  
        return name;  
    }  
    public String getCollegeName(){
        return collegeName;
    }
    public String getAddress(){
        return address;
    }

    //setter method 
    public void setId(int id){
        this.id=id;
    } 
    public void setName(String name){  
        this.name=name;
    }
    public void setCollegeName(String collegeName){
        this.collegeName=collegeName;
    }
    public void setAddress(String address){
        this.address=address;
    }
    }
    
    //A Java class to test the encapsulated class.  
    class Test{  
    public static void main(String[] args){  
    //creating instance of the encapsulated class  
    Student s=new Student();  
    //setting value  
    s.setName("Sung");  
    s.setId(1);
    s.setCollegeName("George Washington University");
    s.setAddress("13312 Rising Sun Ln, Germantown, MD 20874");
    //getting value 
    System.out.println(s.getName() +" "+ s.getId() +" "+ s.getCollegeName() +" "+ s.getAddress());
    }  
    }