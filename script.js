

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//selecting dom elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector(".fact-form");
const factsLists = document.querySelector(".facts-lists")

//create DOM elemnts: render facts in list

factsLists.innerHTML= "";

//factsLists.insertAdjacentHTML('afterbegin',"<li>johans</li>")

const htmlArr = initialFacts.map((fact)=>`<li class ="fact">${fact.text}</li>`);
console.log(htmlArr)
//Toggle form visibility

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

const calcFactAge2 = (year)=> {
  year <= new Date().getFullYear()
    ?new Date().getFullYear() - year
    :`Impossible year. year needs to be less or equal ${new Date().getFullYear()}`;
};


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


const fact = ['Lisbon is the capital of Portugal',2020,true,];
console.log(fact[2])
console.log(fact.length)
console.log(fact[fact.lenght - 1]);

const [text,createdIn,isCorrect] = fact;
console.log(text);

const newFact = [...fact,'society'];

const factObj= {
  text:"lisbon is the capital of Portugal",
  category: 'society',
  createdIn:2015,
  isCorrect:true,
  createSummary:function(){
    return `The fact ${this.text} if from the category ${this.category.toUpperCase()}`;
  }
};

console.log(factObj['text']);

const{category,}=factObj;


const times10 = [2, 4, 6, 8].map((el)=>el*10)

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el)=>el.name);
*/ 
