import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react'
import React from 'react'
import { useSelector } from 'react-redux'

// Log the initial state
const Preview = () => {
  let data = useSelector((state) => state.data).filter((obj) => obj.status === 'publish')
  return (
  <>
    <CRow>
      {Object.keys(data).map((index) => {
        return <CCol className='col-6 mb-3' key={index}>
            <CCard>
              <CCardHeader>
                {data[index].title}
              </CCardHeader>
              <CCardBody>
                {data[index].content}
              </CCardBody>
              <CCardFooter>
                {data[index].category}
              </CCardFooter>
            </CCard>
          </CCol>
      })}
    </CRow>
  </>
  )
}

export default Preview
