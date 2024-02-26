import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Error from "./Error";
import Home from "./Home";
import Contact from "./contact";
import ProductDetels from "./productDetels";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:id", element: <ProductDetels /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// // import Contact from "./Contact";
// import Contact from "./contact";
// import "./App.css";
// // import Navbar from "./Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./Navbar";
// import Error from "./Error";
// import ProductDetels from "./productDetels";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     errorElement: <Error />,
//     children: [
//       { path: "/home", element: <Home /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/product/:id", element: <ProductDetels /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
// return (
//   <>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<h1>page not found</h1>} />
//       </Routes>
//     </Router>
//   </>
// );

// // import logo from './logo.svg';
// import "./App.css";
// import Home from "./Home";
// import Contact from "./contact";
// // import { RouterProvider,BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// // import { createBrowserRouter } from "react-router-dom";

// function App() {
//   // const router = createBrowserRouter([
//   //   {
//   //     path: "/",
//   //     element: <h1>default page</h1>,
//   //   },
//   //   {
//   //     path: "/home",
//   //     element: <Home />,
//   //   },
//   //   {
//   //     path: "/contact",
//   //     element: <Contact />,
//   //   },
//   // ]);
//   // console.log(router);
//   return (
//     <>
//       <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </>
//   );
// }

// export default App;
