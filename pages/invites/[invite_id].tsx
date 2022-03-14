import { useRouter } from 'next/router'
import Head from 'next/head'
import PageLayout from '../../components/PageLayout'

/*
 * TODO: Invite View
 * Refer to dynamic routing documentation here:
 * https://nextjs.org/docs/routing/dynamic-routes
 *
 * Sends a request through invite API route to add user to project if user exists,
 * otherwise directs user to sign-up/login to create account
 *
 *
 * Also may want to use server-side rendering or generation (SSR/SSG),
 * so use getServerSideProps or getStaticProps
 */

const InvitedView = () => {
  const router = useRouter()
  const { invite_id } = router.query

  return (
    <PageLayout pageName="">
      <Head>
        <title>You've been invited to a SampleVu project!</title>
        {/*  Other metadata */}
      </Head>
      {/* Invited logic, directs user to sign-in or sign-up if not logged in  */}
    </PageLayout>
  )
}

export default InvitedView
