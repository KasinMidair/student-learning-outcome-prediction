"use client";

import React from "react";

export const InfoShape = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        width="715"
        height="449"
        viewBox="0 0 715 449"
        fill="none"
      >
        <g filter="url(#filter0_d_292_1669)">
          <path
            d="M705 173C705 181.284 698.284 188 690 188H329.57C321.286 188 314.57 194.716 314.57 203V424C314.57 432.284 307.855 439 299.57 439H17C8.71573 439 2 432.284 2 424V17C2 8.71573 8.71573 2 17 2H690C698.284 2 705 8.71573 705 17V173Z"
            fill="url(#paint0_linear_292_1669)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_292_1669"
            x="0"
            y="0"
            width="715"
            height="449"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_292_1669"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_292_1669"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_292_1669"
            x1="343.5"
            y1="2"
            x2="343.5"
            y2="449.898"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.4" stopColor="#292B2A" />
            <stop offset="1" stopColor="#323734" />
          </linearGradient>
        </defs>
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(239, 198, 144, 0.41) 0%, rgba(115, 115, 115, 0) 100%)",
          }}
        />
      </svg>

      <div
        className="pl-8 w-full h-full"
        style={{ clipPath: "url(#folder-shape)" }}
      >
        {children}
      </div>
    </div>
  );
};
