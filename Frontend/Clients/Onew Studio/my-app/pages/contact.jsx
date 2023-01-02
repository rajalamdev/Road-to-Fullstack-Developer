import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

export default function Contact() {

  const formData = {}
  const [success, setSuccess] = useState(false)
  // const [success, setSuccess] = useState(false)

  const formSubmit = async (e) => {
    e.preventDefault(); 
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return false

      formData[field.name] = field.value;
      field.value = ""
    });

    await sendContactForm(formData)
  }

  return (
    <div className="py-36 flex gap-20 flex-col sm:flex-row items-center">
      <div id="alert-3" className={`fixed z-50 transition-all duration-200 left-4 right-4 ${!success ? "-top-full" : "top-2"} md:left-40 md:right-40 flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert`}>
        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
          <a href="#" className="font-semibold underline hover:text-green-800 dark:hover:text-green-900">Success!</a> Your message has been delivered.
        </div>
        <button onClick={() => setSuccess(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
        <div className="sm:w-1/2 w-[80%]">
          <h1 className="text-2xl sm:text-3xl text-header-secondary font-bold">
            Got a project in <span className="block text-header-primary">mind?</span>
          </h1>
          <div>
            <Image src="/contact.png" width={100} height={100} layout="responsive" />
          </div>
        </div>
        <div className="sm:w-1/2 w-[80%]">
          <form className="space-y-3" onSubmit={(e) => {
            formSubmit(e)
            setSuccess(true)
            setTimeout(() => {
              setSuccess(false)
            }, 2000)
          }}>
            <div className="flex gap-3 flex-wrap">
              <label htmlFor="name" className="flex flex-col gap-2">
                <span className="text-xs text-header-secondary">Your Name</span>
                <input type="text" name="name" id="name" className="bg-bg-gray px-4 py-2 w-full rounded-lg placeholder:text-xs placeholder:sm:text-sm" placeholder="Name" required  />
              </label>
              <label htmlFor="email" className="flex flex-col gap-2">
                <span className="text-xs text-header-secondary">Your Name</span>
                <input type="email" name="email" id="email" className="bg-bg-gray px-4 py-2 w-full rounded-lg placeholder:text-xs placeholder:sm:text-sm" placeholder="Email" required />
              </label>
            </div>
            <div>
              <label htmlFor="message" className="flex flex-col gap-2">
                <span className="text-xs text-header-secondary">Message</span>
                <textarea id="message" name="message" maxlength="200" className="bg-bg-gray px-4 py-2 w-full h-40 rounded-lg text-xs sm:text-sm" required >
                  Hello
                </textarea>
              </label>
            </div>
            <button className="rounded-lg text-sm bg-header-primary py-2 px-4 text-white text-shadow">Submit</button>
          </form>
        </div>
      </div>
  )
}
