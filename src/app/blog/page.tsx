type BlogPost = {
  id: number;
  title: string;
};

async function getPosts(): Promise<BlogPost[]> {
  return [
    { id: 1, title: 'Intro to Next.js 15' },
    { id: 2, title: 'Understanding Server Components' },
  ];
}

export default async function BlogListPage() {
  const posts = await getPosts();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded shadow">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}