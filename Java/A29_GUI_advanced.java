import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class A29_GUI_advanced {
    public static void main(String[] args) {
        /*
        JFrame frame = new JFrame(); // creates a frame
        frame.setTitle("Sungwook's frame"); // title of the frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // exit out of application
        frame.setResizable(false); // prevent frame resizing
        frame.setSize(420,420); // size of the frame
        frame.setVisible(true); // make frame visible

        ImageIcon image = new ImageIcon("favicon-1.png"); //create an ImageIcon
        frame.setIconImage(image.getImage()); //change icon of frame
        frame.getContentPane().setBackground(new Color(0x123456)); //change color of background
         */

         MyFrame myNewFrame = new MyFrame();
         myNewFrame.getContentPane().setBackground(new Color(0x654321));
    }
}

class MyFrame extends JFrame {

    MyFrame() {
        this.setTitle("Sungwook's"); 
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
        this.setResizable(false); 
        this.setSize(420,420);         
        this.setVisible(true); 

        ImageIcon image = new ImageIcon("favicon-1.png"); 
        this.setIconImage(image.getImage());
        this.getContentPane().setBackground(new Color(0x123456)); 
    }
}