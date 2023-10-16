public class PangramChecker {
    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            if (str.indexOf(ch) == -1) {
                // If any letter is missing, it's not a pangram
                return false;
            }
        }
        // If all letters are found, it's a pangram
        return true;
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}