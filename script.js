let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")
let button = document.getElementById("scoreBtn")
let display = document.getElementById("scoreDisplay")
function strictscoring(){
  let score=0;
  if(q1.value === "4") score++;
  if(q2.value === "delhi") score++;
  if(q3.value === "javascript") score++;
  return score;
}
function score(callback){
  return callback();
}
button.addEventListener("click",()=>{
  let createscore = score(strictscoring)
display.innerHTML = `Your score is ${createscore}/3`;
});
