import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React from 'react';


interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition">Add Post</button>
        </div>
        {/* We map over the 'posts' array and render a PostCard for each item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map((post) => (
            <PostCard
              key={post.id} 
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  // Fetch data from the external API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  // The data is returned as props to the page component
  return {
    props: {
      posts, // will be passed to the PostsPage component as a prop
    },
  };
}

export default PostsPage;