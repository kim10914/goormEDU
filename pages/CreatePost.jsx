import { useState } from "react";

function CreatePost({ set_posts }) {
  const [title, set_title] = useState("");
  const [content, set_content] = useState("");

  const handle_submit = (e) => {
    e.preventDefault();
    const new_post = {
      id: Date.now(),
      title,
      content,
    };
    set_posts((prev) => [...prev, new_post]);
  };

  return (
    <form onSubmit={handle_submit}>
      <h2>글 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => set_title(e.target.value)}
      />
      <br />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => set_content(e.target.value)}
      />
      <br />
      <button type="submit">저장</button>
    </form>
  );
}

export default CreatePost;
