import React, { useState } from "react";
import apiClient from "../services/Contactconfig";
import blackbg from "./../assets/brown-bg.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import FormInput from "./FormInput"; 

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post("/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="bg-tyellow text-black">
      <div className="relative w-screen h-full">
        <img src={blackbg} alt="Background" className="w-screen h-full left-0 top-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold">Got a project or an opportunity? Let’s make it happen.</h1>
          <p className="text-lg mt-2">Feel free to reach out below</p>
        </div>
      </div>

      <div className="text-center relative py-12 bg-tyellow overflow-hidden">
        <SectionTitle backText="Contact" title="Contact Me" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl text-tblack font-bold mb-4">Get In Touch</h2>
          <div className="mb-4 text-tblack">
            <p className="text-lg"><strong>Address:</strong> Green County Soc. Phase-1, Phursungi</p>
            <p className="text-lg"><strong>Email:</strong> saadgipandey@gmail.com</p>
            <p className="text-lg"><strong>Phone:</strong> +91 9561962511</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="text-3xl hover:text-gray-800 cursor-pointer" />
            <FaInstagram className="text-3xl hover:text-gray-800 cursor-pointer" />
          </div>
        </div>


        <div className="bg-tyellow p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput label="Your Name" name="name" value={formData.name} onChange={handleChange} />
            <FormInput label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <FormInput label="Your Subject" name="subject" value={formData.subject} onChange={handleChange} />
            <FormInput label="Your Message" name="message" value={formData.message} onChange={handleChange} isTextarea />

            <button type="submit" className="w-full bg-tblack text-white py-3 rounded-lg hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
