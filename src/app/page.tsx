import Image from "next/image";
import Link from "next/link";

export const posts = [
  {
    id: 1,
    title: 'AI地域未来塾',
    content: 'Discover the most breathtaking views from around the world...',
    image: '/images/AImiraijyukuMain.jpg',
  },
  {
    id: 2,
    title: 'Urban Architecture',
    content: 'Explore the stunning designs of modern cities and their iconic buildings...',
    image: '/images/海ほたる.jpg',
  },
  {
    id: 3,
    title: 'Nature Close-ups',
    content: 'Get up close and personal with the wonders of the natural world...',
    image: '/images/片瀬海岸.jpg',
  },
]

export default function LandingPage() {
  return (
    <div className="pt-20">
      {posts.map((post, index) => (
        <section
          key={post.id}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
        >
          <Link href={`/posts/${post.id}`}>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              className="rounded-lg shadow-lg "
            />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 transform md:-rotate-3">
            <h2 className="text-3xl font-bold mb-4 cursor-pointer">{post.title}</h2>
            <p className="text-lg">{post.content}</p>
          </div>
           </Link>
        </section>
      ))}
    </div>
  );
}

