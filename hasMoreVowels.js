
// let orgWord = ('')
// let orgWord2 = ('')





// for(let i = 0; i < word.length; i++){
//     if(i === 'a'){
//         prop1.push('a')
//     }
//     if(i === 'e'){
//         prop1.push('e')
//     }
//     if(i === 'o'){
//         prop1.push('o')
//     }
//     if(i === 'u'){
//         prop1.push('u')
//     }
// }
// for(let i = 0; i < word2.length; i++){
//     if(i === 'a'){
//         prop2.push('a')
//     }
//     if(i === 'e'){
//         prop2.push('e')
//     }
//     if(i === 'o'){
//         prop2.push('o')
//     }
//     if(i === 'u'){
//         prop2.push('u')
//     }
// }

let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];  
   let vowelsInWord = [];     
   let consonantInWord = [];     
 for(let i = 0; i < word.length; i++){        
 let charToCheck = word[i];         
if(vowels.includes(charToCheck)){          
   vowelsInWord.push(charToCheck);       
  }else{             
   consonantInWord.push(charToCheck);     
    }   
      
 return vowelsInWord.length > consonantInWord.length;
 } 
 console.log(hasMoreVowels('Hello'));