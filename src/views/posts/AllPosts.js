import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import Table from './Table'

const AllPosts = () => {
  const dispatch = useDispatch()
  dispatch({ type: 'set', status: 'publish' })
  const [activeKey, setActiveKey] = useState(1)
  const data = useSelector((state) => state.data)
  const count = {
    publish: data.filter((obj) => obj.status === 'publish'),
    draft: data.filter((obj) => obj.status === 'draft'),
    trash: data.filter((obj) => obj.status === 'trash')
  }
  return (
    <>
      <CNav variant="pills" role="tablist">
        <CNavItem>
          <CNavLink
            href='javascript:void(0)'
            active={activeKey === 1}
            onClick={() => {
              setActiveKey(1)
              dispatch({ type: 'set', status: 'publish' })
            }}
          >
            Publish ({count.publish.length})
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href='javascript:void(0)'
            active={activeKey === 2}
            onClick={() => {
              setActiveKey(2)
              dispatch({ type: 'set', status: 'draft' })
            }}
          >
            Draft ({count.draft.length})
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href='javascript:void(0)'
            active={activeKey === 3}
            onClick={() => {
              setActiveKey(3)
              dispatch({ type: 'set', status: 'trash' })
            }}
          >
            Trash ({count.trash.length})
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <Table />
      </CTabContent>
    </>
  )
}
export default AllPosts
