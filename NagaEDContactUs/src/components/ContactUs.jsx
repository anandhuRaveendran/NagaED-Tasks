/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Input validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    setError("");

    // Send data to the backend
      try {
        console.log('testing',formData)
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log(formData);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      {" "}
      <section className="bg-white my-1 py-5 ">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <p className="font-medium text-purple-400 ">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Get in touch
            </h1>
          </div>
          <div className="text-center">
            <p className="font-medium text-purple-400">
              OUR TEAM OF EXPERTS CAN HELP ANSWER ANY QUESTIONS YOU MIGHT HAVE.
                      </p>
                      <p className="font-medium text-blue-400 mt-2">
                      PLEASE FILL OUT THE FORM BELOW AND A CONSULTANT WILL RESPOND
                      SHORTLY.
                      </p>

          </div>
          <div className="grid grid-cols-1 gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-purple-400 rounded-full bg-gray-300/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-purple-400 ">Hello@nagaed.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-purple-400 rounded-full bg-gray-300/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 ">
                Office
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-purple-400 ">
                NagaEd, LK Vizo Complex, Secretariat Road Kohima, Nagaland
                797001 Landmark: Above Amaris Restaurant
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-purple-400 rounded-full bg-gray-300/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-purple-400 ">+91-7005991853</p>
            </div>
                  </div>
                  <div className="container m-auto max-w-2xl py-2">
              <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                    Leave us your info
                  </h2>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border rounded w-full py-2 px-3 mb-2"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border rounded w-full py-2 px-3 mb-2"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      className="border rounded w-full py-2 px-3"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                                  <div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                  {success && <p style={{ color: 'green' }}>{success}</p>}
                    <button
                      className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                      type="submit"
                      
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
