"use client";

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ withText = true, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/swas_logo_only.png"
          alt="Swasthya Saathi Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {withText && (
        <div className="ml-3">
          <div className="relative">
            <h1 className={`${textSizes[size]} font-bold text-gray-800 leading-tight`}>
              <div>Swasthya</div>
              <div>Saathi</div>
            </h1>
            <div className={`${taglineSizes[size]} text-gray-600 font-medium`}>
              A credible health buddy
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
