import { useEffect, useContext } from 'react'
import './App.css'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
 

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // 
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show krna hai

      const tag = location.pathname.split("/").at(-1);
      fetchBlogsPOsts(Number(page), tag); 
    }
    else if(location.pathname.includes("categories")){
      // iska matlab category wala page show krna hai
      const category = location.pathname.split("/").at(-1).replaceAll("-", " "); 
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      // iska matlab home page show krna hai
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      </Route>
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  )
}

export default App
