export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased bg-white md:bg-background min-h-screen font-[family-name:var(--font-inter)]">
      {children}
    </div>
  );
}
