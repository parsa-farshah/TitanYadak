import { CATEGORIES } from "@/app/components/products/data/categories";
import { products } from "@/app/components/products/data/products";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryProductsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryProductsPage({
  params,
}: CategoryProductsPageProps) {
  const { slug } = await params;
  const categorySlug = slug?.trim().toLowerCase();

  if (!categorySlug) {
    notFound();
  }

  const currentCategory = CATEGORIES.find(
    (item) => item.slug.trim().toLowerCase() === categorySlug,
  );

  if (!currentCategory) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) => product.category.trim().toLowerCase() === categorySlug,
  );

  return (
    <main className="bg-[#f5f5f5] py-10 md:py-14" dir="rtl">
      <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-[#03071E] md:text-3xl">
            محصولات دسته {currentCategory.label}
          </h1>

          <p className="text-sm text-gray-500 md:text-base">
            {filteredProducts.length} محصول پیدا شد
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-gray-500">محصولی در این دسته پیدا نشد.</p>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative z-10 p-6">
                  <div className="mb-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                      {currentCategory.label}
                    </span>
                  </div>

                  <h2 className="mb-2 min-h-[3.5rem] line-clamp-2 text-lg font-bold text-[#03071E]">
                    {product.title}
                  </h2>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
