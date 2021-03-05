import {
  Form,
  TextField,
  Submit,
  TextAreaField,
  Label,
  FieldError,
} from '@redwoodjs/forms'
import { useState } from 'react'
import SendEmailCell from '../SendEmailCell/SendEmailCell'

const Contact = () => {
  const [state, setState] = useState()
  const onSubmit = (data) => {
    console.log(data)
    setState(data)
  }
  return (
    <section className="text-gray-600 body-font relative ">
      <div className="text-center ">
        <h2 className="text-xs text-yellow-600 tracking-widest font-medium title-font mb-1">
          INQUIRE TODAY
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h1>
      </div>
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.2832046303461!2d120.59796564895504!3d15.221528219382455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ed8924800963%3A0xb0ba58cd6ffbfed3!2sMore%20Than%20A%20Chair%2C%20Incorporated!5e0!3m2!1sen!2sus!4v1614934337786!5m2!1sen!2sus"
            style={{ filter: ' contrast(1.2) opacity(0.8)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Sitio Libutad, Sta. Maria, Mabalacat City, Pampanga
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-yellow-500 leading-relaxed"
                href="mailto:ericsreyes0808@outlook.com"
              >
                ericsreyes0808@outlook.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                GLOBAL PHONE
              </h2>
              <p className="leading-relaxed">0997 436 9830</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                SMART PHONE
              </h2>
              <p className="leading-relaxed">0963 691 4380 </p>
            </div>
          </div>
        </div>
        <Form
          onSubmit={onSubmit}
          className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Get a Quote
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            If you have any questions or would like to request a special quote,
            get in touch with us!
          </p>
          <div className="relative mb-4">
            <Label
              name="name"
              className="leading-7 text-sm text-gray-600"
              errorClassName="leading-7 text-sm text-gray-600 error"
            >
              Name
            </Label>
            <TextField
              type="text"
              id="name"
              name="name"
              className="error w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              errorClassName="normal-case w-full bg-white rounded border border-gray-300 border-red-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              validation={{ required: true }}
            />
            <FieldError name="name" className="text-red-500" />
          </div>
          <div className="relative mb-4">
            <Label name="email" className="leading-7 text-sm text-gray-600">
              Email
            </Label>
            <TextField
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              errorClassName="normal-case w-full bg-white rounded border border-gray-300 border-red-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              validation={{ required: true }}
            />
            <FieldError name="email" className="normal-case text-red-500" />
          </div>
          <div className="relative mb-4">
            <Label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </Label>
            <TextAreaField
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              errorClassName="w-full bg-white rounded border border-gray-300 border-red-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              validation={{ required: true }}
            ></TextAreaField>
            <FieldError name="message" className="text-red-500" />
          </div>
          <Submit className="text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            {(state && (
              <SendEmailCell
                name={state.name}
                from={state.email}
                message={state.message}
              />
            )) ||
              'Send'}
          </Submit>
        </Form>
      </div>
    </section>
  )
}

export default Contact
