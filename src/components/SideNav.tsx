"use client";

import {
  LayoutDashboard,
  Briefcase,
  Building2,
  GraduationCap,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Briefcase,
    label: "Job Matcher",
    href: "/job-matcher",
  },
  {
    icon: Building2,
    label: "Company Insights",
    href: "/company-insights",
  },
  {
    icon: GraduationCap,
    label: "Resources",
    href: "/resources",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 flex h-full w-16 flex-col items-center border-r border-border bg-background py-4">
      <div className="mb-8">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600"
        >
          <span className="text-lg font-bold text-white">HR</span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col items-center gap-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-purple-600 ${
                pathname === item.href
                  ? "bg-purple-600 text-white"
                  : "text-foreground hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="absolute left-14 hidden rounded-md bg-purple-600 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
