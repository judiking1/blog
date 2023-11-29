import Footer from "components/Footer";
import Header from "components/Header";
import PostList from "components/PostList";
import ProfilePage from "components/Profile";

export default function Profile() {
  return (
    <>
      <Header/>
      <ProfilePage/>
      <PostList hasNavigation={false}/>
      <Footer/>
    </>
  );
}