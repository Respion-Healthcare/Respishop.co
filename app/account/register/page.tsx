
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage(){

  const router = useRouter()

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (e:any)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleRegister = (e:any)=>{

    e.preventDefault()

    if(form.password !== form.confirmPassword){
      alert("Passwords do not match")
      return
    }

    localStorage.setItem("user",JSON.stringify(form))
    alert("Account created successfully")

    router.push("/account/login")

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Left */}

        <div className="bg-blue-600 text-white p-10 hidden md:flex flex-col justify-center">

          <h2 className="text-3xl font-semibold mb-4">
            Looks like you're new here!
          </h2>

          <p className="text-sm">
            Sign up with your details to start shopping.
          </p>

        </div>

        {/* Form */}

        <div className="p-8">

          <form onSubmit={handleRegister} className="space-y-4">

            <input
              required
              name="name"
              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded-md"
              onChange={handleChange}
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-md"
              onChange={handleChange}
            />

            <input
              required
              name="phone"
              placeholder="Phone Number"
              className="w-full border px-4 py-3 rounded-md"
              onChange={handleChange}
            />

            <input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 rounded-md"
              onChange={handleChange}
            />

            <input
              required
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border px-4 py-3 rounded-md"
              onChange={handleChange}
            />

            <button className="w-full bg-orange-500 text-white py-3 rounded-md">
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}