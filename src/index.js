import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './about';
// import MyNav from './nav.js';



// export default function Tpp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MyNav />}>
//           {/* <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} /> */}
//           <Route path="about" element={<About />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
