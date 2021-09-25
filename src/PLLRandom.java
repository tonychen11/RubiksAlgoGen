import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class PLLRandom {
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
		
		// Hashmap to store the pll names and their respective algorithms
		HashMap<String, String[]> h = new HashMap<>();
		
		for (int i = 0; i < pll.length; i++) {
			String currentPll[] = splitPLL(pll[i]);
			removeBrackets(currentPll);
			invertMove(currentPll);
			invertPLL(currentPll);
			h.put(pllName[i], currentPll);
		}

		List<Integer> nums = new ArrayList<>();	
		for(int i = 1; i <= 21; i++) {
			nums.add(i);
		}
		Collections.shuffle(nums);
		String randInt = pllName[nums.get(0)-1]; //index 0 to 20 
		System.out.println(randInt + " Inverse Permutation:");
		for (String letter : h.get(randInt)) {
	        System.out.print(letter + " ");
		}
	}
}