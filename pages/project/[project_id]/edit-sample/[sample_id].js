import { useRouter } from 'next/router'
import Head from 'next/head'

/*
  TODO: Edit Sample View for specific samples
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

export default function EditSample({ sample }) {
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
