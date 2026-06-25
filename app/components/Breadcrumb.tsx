// components/Breadcrumb.tsx
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({
  items = [{ label: "خانه", href: "/" }, { label: "قطعات بلدوزر" }],
}: BreadcrumbProps) {
  return (
    <nav className="bg-[#F5F5F5] py-4 px-6 border-b border-gray-200">
      <div className="2xl:container 2xl:mx-auto">
        <ol className="flex items-center gap-2 text-sm md:text-base">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-secondary hover:text-primary duration-300 font-bold"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#03071E] font-bold">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
