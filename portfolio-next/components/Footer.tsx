export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <div className="mx-auto max-w-[1180px] px-8">
        <p className="font-mono text-[0.85rem] text-ink-faint">
          © {new Date().getFullYear()} Hager Nady — Full Stack Developer.
        </p>
      </div>
    </footer>
  );
}
