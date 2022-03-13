import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import PageLayout from '../../../../components/PageLayout'

/*
  TODO: Sample View for specific samples
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const Sample = ({ sample: [] }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id, sample_id } = router.query

  return <PageLayout>{/* Sample Information */}</PageLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const res = await fetch("http://localhost:3000/api/")
  // const sample = await res.json()
  return {
    props: { sample: [] },
  }
}

export default Sample
