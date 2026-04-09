import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import {
  Sparkles,
  LogIn,
  UserPlus,
  ChevronDown,
  User,
  LogOut,
  Compass,
  LayoutGrid,
  Send,
  Tag,
  Info,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const navLinks = [
  { name: 'Explore', path: '/home', icon: Compass },
  { name: 'Categories', path: '/categories', icon: LayoutGrid },
  { name: 'Requests', path: '/requests', icon: Send },
  { name: 'Pricing', path: '/pricing', icon: Tag },
  { name: 'About', path: '/about', icon: Info },
];

export default function Navbar() {
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const bubbleRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target)) {
        setBubbleOpen(false);
      }
    };
    if (bubbleOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [bubbleOpen]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="mt-3 sm:mt-4 flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/[0.06] bg-[rgba(10,10,15,0.8)] px-3 sm:px-4 backdrop-blur-xl">
          {/* Logo */}
          <Link to="/home" className="flex shrink-0 items-center gap-2.5 group">
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-violet-500/20 transition-shadow duration-300 group-hover:shadow-violet-500/40">
              <img 
                src="/tc.png" 
                alt="ToolVerse Logo" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              Tool<span className="gradient-text-accent">Verse</span>
            </span>
          </Link>

          {/* Desktop: bubble pill nav */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="bubble-nav-shell flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-1.5 py-1.5 shadow-inner shadow-black/20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `bubble-nav-item group flex items-center gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600/90 to-blue-600/90 text-white shadow-lg shadow-violet-500/25'
                        : 'text-[#a8a8c0] hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <link.icon className="h-4 w-4 shrink-0 opacity-80" />
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section — desktop */}
          <div className="hidden shrink-0 items-center gap-1 sm:gap-2 md:flex">
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="bubble-nav-item flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/[0.06] px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{user.firstName}</span>
                  <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70" />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,10,15,0.96)] shadow-xl backdrop-blur-xl"
                    >
                      <div className="p-2">
                        <div className="rounded-xl px-3 py-2 text-sm text-gray-300">
                          <div className="font-medium text-white">
                            {user.firstName} {user.lastName}
                          </div>
                          <div className="text-xs text-gray-400">{user.email}</div>
                        </div>
                        <div className="mt-1 border-t border-white/[0.06] pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              setProfileOpen(false);
                              navigate('/profile');
                            }}
                            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-[#8888a4] transition hover:bg-white/5 hover:text-white"
                          >
                            <User className="h-4 w-4" />
                            Profile
                          </button>
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-[#8888a4] transition hover:bg-white/5 hover:text-white"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate('/auth?mode=login')}
                  className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#a8a8c0] transition hover:text-white"
                >
                  <span className="inline-flex items-center gap-1.5 sm:gap-2">
                    <LogIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Log in</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/auth?mode=register')}
                  className="btn-glossy flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white"
                >
                  <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Sign Up</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile: bubble menu trigger */}
          <div className="relative flex items-center gap-2 md:hidden" ref={bubbleRef}>
            {user && (
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                aria-label="Profile"
              >
                <User className="h-5 w-5" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setBubbleOpen(!bubbleOpen)}
              className="bubble-menu-trigger flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/30 md:hidden lg:hidden"
              aria-expanded={bubbleOpen}
              aria-label="Open menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {bubbleOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile bubble menu — expands upward */}
            <AnimatePresence>
              {bubbleOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{
                    opacity: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute right-0 top-full z-[70] mt-2 sm:mt-3 w-[min(90vw,300px)] sm:w-[min(80vw,320px)] origin-top-right rounded-2xl sm:rounded-3xl border border-white/20 bg-[rgba(10,10,18,0.55)] p-2.5 sm:p-3 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={() => setBubbleOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition ${
                              isActive
                                ? 'bg-gradient-to-r from-violet-600/90 to-blue-600/90 text-white shadow-md'
                                : 'text-[#c4c4d8] hover:bg-white/10 hover:text-white'
                            }`
                          }
                        >
                          <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                            <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </span>
                          {link.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    {user ? (
                      <button
                        type="button"
                        onClick={() => {
                          setBubbleOpen(false);
                          handleLogout();
                        }}
                        className="flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-red-300/90 hover:bg-red-500/10"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    ) : (
                      <div className="flex gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setBubbleOpen(false);
                            navigate('/auth?mode=login');
                          }}
                          className="flex-1 rounded-xl sm:rounded-2xl border border-white/20 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-white/10"
                        >
                          <span className="hidden sm:inline">Log in</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBubbleOpen(false);
                            navigate('/auth?mode=register');
                          }}
                          className="flex-1 btn-glossy rounded-xl sm:rounded-2xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white"
                        >
                          <span className="hidden sm:inline">Sign Up</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
