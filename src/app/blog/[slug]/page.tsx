interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <p>
        Slug: <strong>{slug}</strong>
      </p>
    </div>
  );
}
