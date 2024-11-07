// String Manipulation

function reverse_sentence(Sentence){
str = "";

for(let i = Sentence.length-1; i>=0;i--){
   str += Sentence[i];
}
return str;
}

let Sentence = "Hello world";
let reversed = reverse_sentence(Sentence); 
let words = reversed.split(" ");
let remainreverse = "";
for(let i = words.length-1; i>=0;i--){
   remainreverse += words[i]+ " ";
}

console.log(remainreverse.trim());