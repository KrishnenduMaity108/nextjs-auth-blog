export default function BlogPage({ params }: { params: { slug: string } }) {
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