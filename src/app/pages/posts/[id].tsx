import { useRouter } from "next/router";
import  {posts}  from "../../page"; 

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};


export default Post;