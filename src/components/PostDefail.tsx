import { Link } from "react-router-dom";
export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          illum rem quaerat sed, aliquam cupiditate non quisquam eligendi,
          necessitatibus animi cumque inventore suscipit corrupti earum,
          expedita temporibus quod ea odio?
        </div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2023.07.08 토</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={"/posts/edit/1"}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          voluptatum, quod recusandae mollitia distinctio voluptatibus quo
          placeat dignissimos quibusdam excepturi, molestias deserunt provident.
          Animi quis obcaecati debitis reprehenderit? Praesentium, amet!
        </div>
      </div>
    </div>
  )
}
