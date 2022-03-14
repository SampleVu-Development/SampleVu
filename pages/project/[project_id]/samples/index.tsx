// import { useRouter } from 'next/router'
// import Head from 'next/head'
import { GetServerSideProps } from 'next'
import PageLayout from '../../../../components/PageLayout'

/*
  TODO: Project Samples List View
  Shows user all samples (if admin) or all submitted samples (if vendor)
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const ProjectSamples = ({ project: [] }) => {
  // const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  // const { project_id } = router.query

  return <PageLayout pageName="Samples">{/* Samples View */}</PageLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params: { project_id } }) => {
  // const res = await fetch("http://localhost:3000/api/drafts")
  // const drafts = await res.json()
  return {
    props: { samples: [] },
  }
}

export default ProjectSamples
