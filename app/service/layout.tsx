export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pt-10 md:pb-0 w-full h-full">
      <div className="inline-block w-full">{children}</div>
    </section>
  );
}
