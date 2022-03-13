// import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import { GetServerSideProps } from 'next'
import PageLayout from '../../components/PageLayout'

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

const SurveyForm = ({ survey: [] }) => {
  // const router = useRouter()
  // Survey Data should be fetched through ServerSideProps or something
  // const { form_id } = router.query

  return (
    <PageLayout>
      <Head>
        <title>{/* Project Main View */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Survey Head Card */}
      {/* Star Rating Question Card - Immovable */}
      {/* Rest of the Cards */}
      {/* Submit Survey Button */}
    </PageLayout>
  )
}

/* Server-side Rendering (SSR) */
export const getServerSideProps: GetServerSideProps = async ({ params: { form_id } }) => {
  // TODO: Fetch survey data
  // props sent through this function has Request information, including params
  // params thus includes form_id

  // const req = await fetch(`http://localhost:3000/${form_id}.json`);
  // const data = await req.json();
  //
  return {
    props: { survey: [] },
    // props: { survey: data },
  }
}

export default SurveyForm
