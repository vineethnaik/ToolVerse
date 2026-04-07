import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { 
  Sparkles, Menu, X, LogIn, UserPlus, 
  ChevronDown, User, LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const navLinks = [
  { name: 'Explore', path: '/home' },
  { name: 'Categories', path: '/categories' },
  { name: 'Requests', path: '/requests' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/[0.06] bg-[rgba(10,10,15,0.8)] px-6 backdrop-blur-xl">
          
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20 transition-shadow duration-300 group-hover:shadow-violet-500/40">
              <Sparkles className="h-5 w-5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Tool<span className="gradient-text-accent">Verse</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-white ${isActive ? 'text-white bg-white/[0.06]' : 'text-[#8888a4]'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.1]"
                >
                  <User className="h-4 w-4" />
                  <span>{user.firstName}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 rounded-lg border border-white/[0.06] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl shadow-lg"
                    >
                      <div className="p-2">
                        <div className="px-3 py-2 text-sm text-gray-300">
                          <div className="font-medium text-white">{user.firstName} {user.lastName}</div>
                          <div className="text-xs">{user.email}</div>
                        </div>
                        <div className="mt-1 border-t border-white/[0.06] pt-1">
                          <button
                            onClick={() => {
                              setProfileOpen(false);
                              navigate('/profile');
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left text-[#8888a4] hover:text-white transition-colors duration-200"
                          >
                            <User className="h-4 w-4" />
                            Profile
                          </button>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left text-[#8888a4] hover:text-white transition-colors duration-200"
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
                  onClick={() => navigate('/auth')}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#8888a4] transition-all duration-200 hover:text-white"
                >
                  <LogIn className="h-4 w-4" />
                  Log in
                </button>
                <button 
                  onClick={() => navigate('/auth')}
                  className="btn-glow flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-violet-500/40"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#8888a4] transition-colors hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  onClick={() => setMobileOpen(false)}
                  to={link.path}
                  className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium transition-all hover:bg-white/[0.03] hover:text-white ${isActive ? 'bg-white/[0.06] text-white' : 'text-[#8888a4]'}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-300">
                      <div className="font-medium text-white">{user.firstName} {user.lastName}</div>
                      <div className="text-xs">{user.email}</div>
                    </div>
                    <button
                      onClick={() => { navigate('/profile'); setMobileOpen(false); }}
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-medium text-[#8888a4] hover:text-white"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-medium text-[#8888a4] hover:text-white"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => { navigate('/auth'); setMobileOpen(false); }}
                      className="rounded-lg px-4 py-3 text-left text-sm font-medium text-[#8888a4] hover:text-white"
                    >
                      Log in
                    </button>
                    <button 
                      onClick={() => { navigate('/auth'); setMobileOpen(false); }}
                      className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
