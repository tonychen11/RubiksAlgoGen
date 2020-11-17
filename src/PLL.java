import java.util.List;
import java.util.*;
import java.util.Scanner; 
import java.util.Random;

public class PLL {
	public static String[] splitPLL(String pll) {
		String split[] = pll.split("\\s+");
		return split;
	}
	
	public static void removeBrackets(String[] pll) {
		for (int i = 0; i < pll.length; i++) {
			//https://stackoverflow.com/questions/25852961/how-to-remove-brackets-character-in-string-java
			pll[i] = pll[i].replaceAll("[\\[\\](){}]", "");
		}		
	}
	
	public static void invertMove(String[] pll) {
		for (int i = 0; i < pll.length; i++) {
			if (pll[i].length() == 2) {
				if (pll[i].charAt(1) == ('\''))
					pll[i] = pll[i].substring(0,1);
			}
			else if (pll[i].length() == 3) {
				pll[i] = pll[i].substring(0,2);
			}
			else {
				pll[i] += '\'';				
			}						
		}
	}
	
	public static void invertPLL(String[] pll) {
		String temp;
		for (int i = 0; i < pll.length/2; i++) {
			temp = pll[i];
			pll[i] = pll[(pll.length)-i-1];
			pll[(pll.length)-i-1] = temp;
		}	
	}

	public static void main(String[] args) { 
		/* Cube notations
		 * x turn front side up
		 * x' turn front side down
		 * y turn cube clockwise
		 * y' turn cube counterclockwise
		 */
		
		String[] pll = {"[(R' U R') D2] [(R U' R') D2] R2",
						"[(R U' R) D2] [(R' U R) D2] R2",
						"R2 U [R U R' U'] (R' U') (R' U R')",
						"[R U'] [R U] [R U] [R U'] R' U' R2",
						"M2 U M2 U2 M2 U M2",
						"[R U R' U'] [R' F] [R2 U' R'] U' [R U R' F']",
						"[R' U L'] [U2 R U' R' U2] [R L U']",
						"[R U R' F'] {[R U R' U'] [R' F] [R2 U' R'] U'}",
						"[L U2' L' U2'] [L F'] [L' U' L U] [L F] L2' U",
						"[R' U2 R U2] [R' F] [R U R' U'] [R' F'] R2 U'",
						"[R' U R' d'] [R' F'] [R2 U' R' U] [R' F R F]",
						"R2 u R' U R' U' R u' R2 [y' R' U R]",
						"[R' U' R] y R2 u R' U R U' R u' R2",
						"R2 u' R U' R U R' u R2 [y R U' R']",
						"[R U R'] y' R2 u' R U' R' U R' u R2",
						"[R' U2 R' d'] [R' F'] [R2 U' R' U] [R' F R U' F]",
						"M2 U M2 U M' U2 M2 U2 M' U2",
						"F R U' R' U' [R U R' F'] {[R U R' U'] [R' F R F']}",
						"{(L U' R) U2 (L' U R')} {(L U' R) U2 (L' U R')} U",
						"{(R' U L') U2 (R U' L)} {(R' U L') U2 (R U' L)} U'",
						"(R U' R') D (R U R') u2 (R' U R) D (R' U' R)"};
		
		String[] pllName = {"A1", "A2", "U1", "U2", "H", "T", "J1", "J2", "R1", "R2", 
							"V", "G1", "G2", "G3", "G4", "F", "Z", "Y", "N1", "N2", "E"};
		
        List<String> list = Arrays.asList(pllName);

		// creating a hash table 
        Hashtable<String, String[]> h = new Hashtable<>();
        
		for (int i = 0; i < pll.length; i++) {
			String currentPll[] = splitPLL(pll[i]);
			removeBrackets(currentPll);
			invertMove(currentPll);
			invertPLL(currentPll);
			h.put(pllName[i], currentPll);
		}      			
		
		boolean practiceTool = true;
		Scanner scan = new Scanner(System.in);

		while(practiceTool) {
			System.out.println("Welcome to PLL practice tool."
				+ "\nWould you like to practice a specific PLL"
				+ " or all PLLs?"
				+ "\nEnter 's' for specific and 'a' for all"
				+ "\nEnter 'x' to exit the practice tool");
			
			String s = scan.next();
			
			boolean specific = true;
			
			if (s.equals("s")) {
				System.out.println("\nChoose 1 out of the 21 PLLs to practice.\n");
					
				while(specific) {
		        	boolean first = true;
					for (String s1:pllName) {
						if (first) {
							System.out.print(s1);
							first = false;
						}
						else
							System.out.print(", " + s1);
					}
					
					System.out.println("\nYour selection: ");
					String s2 = scan.next();
					
			        if (list.contains(s2.toUpperCase())) {
						System.out.println("");
			        	for (String s3:h.get(s2.toUpperCase())) {
					        System.out.print(s3 + " ");
						}
						System.out.println("\nEnter 'new' to practice another PLL"
								+ "\nEnter any key to return to the home screen");
						String s4 = scan.next();

			        	if (s4.equals("new")) { 
							System.out.println("");
							continue;
						}
						else {
							System.out.println("");
							break;
						}
			        }	
			        else
						System.out.println("");
			        	System.out.println("This PLL does not exist, pls re-enter a PLL\n");
				}
			}
			else if (s.equals("a")) {
				boolean all = true;
				Random rand = new Random();

				while (all) {
					System.out.println("\nPLL algorithms will be randomly generated for you to practice\n");
					String randInt = pllName[rand.nextInt(21)];
					System.out.println("Algorithm: " + randInt);
					for (String s5:h.get(randInt)) {
				        System.out.print(s5 + " ");
					}
					System.out.println("\nEnter any key to practice the next PLL"
							+ "\nEnter 'exit' to return to the home screen");
					
					String s6 = scan.next();
					
					if(s6.equals("exit")) {
						System.out.println("");
						break;
					}
					else {
						System.out.println("");
						continue;
					}
				}
			}
			
			else if (s.equals("x"))
				break;
			
			else
				System.out.println("Please enter 's' for specific or 'a' for all\n");
		}
  
		scan.close();
  	}

}
