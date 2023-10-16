import java.util.regex.Pattern;
import java.util.Scanner;

public class RomanToInteger {
    public static int romanToInt(String s) {
        // Regular expression for valid Roman numerals
        String pattern = "^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$";

        if (!Pattern.matches(pattern, s)) {
            // If not a valid Roman numeral, return -1 or handle the error as needed
            return -1;
        }

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = getValue(s.charAt(i));

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static int getValue(char romanDigit) {
        switch (romanDigit) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        
        int intValue = romanToInt(romanNumeral);

        if (intValue != -1) {
            System.out.println(romanNumeral + " = " + intValue);
        } else {
            System.out.println("Invalid Roman numeral: " + romanNumeral);
        }
    }
}