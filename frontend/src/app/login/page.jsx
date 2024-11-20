'use client';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string().required('Password is required')

});

const login = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(users);

      const matchedUser = users.find(user => {
        user.email === values.email && user.password === values.password
      })

      if (matchedUser !== null) {
        localStorage.setItem('authenticated', JSON.stringify(values));
        toast.success('Loggedin Successfully');
        window.location = '/search'
        resetForm();
      } else {
        toast.error('Login Failed');
      }
    },
    validationSchema: LoginSchema
  })
  return (

    <div className='bg-cover' style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-minimalistic-park-nature-advertising-background-backgroundfreshnaturalgreenenvironmental-protectioncare-for-image_73964.jpg')` }} >

      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Our enterprise will not hurt the environment
            </h1>
            <p className="leading-relaxed mt-4">
              Go green with our products</p>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              LOGIN
            </h2>
            <form onSubmit={loginForm.handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {loginForm.touched.email &&
                  (<p className='text-sm text-red-500'>{loginForm.errors.email}</p>)
                }
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {loginForm.touched.password &&
                  (<p className='text-sm text-red-500'>{loginForm.errors.password}</p>)
                }
              </div>
              <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                login
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  )
}


export default login