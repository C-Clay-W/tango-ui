'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const applied = saved || (prefersDark ? 'dark' : 'light');

    // 应用 class 到 <html>
    document.documentElement.classList.toggle('dark', applied === 'dark');
    setTheme(applied);
  }, []);

  return <>{children}</>;
}
