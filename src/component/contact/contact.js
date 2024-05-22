import React, { useState } from "react";
import "./contact.css"; // Ensure you have your CSS file in the same directory or adjust the path accordingly

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (formData.name && formData.email && formData.phone && formData.message) {
      // Handle form submission, e.g., send data to backend or show success message
      console.log("Form submitted:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Reset form submission status
      setFormSubmitted(false);
    } else {
      // If any field is not filled, set formSubmitted to true to display error messages
      setFormSubmitted(true);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left">
          <img
            src="https://source.unsplash.com/600x600/?smarthome"
            alt="Nature"
          />
        </div>
        <div className="right">
          <h1>Get In Touch With Us</h1>
          <h2>Contact Us</h2>
          <input
            type="text"
            className="field"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formSubmitted && !formData.name && (
            <span className="error">Name is required</span>
          )}
          <input
            type="email"
            className="field"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formSubmitted && !formData.email && (
            <span className="error">Email is required</span>
          )}
          <input
            type="tel"
            className="field"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formSubmitted && !formData.phone && (
            <span className="error">Phone is required</span>
          )}
          <textarea
            placeholder="Message"
            className="field"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {formSubmitted && !formData.message && (
            <span className="error">Message is required</span>
          )}
          <button className="btn" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
