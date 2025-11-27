import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  function toggle() {
    setOpen((s) => !s);
  }

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('touchstart', onDocClick);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('touchstart', onDocClick);
    };
  }, [open]);

  // Toggle a global `menu-open` class whenever the menu is open.
  // This ensures the visual overlay/panel appears regardless of route.
  useEffect(() => {
    const cls = 'menu-open';
    const root = document.documentElement || document.body;
    if (open) root.classList.add(cls);
    else root.classList.remove(cls);
    return () => root.classList.remove(cls);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container" style={{position: 'relative'}} ref={containerRef}>
        <h1 className="brand">TechBuild Group</h1>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={toggle}
        >
          <span className={`hamburger ${open ? 'open' : ''}`} aria-hidden="true">
            <span className="bar bar1" />
            <span className="bar bar2" />
            <span className="bar bar3" />
          </span>
        </button>

        <nav id="site-navigation" className={`site-nav ${open ? 'open' : ''}`}>
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/projects" onClick={close}>Projects</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
