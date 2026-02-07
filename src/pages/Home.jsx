import React from 'react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';
import ShopByCategories from '../components/ShopByCategories';
import InstagramReels from '../components/InstagramReels';
import VideoShopping from '../components/VideoShopping';
import { products } from '../data/products';

const ProductGridSection = ({ title, CarouselId, products: sectionProducts, viewAllLink }) => (
    <section className="bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        <ProductGrid title={title} CarouselId={CarouselId} products={sectionProducts} viewAllLink={viewAllLink} />
    </section>
);

const Home = () => {
    // Filter products under ₹999
    const under999Products = products.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        return price < 999;
    });

    return (
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <Hero />

            <div className="pb-12">
                <InstagramReels />

                <ProductGridSection title="New Arrivals" CarouselId="new-arrivals" viewAllLink="/category/new-arrivals" />

                <FeaturedCarousel />

                <ProductGridSection
                    title="Under 999 Bestsellers"
                    CarouselId="under-999"
                    products={under999Products}
                    viewAllLink="/category/under-999"
                />

                <ProductGridSection
                    title="Co-ords Collection"
                    CarouselId="coords-collection"
                    viewAllLink="/category/co-ords"
                    products={Array(8).fill({}).map((_, i) => ({
                        id: `coords-${i}`,
                        name: "Co-ord Set Placeholder",
                        category: "Co-ords",
                        price: "₹0",
                        image: null
                    }))}
                />

                <ShopByCategories />

                <section className="py-12 bg-[var(--bg-primary)]">
                    <VideoShopping />
                </section>
            </div>
        </div>
    );
};

export default Home;
