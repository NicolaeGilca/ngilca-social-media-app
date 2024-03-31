import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Profile from "./pages/startingPage/newsfeed/profile/Profile";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="my-profile" element={<Profile />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
