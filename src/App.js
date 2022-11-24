import Layout from './Layout';
import Donate from './Donate';
import Home from './Home';
import NewRequest from './NewRequest';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



function App() {
  const [posts, setPosts] = useState([
    {
      id: 4,
      title: "Social Security",
      body: "including consultations, applications,use of cultural mediators with migration background to Aassist espeacially in matters of family reunifaication ",
    },
    {
      id: 3,
      title: "Legal & Counselling Services",
      body: "including consultations, applications,use of cultural mediators with migration background to Aassist espeacially in matters of family reunifaication ",
    },
    {
      id: 1,
      title: "Health Services",
      body: "Covid-19 saw so many migrants not access health services or are neglected and lack the necessary data information. They struggle with navigating the complex administration systems and  fear they will be deported!"

    },
    {
      id: 2,
      title: "Education & Trainings",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },

    {
      id: 3,
      title: "Housing",
      body: "Rent support (Mietzuschuss)to help you cover regular expenses like utilities, as well as your rent.we support and walk you through how to apply for housing benefit. Our professional team of Volunteers have all the expertise and networks working with partners to settle you in a safe fully equipped house.!"
    },

  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: postTitle, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route index element={<NewRequest
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />
          <Route path=":id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
        <Route path="donate" element={<Donate />} />

      </Route>
    </Routes>
  );
}

export default App;