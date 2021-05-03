//program for rot-13 and rot-47 cipher
//global DOM selector for button
let btn = document.getElementById('button');
// for rot-47 cipher
function rot47(str) {
	return (
		str.split("")
		//iterating through the array
		.map.call(str,function(ch) {
			var char = ch.charCodeAt(0);
			//rot-47 are always in the range [33,126] (closed interval)
			if(char > 33 && char < 126) {
				return String.fromCharCode(33 + (char + 14) % 94);   //pwoerful modular arithmetic to get the 47th cipher of a char within this range
			}
			else {
				return String.fromCharCode(char);
			}
		})
		.join("")
	);
}

//for rot-13 cipher
function rot13(str) {
  // Split str into a character array
  return (
    str.split("")
      // Iterate over each character in the array
      .map.call(str, function(ch) {
        // Convert char to a character code
        var char = ch.charCodeAt(0);
        //if characters are lowercase characters
        if (char >= 97 && char <= 122) {
        	if(char < 110) {
        		return String.fromCharCode(char + 13);
        	}
        	else {
        		return String.fromCharCode(char - 13);
        	}
        }
        //if characters are uppercase characters
        else if (char >= 65 && char <= 90) {
        	if(char < 78) {
        		return String.fromCharCode(char + 13);		
        	}
          	else {
          		return String.fromCharCode(char - 13);
          	}
        }
        //for other characters
 	
 			return String.fromCharCode(char);
      })
      //rejoining array of characters into a string
      .join("")
  ); 
}

btn.addEventListener("click",function() 
{
	let str = document.getElementById('u-input').value;
	// console.log(str);
  if(document.getElementById('cipher').value == "rot-13") {
    alert(`Your rot-13 encoded text is ${rot13(str)}`);
  }
  else {
    alert(`Your rot-47 encoded text is ${rot47(str)}`);
  }
  document.getElementById('u-input').value = "";
});