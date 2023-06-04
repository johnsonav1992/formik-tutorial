// Libraries
import { 
  Form
  , Formik
  , Field
  , ErrorMessage 
} from 'formik'
  import * as Yup from 'yup'

// Utils
import { phoneRegex } from './utils'
import { formFields } from './formFields'

// Styles
import './App.css'

function App() {

  const classes = {
    field: {
      width: '90%'
      , minHeight: '1.25rem'
    }
    , form: { 
      display: 'flex'
      , flexDirection: 'column'
      , alignItems: 'flex-start'
      , gap: '1rem'
      , padding: '2rem'
      , minWidth: 300
      , boxShadow: '0px 2px 10px 2px black'
      , borderRadius: '.5rem'
    }
    , error: {
      color: 'red'
    }
  }

  const initialValues = {
    firstName: ''
    , lastName: ''
    , email: ''
    , phone: ''
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup
      .string()
      .required('First name required')
    , lastName: Yup
      .string()
      .required('Last name required')
    , email: Yup
      .string()
      .email('Must enter a valid email')
      .required('Email required')
    , phone: Yup
      .string()
      .matches(phoneRegex, 'Must enter a valid phone number')
      .required('Phone number is required')
  })

  const handleSubmit = (values) => {
    console.log('do stuff with this', values)
  }

  return (
    <>
      <h1>
        {'<Formik /> Tutorial'}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ handleSubmit }
      >
        { () => (
          <Form 
            style={ classes.form }
          >
            <label htmlFor='firstName'>
              First Name
            </label>
            <Field 
              type='text' 
              name='firstName'
              style={ classes.field }
            />
            <ErrorMessage 
              name='firstName' 
              style={ { color: 'red' } } 
              component='div' 
            />
            <label htmlFor='lasstName'>
              Last Name
            </label>
            <Field 
              type='text' 
              name='lastName'
              style={ classes.field }
            />
            <ErrorMessage 
              name='lastName' 
              style={ { color: 'red' } } 
              component='div' 
            />
            <label htmlFor='email'>
              Email
            </label>
            <Field 
              type='text' 
              name='email'
              style={ classes.field }
            />
            <ErrorMessage 
              name='email' 
              style={ { color: 'red' } } 
              component='div' 
            />
            <label htmlFor='phone'>
              Phone
            </label>
            <Field 
              type='text' 
              name='phone'
              style={ classes.field }
            />
            <ErrorMessage 
              name='phone' 
              style={ { color: 'red' } } 
              component='div' 
            />
            {/* { formFields.map(field => (
              <>
                <label htmlFor={ field.name }>
                  { field.name }
                </label>
                <Field 
                  type={ field.type } 
                  name={ field.name }
                  style={ classes.field }
                />
                <ErrorMessage 
                  name={ field.name }
                  style={ classes.error } 
                  component='div' 
                />
              </>
            ))} */}
            <button type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default App
