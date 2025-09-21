import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Posts</h1>
      </main>
    </div>
  );
};

export default PostsPage;