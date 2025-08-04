interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  return <div>My Post: {slug}</div>;
}
