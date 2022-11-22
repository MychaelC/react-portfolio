// import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   // Declare status element and setup data state obj
//   const statusEl = document.getElementById("status");

//   const [formData, setFormData] = useState({
//     fromName: "",
//     from_email: "",
//     subjectText: "",
//     message: "",
//   });
//   const { fromName, from_email, subjectText, message } = formData;

//   //Form submission data
//   const handleSubmit = (e) => {
//     document.getElementById("email-status").textContent = "";
//     e.preventDefault();
//     if (
//       fromName === "" ||
//       from_email === "" ||
//       subjectText === "" ||
//       message === ""
//     ) {
//       statusEl.innerText = "Failed to send message please complete all fields.";
//       statusEl.style.color = "gray";
//     } else {
//       if (validateEmail(from_email)) {
//         emailjs.send("service_2we3x4d", "template_9cd95hl", {
//           from_name: fromName,
//           from_email: from_email,
//           msg: message,
//           subjectText: subjectText,
//         });

//         document.getElementById("contact-form").reset();

//         statusEl.innerText = "Message sent successfully.";
//         statusEl.style.color = "light gray";
//         setTimeout(() => {
//           statusEl.innerText = "";
//         }, 2000);
//       } else {
//         statusEl.innerText = "Email format not valid, please update.";
//         statusEl.style.color = "#ad3d3d";
//       }
//     }
//   };

//   // Form data capture as it is entered
//   const storeData = (e) => {
//     document.getElementById("status").textContent = "";
//     document.getElementById("email-status").textContent = "";

//     if (e.target.name === "from_email") {
//       const emailStatusEl = document.getElementById("email-status");

//       if (e.target.value === "") {
//         emailStatusEl.innerText = "";
//       } else {
//         if (validateEmail(e.target.value)) {
//           emailStatusEl.innerText = "Valid Email.";
//           emailStatusEl.style.color = "light gray";
//         } else {
//           emailStatusEl.innerText = "Email format not valid, please update.";
//           statusEl.style.color = "#ad3d3d";
//         }
//       }
//     }
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const updateEl = (e, errorPlaceholder, defaultPlaceholder, id) => {
//     if (e.target.value === "") {
//       document.getElementById(id).placeholder = errorPlaceholder;
//       document.getElementById(id).style.border = "2px solid gray";
//     } else {
//       document.getElementById(id).placeholder = defaultPlaceholder;
//       document.getElementById(id).style.border = "2px solid transparent";
//     }
//   };
//   const checkForm = (e) => {
//     if (e.target.name === "fromName") {
//       updateEl(e, "Full name Required*", "Full name*", "fromName");
//     }
//     if (e.target.name === "from_email") {
//       updateEl(e, "E-mail Required*", "E-mail*", "from_email");
//     }
//     if (e.target.name === "subjectText") {
//       updateEl(e, "Subject Required*", "Subject*", "subjectText");
//     }
//     if (e.target.name === "message") {
//       updateEl(e, "Message Required*", "Message*", "msg");
//     }
//   };

//   emailjs.init("user_NZworZRz4STt_wOpy");

//   return (
//     <>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <h1 id="main-section-header">Contact</h1>
//         <hr id="main-section-hr" />
//         <div className="form-inner-container">
//           <input
//             onBlur={(e) => checkForm(e)}
//             onChange={storeData}
//             className="name"
//             type="text"
//             name="fromName"
//             id="fromName"
//             placeholder="Full name*"
//           />
//           <input
//             onBlur={(e) => checkForm(e)}
//             onChange={storeData}
//             name="from_email"
//             id="from_email"
//             className="email"
//             type="email"
//             placeholder="E-mail*"
//           />
//           <input
//             onBlur={(e) => checkForm(e)}
//             onChange={storeData}
//             name="subjectText"
//             id="subjectText"
//             className="subject"
//             type="text"
//             placeholder="Subject*"
//           />
//           <textarea
//             onBlur={(e) => checkForm(e)}
//             onChange={storeData}
//             name="message"
//             id="msg"
//             placeholder="Message*"
//           ></textarea>
//         </div>
//         <p id="email-status"></p>
//         <p id="status"></p>
//         <button id="sendBtn">Send</button>
//       </form>
//     </>
//   );
// };

// export default Contact;
