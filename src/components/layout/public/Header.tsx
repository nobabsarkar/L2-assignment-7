import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="p-6 md:p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              C
            </div>

            <span>Complain & Service</span>
          </Link>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          <Button
            variant="outline"
            render={<Link href="/login">Login</Link>}
            nativeButton={false}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
