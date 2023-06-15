//Allow user to press enter to submit
document.getElementById("mainFrameOne").addEventListener("keydown", function(event) {	
  if(mainFrameOne.style.display != 'none' && event.key == 'Enter'){
		selectMode();
	}
});

document.getElementById("specificFrame").addEventListener("keydown", function(event) {	
	if(specificFrame.style.display != 'none' && event.key == 'Enter'){
		generateSpecificAlgorithm();
	}
});

document.getElementById("specificFrameFollowUp").addEventListener("keydown", function(event) {	
	if(specificFrameFollowUp.style.display != 'none' && event.key == 'Enter'){
		nextActionSpecific();
	}
});

document.getElementById("allFrame").addEventListener("keydown", function(event) {	
	if(allFrame.style.display != 'none' && event.key == 'Enter'){
		nextActionAll();
	}
});

function selectMode() {	
	//Clear error message before going to next page
	if(errorMode.innerHTML != ""){
		errorMode.innerHTML = "";  	
	}
	
  //If s is selected
  if(stdin.value.toLowerCase() == 's'){	
		stdin.value = "";
    mainFrameOne.style.display = "none"; 
    specificFrame.style.display = "block"; 
  }
  
  //If a is selected
  else if(stdin.value.toLowerCase() == 'a'){
		stdin.value = "";
    mainFrameOne.style.display = "none"; 
    allFrame.style.display = "block"; 
		generateAllAlgorithm();
  }
	
	//Invalid mode, clears selection
	else{
		stdin.value = "";
	  errorMode.innerHTML = "<br>That is not a valid mode";  
	}
}

function generateSpecificAlgorithm() {
	errorPLL.innerHTML = "<br>Generating..."; 	

	if(stdinSpecific.value == ""){
		errorPLL.innerHTML = "<br>Please enter a PLL"; 	
	}
	else{
		var obj = {
			clientId: "45e122d1b04aa0d2535611c41a1aa67f",
			clientSecret: "8c81a9a311cdaa889ac9928d828720eae68063a348481420acf6062f3c6dcf33",
			script: "import java.util.Arrays;\r\nimport java.util.HashMap;\r\nimport java.util.List;\r\nimport java.util.Scanner;\r\n\r\npublic class PLLSpecific {\r\n\tpublic static String[] splitPLL(String pll) {\r\n\t\tString split[] = pll.split(\"\\\\s+\");\r\n\t\treturn split;\r\n\t}\r\n\t\r\n\tpublic static void removeBrackets(String[] pll) {\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\t//https://stackoverflow.com/questions/25852961/how-to-remove-brackets-character-in-string-java\r\n\t\t\tpll[i] = pll[i].replaceAll(\"[\\\\[\\\\](){}]\", \"\");\r\n\t\t}\t\t\r\n\t}\r\n\t\r\n\tpublic static void invertMove(String[] pll) {\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\tif (pll[i].length() == 2) {\r\n\t\t\t\tif (pll[i].charAt(1) == ('\\''))\r\n\t\t\t\t\tpll[i] = pll[i].substring(0,1);\r\n\t\t\t}\r\n\t\t\telse if (pll[i].length() == 3) {\r\n\t\t\t\tpll[i] = pll[i].substring(0,2);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tpll[i] += '\\'';\t\t\t\t\r\n\t\t\t}\t\t\t\t\t\t\r\n\t\t}\r\n\t}\r\n\t\r\n\tpublic static void invertPLL(String[] pll) {\r\n\t\tString temp;\r\n\t\tfor (int i = 0; i < pll.length/2; i++) {\r\n\t\t\ttemp = pll[i];\r\n\t\t\tpll[i] = pll[(pll.length)-i-1];\r\n\t\t\tpll[(pll.length)-i-1] = temp;\r\n\t\t}\t\r\n\t}\r\n\tpublic static void main(String[] args) {\r\n\t\tString[] pll = {\"[(R' U R') D2] [(R U' R') D2] R2\",\r\n\t\t\t\t\"[(R U' R) D2] [(R' U R) D2] R2\",\r\n\t\t\t\t\"R2 U [R U R' U'] (R' U') (R' U R')\",\r\n\t\t\t\t\"[R U'] [R U] [R U] [R U'] R' U' R2\",\r\n\t\t\t\t\"M2 U M2 U2 M2 U M2\",\r\n\t\t\t\t\"[R U R' U'] [R' F] [R2 U' R'] U' [R U R' F']\",\r\n\t\t\t\t\"[R' U L'] [U2 R U' R' U2] [R L U']\",\r\n\t\t\t\t\"[R U R' F'] {[R U R' U'] [R' F] [R2 U' R'] U'}\",\r\n\t\t\t\t\"[L U2' L' U2'] [L F'] [L' U' L U] [L F] L2' U\",\r\n\t\t\t\t\"[R' U2 R U2] [R' F] [R U R' U'] [R' F'] R2 U'\",\r\n\t\t\t\t\"[R' U R' d'] [R' F'] [R2 U' R' U] [R' F R F]\",\r\n\t\t\t\t\"R2 u R' U R' U' R u' R2 [y' R' U R]\",\r\n\t\t\t\t\"[R' U' R] y R2 u R' U R U' R u' R2\",\r\n\t\t\t\t\"R2 u' R U' R U R' u R2 [y R U' R']\",\r\n\t\t\t\t\"[R U R'] y' R2 u' R U' R' U R' u R2\",\r\n\t\t\t\t\"[R' U2 R' d'] [R' F'] [R2 U' R' U] [R' F R U' F]\",\r\n\t\t\t\t\"M2 U M2 U M' U2 M2 U2 M' U2\",\r\n\t\t\t\t\"F R U' R' U' [R U R' F'] {[R U R' U'] [R' F R F']}\",\r\n\t\t\t\t\"{(L U' R) U2 (L' U R')} {(L U' R) U2 (L' U R')} U\",\r\n\t\t\t\t\"{(R' U L') U2 (R U' L)} {(R' U L') U2 (R U' L)} U'\",\r\n\t\t\t\t\"(R U' R') D (R U R') u2 (R' U R) D (R' U' R)\"};\r\n\r\n\t\tString[] pllName = {\"A1\", \"A2\", \"U1\", \"U2\", \"H\", \"T\", \"J1\", \"J2\", \"R1\", \"R2\", \r\n\t\t\t\t\t\t\t\"V\", \"G1\", \"G2\", \"G3\", \"G4\", \"F\", \"Z\", \"Y\", \"N1\", \"N2\", \"E\"};\r\n\t\t\r\n\t\tList<String> list = Arrays.asList(pllName);\r\n\t\t\r\n\t\t// Hashmap to store the pll names and their respective algorithms\r\n\t\tHashMap<String, String[]> h = new HashMap<>();\r\n\t\t\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\tString currentPll[] = splitPLL(pll[i]);\r\n\t\t\tremoveBrackets(currentPll);\r\n\t\t\tinvertMove(currentPll);\r\n\t\t\tinvertPLL(currentPll);\r\n\t\t\th.put(pllName[i], currentPll);\r\n\t\t} \r\n\t\t\r\n\t\tScanner scan = new Scanner(System.in);\r\n\t\tString s = scan.next();\r\n\t\t\r\n\t\tif (list.contains(s.toUpperCase())) {\r\n\t\t\tSystem.out.println(\"\");\r\n        \tfor (String letter:h.get(s.toUpperCase())) {\r\n\t\t        System.out.print(letter + \" \");\r\n\t\t\t}\r\n        }\t\r\n\t\t\r\n\t\tscan.close();\r\n\t}\r\n}",
			language: "java",
			versionIndex: "0",
			stdin: stdinSpecific.value
		};

		var jsonStr = JSON.stringify(obj);
		console.log(jsonStr);
			
		const proxyurl = "https://cors-anywhere-fpif.onrender.com/";
		const url = "https://api.jdoodle.com/v1/execute";
		fetch(proxyurl + url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: jsonStr
		})
		.then(response => response.json())
		.then(data => {
			var outputStr = data.output;
			
			//PLL exists
			if(outputStr != ""){
				console.log(outputStr);
				errorPLL.innerHTML = "";
				specificAlgo.innerHTML = stdinSpecific.value.toUpperCase() + " Inverse Permutation:<br><br>" + outputStr;
				stdinSpecific.value = "";
				specificFrame.style.display = "none"; 
				specificFrameFollowUp.style.display = "block"; 
			}
			//PLL doesn't exist
			else{
				stdinSpecific.value = "";
				errorPLL.innerHTML = "<br>This PLL does not exist, please re-enter a PLL"; 	
			}
		})
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}
}

function nextActionSpecific() {
	//Display algorithm
	//Practice another PLL or return to the home screen
	if(stdinSpecificFollowUp.value.toLowerCase() == 'new'){
		stdinSpecificFollowUp.value = "";
		specificFrameFollowUp.style.display = "none"; 
		specificFrame.style.display = "block"; 
	}
	else{
		stdinSpecificFollowUp.value = "";
		specificFrameFollowUp.style.display = "none"; 
		mainFrameOne.style.display = "block";
	}
}

function generateAllAlgorithm() {
	//Generate random algorithm
	randomAlgo.innerHTML = "Generating..."; 	

  var obj = {
		clientId: "45e122d1b04aa0d2535611c41a1aa67f",
	  clientSecret: "8c81a9a311cdaa889ac9928d828720eae68063a348481420acf6062f3c6dcf33",
		script: "import java.util.ArrayList;\r\nimport java.util.Arrays;\r\nimport java.util.Collections;\r\nimport java.util.HashMap;\r\nimport java.util.List;\r\n\r\npublic class PLLRandom {\r\n\tpublic static String[] splitPLL(String pll) {\r\n\t\tString split[] = pll.split(\"\\\\s+\");\r\n\t\treturn split;\r\n\t}\r\n\t\r\n\tpublic static void removeBrackets(String[] pll) {\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\t//https://stackoverflow.com/questions/25852961/how-to-remove-brackets-character-in-string-java\r\n\t\t\tpll[i] = pll[i].replaceAll(\"[\\\\[\\\\](){}]\", \"\");\r\n\t\t}\t\t\r\n\t}\r\n\t\r\n\tpublic static void invertMove(String[] pll) {\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\tif (pll[i].length() == 2) {\r\n\t\t\t\tif (pll[i].charAt(1) == ('\\''))\r\n\t\t\t\t\tpll[i] = pll[i].substring(0,1);\r\n\t\t\t}\r\n\t\t\telse if (pll[i].length() == 3) {\r\n\t\t\t\tpll[i] = pll[i].substring(0,2);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tpll[i] += '\\'';\t\t\t\t\r\n\t\t\t}\t\t\t\t\t\t\r\n\t\t}\r\n\t}\r\n\t\r\n\tpublic static void invertPLL(String[] pll) {\r\n\t\tString temp;\r\n\t\tfor (int i = 0; i < pll.length/2; i++) {\r\n\t\t\ttemp = pll[i];\r\n\t\t\tpll[i] = pll[(pll.length)-i-1];\r\n\t\t\tpll[(pll.length)-i-1] = temp;\r\n\t\t}\t\r\n\t}\r\n\t\r\n\tpublic static void main(String[] args) {\r\n\t\tString[] pll = {\"[(R' U R') D2] [(R U' R') D2] R2\",\r\n\t\t\t\t\"[(R U' R) D2] [(R' U R) D2] R2\",\r\n\t\t\t\t\"R2 U [R U R' U'] (R' U') (R' U R')\",\r\n\t\t\t\t\"[R U'] [R U] [R U] [R U'] R' U' R2\",\r\n\t\t\t\t\"M2 U M2 U2 M2 U M2\",\r\n\t\t\t\t\"[R U R' U'] [R' F] [R2 U' R'] U' [R U R' F']\",\r\n\t\t\t\t\"[R' U L'] [U2 R U' R' U2] [R L U']\",\r\n\t\t\t\t\"[R U R' F'] {[R U R' U'] [R' F] [R2 U' R'] U'}\",\r\n\t\t\t\t\"[L U2' L' U2'] [L F'] [L' U' L U] [L F] L2' U\",\r\n\t\t\t\t\"[R' U2 R U2] [R' F] [R U R' U'] [R' F'] R2 U'\",\r\n\t\t\t\t\"[R' U R' d'] [R' F'] [R2 U' R' U] [R' F R F]\",\r\n\t\t\t\t\"R2 u R' U R' U' R u' R2 [y' R' U R]\",\r\n\t\t\t\t\"[R' U' R] y R2 u R' U R U' R u' R2\",\r\n\t\t\t\t\"R2 u' R U' R U R' u R2 [y R U' R']\",\r\n\t\t\t\t\"[R U R'] y' R2 u' R U' R' U R' u R2\",\r\n\t\t\t\t\"[R' U2 R' d'] [R' F'] [R2 U' R' U] [R' F R U' F]\",\r\n\t\t\t\t\"M2 U M2 U M' U2 M2 U2 M' U2\",\r\n\t\t\t\t\"F R U' R' U' [R U R' F'] {[R U R' U'] [R' F R F']}\",\r\n\t\t\t\t\"{(L U' R) U2 (L' U R')} {(L U' R) U2 (L' U R')} U\",\r\n\t\t\t\t\"{(R' U L') U2 (R U' L)} {(R' U L') U2 (R U' L)} U'\",\r\n\t\t\t\t\"(R U' R') D (R U R') u2 (R' U R) D (R' U' R)\"};\r\n\r\n\t\tString[] pllName = {\"A1\", \"A2\", \"U1\", \"U2\", \"H\", \"T\", \"J1\", \"J2\", \"R1\", \"R2\", \r\n\t\t\t\t\t\t\t\"V\", \"G1\", \"G2\", \"G3\", \"G4\", \"F\", \"Z\", \"Y\", \"N1\", \"N2\", \"E\"};\r\n\t\t\r\n\t\tList<String> list = Arrays.asList(pllName);\r\n\t\t\r\n\t\t// Hashmap to store the pll names and their respective algorithms\r\n\t\tHashMap<String, String[]> h = new HashMap<>();\r\n\t\t\r\n\t\tfor (int i = 0; i < pll.length; i++) {\r\n\t\t\tString currentPll[] = splitPLL(pll[i]);\r\n\t\t\tremoveBrackets(currentPll);\r\n\t\t\tinvertMove(currentPll);\r\n\t\t\tinvertPLL(currentPll);\r\n\t\t\th.put(pllName[i], currentPll);\r\n\t\t}\r\n\r\n\t\tList<Integer> nums = new ArrayList<>();\t\r\n\t\tfor(int i = 1; i <= 21; i++) {\r\n\t\t\tnums.add(i);\r\n\t\t}\r\n\t\tCollections.shuffle(nums);\r\n\t\tString randInt = pllName[nums.get(0)-1]; //index 0 to 20 \r\n\t\tSystem.out.println(randInt + \" Inverse Permutation:\");\r\n\t\tfor (String letter : h.get(randInt)) {\r\n\t        System.out.print(letter + \" \");\r\n\t\t}\r\n\t}\r\n}",
		language: "java",
		versionIndex: "0",
		stdin: ""
	};

  var jsonStr = JSON.stringify(obj);
  console.log(jsonStr);
		
  const proxyurl = "https://cors-anywhere-fpif.onrender.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => response.json())
  .then(data => {
    var outputStr = data.output;
		var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br><br>');
		//Display PLL
		randomAlgo.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

function nextActionAll() {
	//Display algorithm
	//Practice another PLL or return to the home screen
	if(stdinAll.value.toLowerCase() == 'exit'){
		stdinAll.value = "";
		allFrame.style.display = "none"; 
		mainFrameOne.style.display = "block"; 
	}	
	else{
		stdinAll.value = "";
		generateAllAlgorithm();
	}
}
