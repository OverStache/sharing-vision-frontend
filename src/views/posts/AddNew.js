import React from 'react'
import store from 'src/store'
import Form from './Form'

const AddNew = () => {
  store.dispatch({ type: 'set', form: {} })
  return <Form title={'Add New Post'} />
}

export default AddNew
