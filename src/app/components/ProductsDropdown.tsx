"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { products } from "../products/productData";



export default function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
    if (rootRef.current && !rootRef.current.contains(e.relatedTarget as Node)) {
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
      id="products-dropdown-root"
      className="relative"
      ref={rootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <Link
        href="/products"
        className="hover:underline flex items-center gap-1 px-2 py-1 cursor-pointer"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="products-dropdown-menu"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
          if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        onClick={(e) => {
          // Only open dropdown if not using keyboard navigation
          if (e.detail === 0) return;
          setOpen((v) => !v);
        }}
      >
        Products
        <span className="text-xs">▼</span>
      </Link>
      {open && (
        <ul
          id="products-dropdown-menu"
          className="absolute left-0 z-10 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg text-left animate-fade-in"
          role="menu"
          ref={menuRef}
        >
          {products.map((product) => (
            <li key={product.id} role="none">
              <Link
                href={`/products/${product.id}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                role="menuitem"
                tabIndex={0}
                onClick={() => setOpen(false)}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
