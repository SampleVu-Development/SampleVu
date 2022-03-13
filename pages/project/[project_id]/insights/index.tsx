import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import PageLayout from '../../../../components/PageLayout'

/*
  TODO: Project insights view for project members
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  TODO: Heading and charts

  Later...
  TODO: Validate user account
  TODO: Validate user permissions, otherwise redirect to "invalid permission" page
 */

const Insights = ({ data: [] }) => {
  const router = useRouter()
  // Survey Data should be fetched through ServerSideProps
  const { project_id } = router.query

  return (
    <PageLayout>
      {/* Top Insights */}
      {/* Scrollable insights */}
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const res = await fetch("http://localhost:3000/api/")
  // const sample = await res.json()
  return {
    props: { data: [] },
  }
}

export default Insights
