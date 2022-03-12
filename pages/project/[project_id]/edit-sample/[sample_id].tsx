import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

/*
  TODO: Edit Sample View for specific samples
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const EditSample = ({ sample: [] }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id, sample_id } = router.query

  return (
    <>
      <Head>
        <title>{/* Sample */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Navbar? Save for later */}
      {/* Sample Form */}
      {/* Save Sample Button */}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // TODO: Fetch survey data

  // const req = await fetch(`http://localhost:3000/${params.project_id}.json`);
  // const data = await req.json();
  //
  return {
    props: { sample: [] },
  }
}

export default EditSample
