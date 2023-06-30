import "./NewPost.css";
export const DeletePost = ({ deletePost }) => {
  return (
    <div className="delete.post">
      <span onClick={deletePost}>Delete</span>
    </div>
  );
};
