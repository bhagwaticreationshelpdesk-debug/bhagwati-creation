import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import logo from '../assets/logo_v6.png';
import LoginModal from './LoginModal';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, isLoggedIn, logout } = useShop();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'New Arrivals', href: '/category/new-arrivals' },
        { name: 'Suit Sets', href: '/category/suit-set' },
        { name: 'Dresses', href: '/category/dresses' },
        { name: 'Co-ords', href: '/category/co-ords' },
        { name: 'Deals', href: '/category/deals', isSale: true },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/category/${searchQuery.trim()}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <div className="w-full relative z-50 font-sans">
            {/* Announcement Bar */}
            <div className="w-full bg-[#111] text-white text-center py-2 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase z-50">
                Free Shipping on Orders Above ₹999
            </div>

            {/* Main Header - SOLID WHITE - NO TRANSPARENCY */}
            <header className="sticky top-0 w-full z-40 bg-white shadow-md border-b border-gray-100 py-4">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

                    {/* Left: Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-900 hover:text-[#ed2585] transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                src={logo}
                                alt="Bhagwati Creations"
                                className="object-contain h-12 md:h-16 hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
                        {[
                            { name: 'Unstitched', path: '/category/unstitched' },
                            { name: 'Stitched Catalog', path: '/category/stitched-catalog', isDropdown: true },
                            { name: 'New Arrivals', path: '/category/new-arrivals' },
                            { name: 'All Collections', path: '/category/all-collections' }
                        ].map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <Link
                                    to={link.path}
                                    className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[#ed2585] transition-colors duration-300 relative"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ed2585] transition-all duration-300 group-hover:w-full"></span>
                                </Link>

                                {/* Dropdown Logic for Catalog */}
                                {link.isDropdown && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 hidden group-hover:block transition-all duration-200 z-[100]">
                                        <div className="bg-white shadow-xl rounded-sm p-2 border border-gray-100">
                                            {[
                                                "Chanderi Collection", "Muslin Suits", "Organza Suits", "Silk Collection",
                                                "Co-ords", "Cotton Suits", "Party Wear", "Georgette Collection",
                                                "Pakistani Suits", "Tissue Collection", "Velvet Collection", "Handpainted Collection"
                                            ].map((item) => (
                                                <Link
                                                    key={item}
                                                    to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#ed2585] transition-colors text-left uppercase tracking-wide border-b border-gray-50 last:border-0"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-6">
                        <button onClick={() => setIsSearchOpen(true)} className="text-gray-900 hover:text-[#ed2585] transition-colors">
                            <Search size={22} strokeWidth={2} />
                        </button>

                        <div className="relative group">
                            <button className="text-gray-900 hover:text-[#ed2585] transition-colors py-2">
                                <User size={22} strokeWidth={2} />
                            </button>
                            {/* User Dropdown */}
                            <div className="absolute right-0 top-full pt-2 w-48 hidden group-hover:block z-[60]">
                                <div className="bg-white shadow-xl rounded-sm border border-gray-100 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                        <p className="text-xs font-semibold text-gray-500 uppercase">Welcome</p>
                                        <p className="text-xs text-gray-400">{isLoggedIn ? "User" : "Guest"}</p>
                                    </div>
                                    <button onClick={() => isLoggedIn ? logout() : setIsLoginOpen(true)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors">
                                        {isLoggedIn ? "Logout" : "Login"}
                                    </button>
                                    <button onClick={() => navigate('/orders')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#ed2585] hover:text-white transition-colors">My Orders</button>
                                </div>
                            </div>
                        </div>

                        <Link to="/wishlist" className="hidden md:block text-gray-900 hover:text-[#ed2585] transition-colors">
                            <Heart size={22} strokeWidth={2} />
                        </Link>

                        <Link to="/cart" className="text-gray-900 hover:text-[#ed2585] transition-colors relative">
                            <ShoppingBag size={22} strokeWidth={2} />
                            <span className="absolute -top-1.5 -right-1.5 bg-[#ed2585] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">{cart.length}</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="text-lg font-serif italic text-[#ed2585]">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-red-500">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-base font-medium uppercase tracking-wide
                                    ${link.isSale ? 'text-[#ed2585]' : 'text-[#ed2585]'}
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            className="text-left text-base font-medium uppercase tracking-wide text-[#ed2585] mt-4 flex items-center gap-2"
                            onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}
                        >
                            <User size={20} /> Login / Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Large Search Overlay */}
            {isSearchOpen && (
                <>
                    <div className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
                    <div className="fixed top-0 left-0 w-full h-[50vh] bg-white z-[70] shadow-2xl flex flex-col items-center justify-center animate-in slide-in-from-top duration-500">
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-8 right-8 text-gray-400 hover:text-[#ed2585] transition-colors"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        <div className="w-full max-w-4xl px-8 text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">What are you looking for?</h2>
                            <form onSubmit={handleSearch} className="w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search for sarees, suits, lehengas..."
                                    className="w-full text-3xl md:text-6xl font-serif text-center border-b-2 border-gray-100 py-6 focus:outline-none focus:border-[#ed2585] placeholder-gray-200 text-gray-900 transition-all bg-transparent"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 bottom-6 text-[#ed2585] hover:text-[#c41e6e] transition-colors"
                                >
                                    <Search size={32} />
                                </button>
                            </form>
                            <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500">
                                <span>Popular:</span>
                                <button onClick={() => { setSearchQuery('Saree'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Saree</button>
                                <button onClick={() => { setSearchQuery('Anarkali'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Anarkali</button>
                                <button onClick={() => { setSearchQuery('Lehenga'); handleSearch({ preventDefault: () => { } }); }} className="hover:text-[#ed2585] underline">Lehenga</button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Header;
