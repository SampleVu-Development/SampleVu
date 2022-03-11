import { useRouter } from 'next/router'
import Head from 'next/head'

/*
  TODO: Project Main View
  Shows user high level overview of Project
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

export default function ProjectSamples({ project }) {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id } = router.query

  return (
    <>
      <Head>
        <title>{/* Project Main View */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Navbar? Save for later */}
      {/* Project Main View */}
    </>
  )
}
