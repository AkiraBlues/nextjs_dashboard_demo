import '@/app/ui/global.css';
import { lxgw_wenkai_tc } from './ui/fonts';
import clsx from 'clsx';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={clsx(lxgw_wenkai_tc.className, 'antialiased')} >{children}</body>
    </html>
  );
}
