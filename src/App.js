import React from "react";
import Home from "./components/Homepage";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteFor from "./components/Write_for";
import PrivacyPolicy from "./components/Privacy_policy";
import Terms from "./components/Terms";
import PagenotFound from "./components/page_not_found";
import InstitutionBlog from "./components/Institution_blog";
import Blogs from "./components/Blogs";
import Password_bg from "./components/Password_bg";
import BlogAdmin from "./components/BlogAdmin";
import BlogAdd from "./components/Blog_add_page";
import ChildRequest from "./components/ChildRequest";
import WangaAmigosHome from "./components/wangaAmigos/WangaAmigosHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PagenotFound />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/write-for-us" element={<WriteFor />} />
          <Route path="/blog/:slugs" element={<InstitutionBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/reset-password" element={<Password_bg />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />
          <Route path="/add-blog" element={<BlogAdd />} />
          <Route path="/user-verify" element={<ChildRequest />} />
          <Route path="/wanga-amigos" element={<WangaAmigosHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
