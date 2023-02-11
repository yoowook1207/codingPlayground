import java.awt.Color;
import java.awt.Font;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.border.Border;

public class A30_labels {
    public static void main(String[] args) {

        ImageIcon img = new ImageIcon("favicon-1.png");
        Border border = BorderFactory.createDashedBorder(Color.green);
                
        JLabel label = new JLabel();
        label.setText("My name is Sung Wook");
        label.setIcon(img);
        label.setHorizontalTextPosition(JLabel.CENTER);
        label.setVerticalTextPosition(JLabel.TOP);
        label.setForeground(new Color(0x198523));
        label.setFont(new Font("MV Boli", Font.BOLD, 20));
        label.setIconTextGap(25);
        label.setBackground(Color.black);
        label.setOpaque(true);
        label.setBorder(border);
        label.setVerticalAlignment(JLabel.CENTER);
        label.setHorizontalAlignment(JLabel.CENTER);
        label.setBounds(100, 100, 250, 250);

        JFrame frame = new JFrame(); // creates a frame
        frame.setTitle("Sung Wook's frame"); // title of the frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // exit out of application
        // frame.setLayout(null);
        frame.setSize(500,500); // size of the frame
        frame.setVisible(true); // make frame visible
        frame.add(label);
        frame.pack(); // fit on item size
    }
}
