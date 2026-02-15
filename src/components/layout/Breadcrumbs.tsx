import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-sm">
                <li>
                    <Link
                        href="/"
                        className="flex items-center text-gray-500 hover:text-indigo transition-colors"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                        {item.href && index < items.length - 1 ? (
                            <Link
                                href={item.href}
                                className="text-gray-500 hover:text-indigo transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
