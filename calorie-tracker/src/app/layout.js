// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Calorie Tracker',
  description: 'Calculate exercise time based on calorie intake',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
