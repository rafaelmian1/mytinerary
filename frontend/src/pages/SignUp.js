import '../styles/signup.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Loader from '../components/Hero/Loader'
import usersActions from '../redux/actions/usersActions'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

const SignUp = (props) => {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    img: '',
    country: '',
  })

  useEffect(() => {
    props.getCountries()
    // eslint-disable-next-line
  }, [])

  const signUpHandler = async (e) => {
    let errors = await props.signUp(user)
    errors && setErrors(errors.map((err) => err.field))
  }

  const responseGoogle = async (response) => {
    if (response.error) return false
    let googleUser = {
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      img: response.profileObj.imageUrl,
      country: 'Argentina',
      google: true,
    }
    await props.signUp(googleUser)
  }

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  if (props.user) {
    return (
      <div className='cities bg-dark text-light fs-1'>
        <Loader />
      </div>
    )
  }
  return (
    <div className='contenedorCities min-vh-100'>
      <div className='container cities'>
        <div className='formCont p-3 '>
          <h1 className='form'>Create an account</h1>
          <h3 className='fs-2 mb-4 form'>
            Please, complete the fields to sign up
          </h3>
          <input
            className={`${
              errors.includes('first_name') && 'blurred'
            } inputSignUp mb-2`}
            type='text'
            name='first_name'
            placeholder='First Name'
            autoComplete='false'
            value={user.first_name}
            onChange={handleInput}
          />
          <input
            className={`${
              errors.includes('last_name') && 'blurred'
            } inputSignUp mb-2`}
            type='text'
            name='last_name'
            placeholder='Last Name'
            autoComplete='false'
            value={user.last_name}
            onChange={handleInput}
          />
          <input
            className={`${
              errors.includes('email') && 'blurred'
            } inputSignUp mb-2`}
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='false'
            value={user.email}
            onChange={handleInput}
          />
          <input
            className={`${
              errors.includes('password') && 'blurred'
            } inputSignUp mb-2`}
            type='password'
            name='password'
            placeholder='Password (8 characters or more)'
            autoComplete='false'
            value={user.password}
            onChange={handleInput}
          />
          <input
            className={`${
              errors.includes('img') && 'blurred'
            } inputSignUp mb-2`}
            type='text'
            name='img'
            placeholder='Profile picture URL'
            autoComplete='false'
            value={user.img}
            onChange={handleInput}
          />
          <select
            className={`${errors.includes('country') && 'blurred'} inputSignUp`}
            name='country'
            id='countrySelect'
            value={user.country}
            onChange={handleInput}
          >
            <option value='choose' defaultChecked>
              Choose your country
            </option>
            {props.countries.map((country, index) => (
              <option className='text-center' key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <button
            type='button'
            className='googleButton error'
            onClick={signUpHandler}
          >
            <span>Sign up</span>
          </button>
          <p className='my-2 fw-bold'>or</p>
          <GoogleLogin
            clientId='82723603056-o12gv1mu2alua7qnd7igq2rlrj6he3gg.apps.googleusercontent.com'
            buttonText={
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  fill='currentColor'
                  className='bi bi-google m-2 pb-1'
                  viewBox='0 0 16 16'
                >
                  <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                </svg>
                Sign up with Google
              </>
            }
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className='googleButton error'
          />
          <h4 className='mt-4 fw-bold fs-5'>
            Already have an account?
            <Link to='/login'>
              <span> Log in here!</span>
            </Link>
          </h4>
        </div>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.users.countries,
    user: state.users.user,
  }
}

const mapDispatchToProps = {
  getCountries: usersActions.getCountries,
  signUp: usersActions.signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
