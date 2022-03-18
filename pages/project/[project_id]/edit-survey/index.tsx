import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import PageLayout from '../../../../components/PageLayout'
import OverallRatingCard from '../../../../components/survey/OverallRatingCard'
import QuestionCard from '../../../../components/survey/QuestionCard'
import React from 'react'
import AddQuestionButton from '../../../../components/survey/buttons/AddQuestionButton'
import SaveSurveyButton from '../../../../components/survey/buttons/SaveSurveyButton'

/*
  TODO: Edit Survey View for project admins
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  TODO: Enable Drag and Drop

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const Survey = ({ survey }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  // const { project_id } = router.query

  const question = {
    question: 'How was this sample overall?',
    questionID: 0,
    callback: function () {
      console.log(1)
    },
  }

  return (
    <PageLayout pageName="Edit Survey">
      <Head>
        <title>{/* SampleVu Edit Survey Title */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Editable Survey Title */}

      {/* Star Rating Question Card - Immovable */}
      <OverallRatingCard {...question} />

      {/* Rest of the Cards */}
      {survey.map((question, idx) => (
        <QuestionCard key={`question-${idx}`} {...question} />
      ))}

      {/* Add Question Button */}
      <AddQuestionButton />

      {/* Save Survey Button */}
      <SaveSurveyButton />
    </PageLayout>
  )
}

/* Server-side Rendering (SSR) */
export const getServerSideProps: GetServerSideProps = async ({ params: { project_id } }) => {
  // TODO: Fetch survey data

  // const req = await fetch(`http://localhost:3000/${params.project_id}.json`);
  // const data = await req.json();
  //
  return {
    props: { survey: [] },
  }
}

export default Survey
