import { useRouter } from 'next/router'
import Head from 'next/head'

/*
  TODO: Project insights view for project members
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  TODO: Heading and charts

  Later...
  TODO: Validate user account
  TODO: Validate user permissions, otherwise redirect to "invalid permission" page
 */

export default function Insights({ project }) {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id } = router.query

  return (
    <>
      <Head>
        <title>{/* Sample */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Navbar? Save for later */}
      {/* Top Insights */}
      {/* Scrollable insights */}
    </>
  )
}
