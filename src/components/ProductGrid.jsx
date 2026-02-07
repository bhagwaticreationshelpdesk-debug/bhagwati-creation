import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = ({ title = "New Arrivals", products: propProducts, CarouselId = "product-carousel", viewAllLink = "/category/all-collections" }) => {
    const { products: contextProducts } = useShop();
    const inputProducts = propProducts || contextProducts;

    const [selectedProduct, setSelectedProduct] = React.useState(null);

    return (
        <section className="py-8 transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-8 relative group">
                <div className="flex flex-col items-center mb-8">
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Discover Couture</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] text-center">{title}</h2>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-12 h-px bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full border border-[var(--accent-gold)]"></div>
                        <div className="w-12 h-px bg-gray-200"></div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel w-full">
                    {/* Previous Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById(CarouselId);
                            if (container) container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                        }}
                        className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center border border-white/20"
                    >
                        <ChevronLeft size={20} strokeWidth={1.5} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        id={CarouselId}
                        className="flex overflow-x-auto gap-6 md:gap-10 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth w-full"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {inputProducts.map(product => (
                            <div
                                key={product.id}
                                className="basis-full sm:basis-[calc(50%-0.75rem)] md:basis-[calc(33.33%-1.67rem)] lg:basis-[calc(25%-1.875rem)] xl:basis-[calc(20%-2rem)] min-w-0 snap-start flex-shrink-0"
                            >
                                <ProductCard
                                    product={product}
                                    onQuickView={(p) => setSelectedProduct(p)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById(CarouselId);
                            if (container) container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                        }}
                        className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex items-center justify-center border border-white/20"
                    >
                        <ChevronRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        to={viewAllLink}
                        className="btn-gold uppercase tracking-widest text-sm font-bold inline-block text-center"
                    >
                        View All Products
                    </Link>
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section >
    );
};

export default ProductGrid;
