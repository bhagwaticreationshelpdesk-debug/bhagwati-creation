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
        {
            name: 'Unstitched',
            path: '/category/unstitched',
            subItems: [
                { name: 'Sarees', path: '/category/sarees' },
                { name: 'Fabrics', path: '/category/fabrics' },
                { name: 'Lehengas', path: '/category/lehengas' }
            ]
        },
        {
            name: 'Stitched Catalog',
            path: '/category/stitched-catalog',
            subItems: [
                { name: 'Suit Sets', path: '/category/suit-sets' },
                { name: 'Kurtas', path: '/category/kurtas' },
                { name: 'Dresses', path: '/category/dresses' },
                { name: 'Co-ords', path: '/category/co-ords' }
            ]
        },
        { name: 'New Arrivals', path: '/category/new-arrivals' },
        { name: 'All Collections', path: '/category/all-collections' }
    ];

    const prefetchPage = (path) => {
        if (path === '/cart') import('../pages/Cart');
        if (path === '/wishlist') import('../pages/Wishlist');
        if (path.startsWith('/category/')) import('../pages/CategoryPage');
        if (path === '/contact') import('../pages/Contact');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/category/${searchQuery.trim()}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <div className="sticky top-0 left-0 w-full z-50 bg-[#050505] shadow-lg border-b border-white/5">
            <header className="w-full max-w-[1700px] mx-auto">
                <div className="flex items-center justify-between h-20 px-4 md:px-8">

                    {/* Brand Section */}
                    <ModernLogo />

                    {/* Navigation - Center */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group flex items-center h-full">
                                <Link
                                    to={item.path}
                                    className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/90 hover:text-[var(--accent-gold)] transition-all relative py-2 nav-link-modern"
                                    onMouseEnter={() => prefetchPage(item.path)}
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-[#0a0a0a] shadow-2xl border border-white/10 p-4 rounded-xl overflow-hidden min-w-[220px] flex flex-col gap-1">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors text-left"
                                                    onMouseEnter={() => prefetchPage(subItem.path)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-white hover:text-[var(--accent-gold)] transition-colors"
                        >
                            <Search size={22} strokeWidth={1.5} />
                        </button>

                        <div className="relative group flex items-center cursor-pointer">
                            <button
                                onClick={() => !isLoggedIn && setIsLoginOpen(true)}
                                className="text-white hover:text-[var(--accent-gold)] transition-colors"
                            >
                                <User size={22} strokeWidth={1.5} />
                            </button>
                            {isLoggedIn && (
                                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="bg-white shadow-2xl border border-gray-100 p-2 w-48 rounded-2xl overflow-hidden">
                                        <button onClick={() => navigate('/orders')} className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors text-black">My Account</button>
                                        <button onClick={logout} className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors">Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/cart"
                            className="relative text-white hover:text-[var(--accent-gold)] transition-colors"
                            onMouseEnter={() => prefetchPage('/cart')}
                        >
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[var(--accent-gold)] text-[var(--bg-primary)] text-[9px] flex items-center justify-center rounded-full font-bold">
                                {cart.length}
                            </span>
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="xl:hidden text-white transition-colors"
                        >
                            <Menu size={24} strokeWidth={1.5} />
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
