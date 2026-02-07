
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import cottonSuits from '../assets/product1.png';
import muslinSuits from '../assets/product3.jpg';
import velvetCollection from '../assets/product7.png';
import silkCollection from '../assets/product6.png';
import organzaSuits from '../assets/product8.png';

const categories = [
    { id: 1, name: "Cotton Suits", image: cottonSuits, link: '/category/cotton-suits', color: 'bg-stone-50' },
    { id: 2, name: "Muslin Suits", image: muslinSuits, link: '/category/muslin-suits', color: 'bg-orange-50/30' },
    { id: 3, name: "Velvet Collection", image: velvetCollection, link: '/category/velvet-collection', color: 'bg-stone-50' },
    { id: 4, name: "Silk Collection", image: silkCollection, link: '/category/silk-collection', color: 'bg-amber-50/30' },
    { id: 5, name: "Organza Suits", image: organzaSuits, link: '/category/organza-suits', color: 'bg-stone-50' }
];

const ShopByCategories = () => {
    return (
        <section className="py-12 md:py-16 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Discover Couture</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] text-center">
                        Shop By <i className="font-light">Category</i>
                    </h2>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-16 h-px bg-gray-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full border border-[var(--accent-gold)]"></div>
                        <div className="w-16 h-px bg-gray-200"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={category.link}
                            className="group block relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                                <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ml-auto">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-serif text-gray-900 group-hover:text-[var(--accent-gold)] transition-colors relative inline-block">
                                    {category.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-gold)] group-hover:w-full transition-all duration-300"></span>
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategories;
