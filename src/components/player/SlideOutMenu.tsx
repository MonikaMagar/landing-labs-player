import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const SlideOutMenu = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-30
          bg-black/40
          transition-opacity duration-200
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
      />

      {/* Panel */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-40
          w-4/5 max-w-xs
          bg-[#070311]
          shadow-xl
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {children}
      </aside>
    </>
  );
};

export default SlideOutMenu;
