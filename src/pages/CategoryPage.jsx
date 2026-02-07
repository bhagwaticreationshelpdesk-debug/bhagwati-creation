import React from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { products, loading } = useShop();

    if (loading) {
        return <div className="min-h-screen pt-32 text-center">Loading products...</div>;
    }

    // Map URL slug to data category if needed, or just partial match
    // Simple filter logic:
    const filteredProducts = products.filter(product => {
        if (!categoryName) return true;
        if (categoryName.toLowerCase() === 'new-arrivals') return true; // Show all for now or filter by 'New' tag
        if (categoryName.toLowerCase() === 'all-collections') return true;
        if (categoryName.toLowerCase() === 'deals') return product.tag === 'Sale';

        // Normalize for comparison
        const pCat = product.category.toLowerCase().replace(/\s+/g, '-');
        const pName = product.name.toLowerCase();
        const searchCat = categoryName.toLowerCase();

        return pCat.includes(searchCat) || searchCat.includes(pCat) || pName.includes(searchCat);
    });

    const title = categoryName ? categoryName.replace(/-/g, ' ') : 'All Products';

    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center mb-20 pt-10">
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Discover Couture</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] text-center uppercase tracking-tight">{title}</h1>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-16 h-px bg-gray-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full border border-[var(--accent-gold)]"></div>
                        <div className="w-16 h-px bg-gray-200"></div>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 text-lg">
                        No products found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;
