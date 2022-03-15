import Head from 'next/head'
import SurveyCard from '../components/survey/SurveyCard'
import OverallRatingCard from '../components/survey/OverallRatingCard'
import PageLayout from '../components/PageLayout'
import Sortable from 'sortablejs'
import { useEffect } from 'react'

export default function Survey() {
  function surveyQuestionCallback(information) {
    console.log('question information:')
    for (const key in information) {
      console.log(key + ': ' + information[key])
    }
  }

  let multiChoices = [
    'Not sweet enough',
    'Not quite sweet enough',
    'Perfect',
    'A little too sweet',
    'Much too sweet',
  ]
  let multiChoices2 = ['Too Dark', 'Perfect', 'Too Light']
  let question0ID = 0
  let question1ID = 1
  let question2ID = 2

  useEffect(() => {
    var el = document.getElementById('questions')
    var sortable = Sortable.create(el)
  }, [])

  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>
      <PageLayout pageName=" Create Survey">
        <main className="p-2.5 text-center">
          <OverallRatingCard questionID={0} callback={surveyQuestionCallback} />

          {/*<SurveyCard*/}
          {/*  type="required"*/}
          {/*  question="How would you rate this sample overall?"*/}
          {/*  callback={surveyQuestionCallback}*/}
          {/*  questionID={question0ID}*/}
          {/*/>*/}

          {/* Entire area should be "Droppable" */}
          {/* Questions array .map to "Draggable" SurveyCards */}
          <div id="questions">
            <SurveyCard
              type="multiple"
              question="How does this sample meet your needs for sweetness?"
              data={multiChoices}
              callback={surveyQuestionCallback}
              questionID={question1ID}
            />
            <SurveyCard
              type="multiple"
              question="How would you rate the color of this sample?"
              data={multiChoices2}
              callback={surveyQuestionCallback}
              questionID={question2ID}
            />
          </div>

          <SurveyCard type="create" callback={surveyQuestionCallback} />

          {/* Add Question Button */}
          {/* Save Survey Button */}
        </main>
      </PageLayout>
    </>
  )
}
