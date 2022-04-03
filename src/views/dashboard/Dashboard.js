import React from 'react'

import { CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

const Dashboard = () => {
  const tableExample = []

  return (
    <>
      {/* <WidgetsDropdown /> */}
      <CCard>
        <CCardBody>
          <CCardTitle>Wilkommen!</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the content.
          </CCardText>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
