export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="h-screen bg-violet-900 pt-12">
    <div className="max-w-md m-auto text-white">
      {children}
    </div>
  </main>
}