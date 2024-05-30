import { Button, Typography } from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['react', 'vue.js']
};

export default function AboutPage() {
  return (
    <main>
      <Typography variant="h3">เกี่ยวกับเรา</Typography>
      <p>About Page</p>
      <div>
        <Link href="/home">กลับหน้าหลัก</Link>
      </div>
      <div>
      <Link href="/home"><Button variant="contained" color="success">Back to HomePage</Button></Link>
      </div>
      <div>
      <Button LinkComponent={Link} href="/" replace={true} variant="contained" color="success">Back to HomePage</Button>
      </div>
      <div>
        <Link href={{pathname:"/"}} replace>กลับหน้าหลัก</Link>
      </div>
    </main>
  );
}