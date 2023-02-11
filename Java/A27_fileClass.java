import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class A27_fileClass {

    public static void main(String[] args) {

        // file = An abstract representation of file and directory pathnames

        File file = new File("secret_message.txt");
        // File file = new
        // File("C:/Users/Sungwook/Desktop/CodingPlayGround/Java/secret_message.txt");

        if (file.exists()) {
            System.out.println("That file exists! :O!");
            System.out.println(file.getPath());
            System.out.println(file.canRead());
            System.out.println(file.getAbsolutePath());
            System.out.println(file.isFile());
            // file.delete();
        } else {
            System.out.println("That file doesn't exist :(");
        }

        try {
            FileWriter writer = new FileWriter("poem.txt");
            writer.write("Roses are red \nViolets are blue");
            writer.append("\n(A poem by Sung)");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("-----------------");

        try {
            FileReader reader = new FileReader("poem.txt");
            int data = reader.read();
            while (data != -1) {
                System.out.print((char) data);
                data = reader.read();
            }
            reader.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}