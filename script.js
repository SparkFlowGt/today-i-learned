
const btn = document.querySelector('.btn-open');
const form = document.querySelector(".fact-form");

btn.addEventListener('click', function(){
if(form.classList.contains('hidden')){
  form.classList.remove('hidden');
  btn.textContent = 'Close';
}else{
  form.classList.add("hidden");
  btn.textContent = "Share a fact";
  }
}
);

/*
let votesInteresting = 23;
let votesMindBlowing = 5;
const text = "Lisbon ios the capital of Portugal"

votesInteresting = votesInteresting +1;
votesInteresting++;

let totalUpvotes = votesInteresting + votesMindBlowing;
console.log('Updovetes:',totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

parseInt('2')
*/


function calcFactAge(year){
  const currentYear= new Date().getFullYear();
  const age = currentYear - year;

  if(age>=0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
   
  
  
}

const age1 =  calcFactAge(2015)
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

/*
let votesInteresting = 20;
let votesMindBlowing = 20;
console.log
if (votesInteresting === votesMindBlowing){
  alert('This fact is equally interesting and mindblowing');
}else if(votesInteresting>votesMindBlowing){
  console.log('Interesting Fact!')
}else if(votesInteresting < votesMindBlowing){
  console.log('Mindblowing fact!!');
}

if(votesMindBlowing){
  console.log('mindblowing');
}else{
  console.log("not so specia...");
}

let votesFalse = 7;
const totalUpdvotes = votesInteresting + votesMindBlowing;

const message = totalUpdvotes > votesFalse ? "The fact is true" :"Might be false,check more sorces...";
alert (message)

const upperText = text.toUpperCase();
console.log.apply(upperText);

const str = `The curent  fact is "${text}". It is 
${calcFactAge(
  2015
)} year old. It is probably 
${totalUpvotes>votesFalse ?'correct':'not true'
}.`;  
*/