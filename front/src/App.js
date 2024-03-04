import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Protected from "./components/Protected";
import Studadd from "./components/Studadd";
import Bookadd from "./components/Bookadd";
import Books from "./components/Books";
import Books_1 from "./components/Books_1";
import Protected1 from "./components/protected1";
import Protected2 from "./components/protected2";
import Error from "./error";
import Book2 from "./components/book2";
function App() {
  return (<>
  <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<Protected/>}>
         <Route element={<Protected1/>}>
           <Route path="/admin" element={<Admin />}>
              <Route path="/admin/studadd" element={<Studadd/>} />
              <Route path="/adminbookadd" element={<Bookadd/>} />
              <Route path="/admin/books" element={<Books/>} />
           </Route>
         </Route>
         <Route element={<Protected2/>}>
           <Route path="/book_1" element={<Books_1/>}></Route>
           <Route path="/book2/:id" element={<Book2/>}></Route>
         </Route>
      </Route>
      <Route path="/*" element={<Error/>}></Route>
   </Routes>
  </>);
}

export default App;
