import { Film } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const columns = [
    {
      title: "Help",
      links: ["FAQ", "Help Center", "Contact Us", "Accessibility"],
    },
    {
      title: "Account",
      links: ["Sign In", "Watchlist", "Privacy Settings", "Redeem Gift Card"],
    },
    {
      title: "Media",
      links: ["Press Releases", "News Hub", "Media Kit", "Blog"],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use",
        "Privacy Policy",
        "Cookie Preferences",
        "Corporate Info",
      ],
    },
  ];

  return (
    <footer
      className="mt-16 border-t py-14 px-6 sm:px-10"
      style={{
        borderColor: "oklch(0.22 0.04 265)",
        background: "oklch(0.07 0.03 265)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Brand row */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.58 0.28 295))",
            }}
          >
            <Film className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black">
            Mood<span style={{ color: "oklch(0.64 0.25 285)" }}>Flix</span>
          </span>
          <span className="ml-2 text-sm text-muted-foreground">
            Cinema for every emotion. 15+ languages, 70+ curated films.
          </span>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
          style={{ borderColor: "oklch(0.18 0.04 265)" }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {year} MoodFlix. All rights reserved.</span>
            <span>Service Code</span>
          </div>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with ❤️ using{" "}
            <span className="font-semibold">caffeine.ai</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
