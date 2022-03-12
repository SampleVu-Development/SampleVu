import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

/*
  TODO: Edit Survey View for project admins
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  TODO: Enable Drag and Drop

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const Survey = ({ survey: [] }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  // const { project_id } = router.query

  return (
    <>
      <Head>
        <title>{/* SampleVu Edit Survey Title */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Navbar? Save for later */}
      {/* Survey Head Card */}
      {/* Star Rating Question Card - Immovable */}
      {/* Rest of the Cards */}
      {/* Add Question Button */}
      {/* Save Survey Button */}
    </>
  )
}

/* Server-side Rendering (SSR) */
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // TODO: Fetch survey data

  // const req = await fetch(`http://localhost:3000/${params.project_id}.json`);
  // const data = await req.json();
  //
  return {
    props: { survey: [] },
  }
}

export default Survey
