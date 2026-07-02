// src/app/components/Background.tsx
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Soft light cyan/teal background accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-50/20 rounded-full blur-[130px] opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-50/20 rounded-full blur-[130px] opacity-60" />
      {/* Clean light grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a03_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}
