'use client';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import * as Yup from 'yup';
import axios from 'axios'
import toast from 'react-hot-toast'

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
        .min(3, 'Name must be atleast 3 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string().required('Password is required')
        .matches(/[A-Z]/, 'Password must contain atleast one uppercase letter')
        .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
        .matches(/[0-9]/, 'Password must contain atleast one number')
        .matches(/\W/, 'Password must contain atleast one special character')
        .matches(/^(?!.*\s).*$/, 'Password must not contain space character'),
    confirmPassword: Yup.string().required('Confirm Password is Required')
        .oneOf([Yup.ref('password'), null], 'Password must match')
});

const Signup = () => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const router = useRouter();

    const signupForm = useFormik({
        initialValues: {
          name:'',
          email:'',
          password:'',
        },
        onSubmit: (values, {resetForm}) => {
          console.log(values)
          
          axios.post('http://localhost:5000/user/add', values)
          .then((response) => {
            console.log(response.status)
            resetForm()
            toast.success('User added successfully')
            router.push('/login')
    
          }).catch((err) => {
            console.log(err)
            toast.error('Failed to add user')
          });
    
        },
        validationSchema: SignupSchema
      })

    return (
        <div className='bg-cover h-screen' style={{ backgroundImage: `url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/powerpoint-eco-green-background-design-template-5a7a4ed1af23c4cf95702c073101be1d_screen.jpg?ts=1697142653')` }}>

            <section className="text-gray-600 body-font relative ">
                <div className="container px-5 py-24 mx-auto">

                    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-10 rounded-lg">
                        <div className="flex flex-col text-center w-full mb-12">

                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Sign Up
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                            </p>
                        </div>

                        <form onSubmit={signupForm.handleSubmit}>
                            <div className="flex flex-wrap -m-2">


                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.name}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {signupForm.touched.name &&
                                            (<p className='text-sm text-red-500'>{signupForm.errors.name}</p>)
                                        }
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.email}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {signupForm.touched.email &&
                                            (<p className='text-sm text-red-500'>{signupForm.errors.email}</p>)
                                        }
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.password}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {signupForm.touched.password &&
                                            (<p className='text-sm text-red-500'>{signupForm.errors.password}</p>)
                                        }
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="confirmPassword" className="leading-7 text-sm text-gray-600">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.confirmPassword}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {signupForm.touched.confirmPassword &&
                                            (<p className='text-sm text-red-500'>{signupForm.errors.confirmPassword}</p>)
                                        }
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
