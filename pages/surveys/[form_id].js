import { useRouter } from 'next/router'

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

import { useRouter } from 'next/router'
import Head from 'next/head'

export default function SurveyForm({ survey }) {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps or something
  const { form_id } = router.query

  return (
    <>
      <Head>
        <title>{/* Project Main View */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Survey Head Card */}
      {/* Star Rating Question Card - Immovable */}
      {/* Rest of the Cards */}
      {/* Submit Survey Button */}
    </>
  )
}

/* Server-side Rendering (SSR) */
export async function getServerSideProps({ params }) {
  // TODO: Fetch survey data

  // const req = await fetch(`http://localhost:3000/${params.project_id}.json`);
  // const data = await req.json();
  //
  return {
    props: { survey: data },
  }
}
