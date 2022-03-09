import Head from 'next/head'
import SurveyCard from '../components/survey/SurveyCard'

function surveyQuestionCallback(information) {
  console.log('question information:')
  for (var key in information) {
    console.log(key + ': ' + information[key])
  }
}

export default function Home() {
  let multChoices = [
    'Not sweet enough',
    'Not quite sweet enough',
    'Perfect',
    'A little too sweet',
    'Much too sweet',
  ]
  let multChoices2 = ['Too Dark', 'Perfect', 'Too Light']
  let question0ID = 0
  let question1ID = 1
  let question2ID = 2
  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>

      <SurveyCard
        type="required"
        title="How would you rate this sample overall?"
        callback={surveyQuestionCallback}
        questionID={question0ID}
      />
      <SurveyCard
        type="multiple"
        title="How does this sample meet your needs for sweetness?"
        data={multChoices}
        callback={surveyQuestionCallback}
        questionID={question1ID}
      />
      <SurveyCard
        type="multiple"
        title="How would you rate the color of this sample?"
        data={multChoices2}
        callback={surveyQuestionCallback}
        questionID={question2ID}
      />

      <SurveyCard type="create" callback={surveyQuestionCallback} />
    </>
  )
}
