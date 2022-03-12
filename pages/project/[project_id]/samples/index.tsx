import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

/*
  TODO: Project Samples List View
  Shows user all samples (if admin) or all submitted samples (if vendor)
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const ProjectSamples = ({ project: [] }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id } = router.query

  return (
    <>
      <Head>
        <title>{/* Project Samples */}</title>
        {/* Other Metadata */}
      </Head>
      {/* Navbar? Save for later */}
      {/* Samples View */}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const res = await fetch("http://localhost:3000/api/drafts")
  // const drafts = await res.json()
  return {
    props: { samples: [] },
  }
}

export default ProjectSamples
