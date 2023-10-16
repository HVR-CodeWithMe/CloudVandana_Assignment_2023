import java.util.Arrays;
import java.util.Collections;

public class ArrayShuffle {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the elements in the array
        Collections.shuffle(Arrays.asList(array));

        // Print the shuffled array
        System.out.println("Shuffled Array: " + Arrays.toString(array));
    }
}