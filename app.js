const $fortune = $('#fortune')
const $submit = $('#submit')

const listOfAnswers = ['Yes', 'Of Course','Certainly', 'Definitely', 'Undoubtedly', 'Unquestionably','Affirmative', 'Without a shadow of a doubt','No', 'Not Likely','Never', 'No way', 'I would not hold my breath', 'Not at all', 'Absolutely not', 'Maybe', 'Possibly', 'It could happen', 'Perhaps', 'Probably', 'It is likely']

const actualAnswer = listOfAnswers[Math.floor((Math.random() * 20) + 1)]



$( () => {
    
    $submit.on('click', ()=>{
        $fortune.text(actualAnswer).fadeOut(5000)
        event.preventDefault()
    
    })









  });
