import Head from 'next/head'
import React from 'react'
import { GetServerSideProps } from 'next'
import PageLayout from '../components/PageLayout'
import OverallRatingCard from '../components/survey/OverallRatingCard'
import QuestionCard from '../components/survey/QuestionCard'
import SubmitSurveyButton from '../components/survey/buttons/SubmitSurveyButton'

/*
 * TODO: Taster Survey View
 * Refer to dynamic routing documentation here:
 * https://nextjs.org/docs/routing/dynamic-routes
 *
 * Should be virtually identical to Edit View, but with the following differences:
 * - no editable fields except response
 * - no create/delete
 * - submit button instead of save button
 * - no navbar
 *
 * Also may want to use server-side rendering or generation (SSR/SSG),
 * so use getServerSideProps or getStaticProps
 */

const SurveyForm = ({ survey }) => {
  // const router = useRouter()
  // Survey Data should be fetched through ServerSideProps or something
  // const { form_id } = router.query
  const question = {
    question: 'How was this sample overall?',
    questionID: 0,
    callback: function () {
      console.log(1)
    },
  }
  return (
    <PageLayout pageName="Project Name: Sample Name">
      <Head>
        <title>{/* Project Main View */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Survey Title */}

      {/* Star Rating Question Card - Immovable */}
      <OverallRatingCard {...question} />

      {/* Rest of the Cards */}
      {survey.map((question, idx) => (
        <QuestionCard key={`question-${idx}`} questionData={question} />
      ))}

      {/* Submit Survey Button */}
      <SubmitSurveyButton />
    </PageLayout>
  )
}

export default SurveyForm
