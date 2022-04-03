/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil,  cilTrash } from '@coreui/icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import store from 'src/store'
import API from 'src/service'
import PropTypes from 'prop-types'

const Table = () => {
  const status = store.getState().status
  let data = useSelector((state) => state.data).filter((obj) => obj.status === status)
  const get = () => {
    API.getArticle().then(res => {
      store.dispatch({
        type: 'set',
        data: res.data,
      })
    })
  }

  const trash = (event) => {
    API.deleteArticle(event.target.id).then(() => {
      get()
    })
  }
  return (
    <CCard className="mt-4">
      <CCardBody>
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Category</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {Object.keys(data).map((index, i) => {
              return (
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                  <CTableDataCell>{data[index].title}</CTableDataCell>
                  <CTableDataCell>{data[index].category}</CTableDataCell>
                  <CTableDataCell>
                    <Link
                      to="/edit"
                      onClick={() =>
                        store.dispatch({
                          type: 'set',
                          form: {
                            id: data[index].id,
                            title: data[index].title,
                            content: data[index].content,
                            category: data[index].category,
                          },
                        })
                      }
                    >
                      <CIcon icon={cilPencil} className="text-success"/>
                    </Link>
                    <a href="javascript:void(0)">
                      <CIcon icon={cilTrash} onClick={trash.bind(this)} id={data[index].id} className='text-danger' />
                    </a>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}
Table.propTypes = {
  status: PropTypes.string,
}
export default Table
