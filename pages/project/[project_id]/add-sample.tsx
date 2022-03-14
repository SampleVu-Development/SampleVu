import { useRouter } from 'next/router'
import React from 'react'
import PageLayout from '../../../components/PageLayout'

/*
  TODO: Create Sample View for new samples
  TODO: Fill PropTypes and QueryTypes -- this will be the data retrieved

  Later...
  TODO: Validate user account
  TODO: Validate user edit permissions, otherwise redirect to "invalid permission" page
 */

const CreateSample: React.FC = () => {
  const router = useRouter()
  const { project_id } = router.query

  return (
    <PageLayout pageName="Add Sample">
      {/* Sample Form */}
      {/* Submit Sample Button */}
    </PageLayout>
  )
}

export default CreateSample
