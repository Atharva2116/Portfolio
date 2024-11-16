import React from 'react';

function Internship() {
  return (
    <section id="internship" className="bg-white py-12">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-6">Internship</h2>
        <div className='flex items-center justify-center '>
          <div className="rounded-lg border  m-6 border-gray-300 p-4 shadow-md max-w-lg  bg-gray-100   hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Intern at GDB Learning Solutions</h3>
            <p className="font-semibold">Chatbot Development (February - April 2024)</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Utilized Google Dialogflow to create a chatbot for assisting students with admission inquiries for Pune University.</li>
              <li>Designed and implemented conversation flows using intents and entities, ensuring a smooth user interaction experience.</li>
              <li>Structured and organized college information in JSON format for efficient data entry and retrieval.</li>
              <li>Developed a responsive front-end for a website featuring chatbot integration.</li>
            </ul>
            <p className="font-semibold mt-4">Tech Stack: ReactJS, Express, NodeJS</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Internship;
