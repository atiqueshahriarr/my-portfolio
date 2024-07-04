import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MiddleTitle from "../Components/MiddleTitle";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8l1d434", "template_k52l9cu", form.current, {
        publicKey: "6H11cG0nPrFt7oQgK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="Contact"
      className="w-4/5 mx-auto my-10">
      <MiddleTitle titleName={"Contact"}></MiddleTitle>
      <p className="text-center my-4">If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
      <div className="my-6"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto shadow-md p-6 bg-white rounded-lg border">
        <div className="mb-4">
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            className="mt-2 block w-full border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 py-2"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="from_email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            className="mt-2 block w-full border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 py-2"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-2 block w-full border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 py-2 resize-none"
            rows="4"
            placeholder="Enter your message"
            required></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
