"use client";
import React, { useRef, useEffect } from "react";

const aboutSections = [
  { id: "about-us", label: "About Us" },
  { id: "global-reach", label: "Global Reach" },
  { id: "policies", label: "Policies" },
  { id: "certificates", label: "Certificates" },
];

export default function AboutDropdown() {
  const [open, setOpen] = React.useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  // Move focus to first menu item when opened with keyboard
  useEffect(() => {
    if (open && menuRef.current) {
      const firstItem = menuRef.current.querySelector('a');
      (firstItem as HTMLElement | null)?.focus();
    }
  }, [open]);

  // Keep open on focus within button or menu, close on blur
  const handleBlur = (e: React.FocusEvent) => {
    // If focus moves outside the dropdown, close it
    if (
      rootRef.current &&
      !rootRef.current.contains(e.relatedTarget as Node)
    ) {
      setOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (window.location.pathname !== "/about") {
      window.location.href = `/about#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Mouse enter/leave logic to prevent flicker
  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      id="about-dropdown-root"
      className="relative"
      ref={rootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <a
        href="/about"
        className="hover:underline flex items-center gap-1 px-2 py-1 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="about-dropdown-menu"
        tabIndex={0}
        ref={buttonRef}
        onKeyDown={handleButtonKeyDown}
      >
        About
        <span className="text-xs">▼</span>
      </a>
      {open && (
        <ul
          id="about-dropdown-menu"
          className="absolute left-0 z-10 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg text-left animate-fade-in"
          role="menu"
          ref={menuRef}
        >
          {aboutSections.map((section) => (
            <li key={section.id} role="none">
              <a
                href={`/about#${section.id}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                onClick={(e) => handleClick(e, section.id)}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleClick(e, section.id);
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
