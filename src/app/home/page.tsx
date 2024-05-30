import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['react', 'vue.js']
};

export default function Home() {
  return (
    <main>
      <p>Home Page</p>
      <div>
        <Link href="/about">กลับหน้า about</Link>
      </div>
    </main>
  );
}