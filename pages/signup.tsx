/*
  TODO: Signup View

  Use OAuth to allow users to create accounts using email/password
  Also offers Next/Link to Login
 */

import Head from 'next/head'
import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'

const SignUp: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <PageLayout>
      <Head>
        <title>{/* SampleVu Signup */}</title>
        {/* Other Metadata */}
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
        {/* SampleVu Logo */}
        {/* Sign-up form */}
        {/* Sign-up button */}
        {/* Login link */}
      </div>
    </PageLayout>
  )
}

export default SignUp
