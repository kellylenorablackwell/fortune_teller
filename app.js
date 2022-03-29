
const listOfAnswers = ['Yes', 'Of Course','Certainly', 'Definitely', 'Undoubtedly', 'Unquestionably','Affirmative', 'Without a shadow of a doubt','No', 'Not Likely','Never', 'No way', 'I would not hold my breath', 'Not at all', 'Absolutely not', 'Maybe', 'Possibly', 'It could happen', 'Perhaps', 'Probably', 'It is likely']

const actualAnswer = ()=>{
    console.log(listOfAnswers[Math.floor((Math.random() * 21) + 1)])
}

actualAnswer()

$( () => {
    //jQuery code goes here
  });
