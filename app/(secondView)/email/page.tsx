// 'use client'
//
//
//
// import emailjs from 'emailjs-com';
//
// function sendEmail(e) {
//     e.preventDefault();
//
//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
// }
//
// function App() {
//     return (
//         <div>
//             <h1>ارسال ایمیل</h1>
//             <form onSubmit={sendEmail}>
//                 <label>نام</label>
//                 <input type="text" name="name" />
//                 <label>ایمیل</label>
//                 <input type="email" name="email" />
//                 <label>پیام</label>
//                 <textarea name="message" />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// }
//
// export default App;