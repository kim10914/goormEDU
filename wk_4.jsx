
import { Link } from "react-router-dom";

function Wk4({posts}) {
    
  
    return (
      <div>
        <h2>블로그 글 목록</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
  
        <Link to="/create"> <button>글 작성하기</button> </Link>
      </div>
    );
  }

export default Wk4;


