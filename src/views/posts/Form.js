import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import API from 'src/service'

const Form = ({ title }) => {
  const dispatch = useDispatch()
  let form = useSelector((state) => state.form)

  const get = () => {
    API.getArticle().then(res => {
      dispatch({
        type: 'set',
        data: res.data,
      })
    })
  }

  const add= () => {
    API.addArticle(form).then(() => {
      get()
    })
  }

  const update = () => {
    API.updateArticle(form, form.id).then(() => {
      get()
    })
  }

  const handleClick = () => {
    if (form.id) {
      update()
    } else {
      add()
    }
  }
  const handleChange = (event) => {
    let input = { ...form }
    let value = event.target.value
    let name = event.target.name

    input[name] = value

    setForm(input)
  }

  const setStatus = (event) => {
    let input = { ...form }
    input['status'] = event.target.id
    setForm(input)
  }
  const setForm = (input) => {
    dispatch({
      type: 'set',
      form: input,
    })
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{title}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="title">Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={form.title ? form.title:''}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="content">Content</CFormLabel>
                <CFormTextarea
                  id="content"
                  name="content"
                  rows="5"
                  placeholder="Content"
                  value={form.content ? form.content:''}
                  onChange={handleChange}
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="category">Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={form.category ? form.category:''}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            <Link to="/posts" onClick={handleClick} onMouseOver={setStatus} id='publish' className="btn btn-primary">
              Publish
            </Link>
            <Link to="/posts" onClick={handleClick} onMouseOver={setStatus} id='draft' className="btn btn-success mx-2">
              Draft
            </Link>
            <Link to="/posts" className="btn btn-danger">
              Cancel
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
Form.propTypes = {
  title: PropTypes.string,
}

export default Form
