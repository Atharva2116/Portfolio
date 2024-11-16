import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "80a71e49-96d0-455e-aeca-0d64cf3661e2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully");
        e.target.reset(); // Reset the form fields after successful submission
      } else {
        console.log("Error", data);
        setResult(data.message); // Display the error message from the API
      }
    } catch (error) {
      console.log("Error", error);
      setResult("There was an error sending the message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-8">Contact Me</h2>
        <form
          className="w-full max-w-lg mx-auto"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-left mb-2 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-sm font-bold">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
