import javax.swing.JButton;
import javax.swing.JFrame;

public class A31_button {
    public static void main(String[] args) {
        
        new TheFrame();


    }

}

class TheFrame extends JFrame{

    JButton button;

    TheFrame() {

        button = new JButton();
        button.setBounds(200, 100, 100, 50);
        button.addActionListener(e -> System.out.println("Poo"));
        button.setText("Submit");

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
        this.setLayout(null);
        this.setSize(420,420);         
        this.setVisible(true);
        this.add(button);
    }
}