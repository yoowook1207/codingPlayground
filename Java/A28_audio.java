import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import javax.sound.sampled.*;

public class A28_audio {
    public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {

        Scanner scanner = new Scanner(System.in);

        // call audio file
        File file = new File("Ice_n_Fire-King_Canyon.wav");

        // put audio file on the stream
        AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
        // clip is an audio player
        Clip clip = AudioSystem.getClip();
        clip.open(audioStream);

        String response = "";

        while (!response.equals("Q")) {
            System.out.println("P = play, S = Stop, R = Reset, Q = Quit");
            System.out.print("Enter your choice: ");

            response = scanner.next();
            response = response.toUpperCase();

            switch (response) {
                case ("P"):
                    clip.start();
                    break;
                case ("S"):
                    clip.stop();
                    break;
                case ("R"):
                    clip.setMicrosecondPosition(0);
                    break;
                case ("Q"):
                    clip.close();
                    break;
                default:
                    System.out.println("Not a valid response");
            }

        }
        System.out.println("Byeeee!");
        scanner.close();
    }
}
