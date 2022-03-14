/*
  TODO: Login View

  Use OAuth to allow users to login using email/password
  Also offers Next/Link to Sign-up and possibly forgot password procedures
 */

import Head from 'next/head'
import React from 'react'
import PageLayout from '../components/PageLayout'

const Login: React.FC = () => {
  return (
    <PageLayout pageName="Sign In">
      <Head>
        <title>{/* SampleVu Login */}</title>
        {/* Other Metadata */}
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
        {/* SampleVu Logo */}
        {/* Login form */}
        {/* Login button */}
        {/* Sign-up link */}
        {/* Forgot password link */}
      </div>
    </PageLayout>
  )
}

// GetStaticProps?

export default Login
