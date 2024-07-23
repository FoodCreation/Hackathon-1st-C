// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Calorie Tracker',
  description: 'Calculate exercise time based on calorie intake',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
