const btnCheck = document.getElementById("check-btn");
const result = document.querySelector("#result");

btnCheck.addEventListener("click", function findPalindrome(){
  const input = document.querySelector("#text-input").value;
  
  
  if(input.length <= 0){
    alert("Please input a value");
    return;  
  }

  const inputStr = input.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  const strarr = [];  // Reinicia strarr en cada clic

  // Llenar strarr con caracteres válidos
  for(let i = 0; i <= inputStr.length - 1; i++){
    if(typeof inputStr[i] === "string" || typeof inputStr[i] === "number"){
      strarr.push(inputStr[i]);
    }
  }

  const strInputrev = strarr.slice().reverse().join('');

  if(strarr.join('') === strInputrev){
    result.innerHTML = `${input} is a palindrome`;
  } else {
    result.innerHTML = `${input} is not a palindrome`;
  }
});