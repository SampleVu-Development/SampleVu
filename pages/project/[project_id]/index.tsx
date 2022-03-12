import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

/*
  TODO: Project Main View
  Shows user high level overview of Project
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const ProjectView = ({ project: [] }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch("http://localhost:3000/")
  // const drafts = await res.json()
  return {
    props: { project: [] },
  }
}

export default ProjectView
