import java.util.ArrayList;
import java.util.List;

public class PLL {
	public static String[] splitPLL(String pll) {
		String split[] = pll.split("\\s+");
		return split;
	}
	
	public static void removeBrackets(String[] pll) {
		for (int i = 0; i < pll.length; i++) {
			pll[i] = pll[i].replaceAll("[\\[\\]()]", "");
		}		
	}
	
	public static void invertMove(String[] pll) {
		for (int i = 0; i < pll.length; i++) {
			if (pll[i].length() == 2) {
				if (pll[i].charAt(1) == ('\''))
					pll[i] = pll[i].substring(0,1);
			}
			else {
				pll[i] = pll[i].substring(0,1) + '\'';				
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
		// List to hold the 21 PLLs
		List<String> plls = new ArrayList<>();
		String pll1 = "[(R' U R') D2] [(R U' R') D2] R2";
		String a1[] = splitPLL(pll1);
		removeBrackets(a1);
		invertMove(a1);
		invertPLL(a1);
		
		for (int i = 0; i < a1.length; i++) {
			System.out.print(a1[i] + " ");
		}
		//plls.add("[(R' U R') D2] [(R U' R') D2] R2");
		//System.out.println(plls.get(0));
	}

}
