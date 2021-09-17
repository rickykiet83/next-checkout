import Layout from '../components/Layout';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const { code } = router.query;
  console.log(code);

  return (
    <>
      <Layout>
        <main>
          <div className='py-5 text-center'>
            <h2>Welcome</h2>
            <p className='lead'>has invited you to buy these products!</p>
          </div>
          <div className='row g-5'>
            <div className='col-md-5 col-lg-4 order-md-last'>
              <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-primary'>Products</span>
              </h4>
              <ul className='list-group mb-3'>
                <li className='list-group-item d-flex justify-content-between lh-sm'>
                  <div>
                    <h6 className='my-0'>Product name</h6>
                    <small className='text-muted'>Brief description</small>
                  </div>
                  <span className='text-muted'>$12</span>
                </li>
                <li className='list-group-item d-flex justify-content-between'>
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
            </div>
            <div className='col-md-7 col-lg-8'>
              <h4 className='mb-3'>Personal Info</h4>
              <form className='needs-validation' noValidate>
                <div className='row g-3'>
                  <div className='col-sm-6'>
                    <label htmlFor='firstName' className='form-label'>
                      First name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='First Name'
                      defaultValue=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid first name is required.
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='lastName' className='form-label'>
                      Last name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      placeholder='Last Name'
                      defaultValue=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid last name is required.
                    </div>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='username' className='form-label'>
                      Username
                    </label>
                    <div className='input-group has-validation'>
                      <span className='input-group-text'>@</span>
                      <input
                        type='text'
                        className='form-control'
                        id='username'
                        placeholder='Username'
                        required
                      />
                      <div className='invalid-feedback'>
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      required
                      placeholder='you@example.com'
                    />
                  </div>
                  <div className='col-12'>
                    <label htmlFor='address' className='form-label'>
                      Address
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='1234 Main St'
                      required
                    />
                  </div>

                  <div className='col-md-5'>
                    <label htmlFor='country' className='form-label'>
                      Country
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='country'
                      placeholder='Country'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor='state' className='form-label'>
                      State
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='city'
                      placeholder='City'
                    />
                  </div>
                  <div className='col-md-3'>
                    <label htmlFor='zip' className='form-label'>
                      Zip
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='zip'
                      placeholder='zip'
                      required
                    />
                  </div>
                </div>
                <hr className='my-4' />
                <button className='w-100 btn btn-primary btn-lg' type='submit'>
                  checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
