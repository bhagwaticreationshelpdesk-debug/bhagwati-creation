import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import LoginModal from './LoginModal';

import { ModernLogo } from './Branding';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, isLoggedIn, logout } = useShop();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Unstitched', path: '/category/unstitched' },
        { name: 'Stitched Catalog', path: '/category/stitched-catalog' },
        { name: 'New Arrivals', path: '/category/new-arrivals' },
        { name: 'All Collections', path: '/category/all-collections' }
    ];

    const prefetchPage = (path) => {
        if (path.includes('category')) import('../pages/CategoryPage');
        if (path.includes('cart')) import('../pages/Cart');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/category/${searchQuery.trim()}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 px-2 md:px-4' : 'py-6 px-4 md:px-6'}`}>
            <header className={`w-full max-w-[1600px] mx-auto rounded-full transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5 border border-white/20' : 'bg-transparent'
                }`}>
                <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">

                    {/* Brand Section */}
                    <ModernLogo />

                    {/* Navigation - Center */}
                    <nav className="hidden xl:flex items-center gap-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onMouseEnter={() => prefetchPage(item.path)}
                                className={`text-xs uppercase tracking-[0.3em] font-medium transition-all relative py-2 nav-link-modern ${isScrolled ? 'text-[var(--text-secondary)]' : 'text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center gap-6 md:gap-8">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={`transition-colors hover:text-[var(--accent-gold)] ${isScrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}
                        >
                            <Search size={20} strokeWidth={1.5} />
                        </button>

                        <div className="relative group flex items-center cursor-pointer">
                            <button
                                onClick={() => !isLoggedIn && setIsLoginOpen(true)}
                                className={`transition-colors hover:text-[var(--accent-gold)] ${isScrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}
                            >
                                <User size={20} strokeWidth={1.5} />
                            </button>
                            {isLoggedIn && (
                                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="bg-white shadow-2xl border border-gray-100 p-2 w-48 rounded-2xl overflow-hidden">
                                        <button onClick={() => navigate('/orders')} className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">My Account</button>
                                        <button onClick={logout} className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors">Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/cart" className={`relative transition-colors hover:text-[var(--accent-gold)] ${isScrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}>
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--accent-gold)] text-white text-[8px] flex items-center justify-center rounded-full font-bold">
                                {cart.length}
                            </span>
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`xl:hidden transition-colors ${isScrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}
                        >
                            <Menu size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Unique Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-500">
                    <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500">
                        <X size={32} strokeWidth={1} />
                    </button>
                    <div className="h-full flex flex-col items-center justify-center p-8">
                        <form onSubmit={handleSearch} className="w-full max-w-5xl">
                            <input
                                type="text"
                                placeholder="Search our creations..."
                                className="w-full bg-transparent text-4xl md:text-8xl font-serif text-center border-b border-gray-100 py-10 focus:outline-none placeholder:text-gray-100"
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-[100] bg-black/60 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-700 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="p-10 flex flex-col h-full">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="self-end mb-20 p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                        <nav className="flex flex-col gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-4xl font-serif hover:text-[var(--accent-gold)] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto border-t border-gray-100 pt-10">
                            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6">Contact Us</p>
                            <p className="text-sm font-serif italic text-gray-600">Discover elegance at its finest.</p>
                        </div>
                    </div>
                </div>
            </div>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Header;
