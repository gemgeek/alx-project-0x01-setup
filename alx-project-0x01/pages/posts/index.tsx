import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";
import React from 'react';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  // This is our 'light switch' state to show/hide the modal. It starts 'false' (off).
  const [isModalOpen, setModalOpen] = useState(false);

  // This function will be called by the modal when a new post is submitted.
  const handleAddPost = (newPost: PostData) => {
    // For now, we'll just log it. In a real app, you'd send this to your API.
    console.log("New Post Submitted:", newPost);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Posts</h1>
          {/* This button toggles the modal 'on' by setting isModalOpen to true */}
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition">Add Post</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
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

      {/* This is conditional rendering: the modal only appears if isModalOpen is true */}
      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: PostProps[] = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default PostsPage;