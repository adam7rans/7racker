interface IconProps {
  className?: string;
  size?: number;
}

export function XLogoIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={{ transformBox: 'fill-box' as any }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.3559 14.375L31.7866 26.8425M15.8643 45.6246L27.3688 32.0539M27.3688 32.0539L37.7516 45.6251H46.1564L31.7866 26.8425M27.3688 32.0539L13.8438 14.3755H22.2486L31.7866 26.8425"
        stroke="url(#gradStrokeX)"
      />
      <path
        d="M42.3559 14.375L31.7866 26.8425M15.8643 45.6246L27.3688 32.0539M27.3688 32.0539L37.7516 45.6251H46.1564L31.7866 26.8425M27.3688 32.0539L13.8438 14.3755H22.2486L31.7866 26.8425"
        stroke="white"
        strokeOpacity="0.53"
      />
      <defs>
        <pattern id="gradStrokeX" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="url(#paint0_linear_1395_707)"
            className="origin-center transition-transform duration-300 group-hover:rotate-180"
            style={{ transformBox: 'fill-box' as any }}
          />
        </pattern>
        <linearGradient id="paint0_linear_1395_707" x1="8.52496" y1="13.0323" x2="46.7975" y2="56.8495" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5200FF" />
          <stop offset="0.0233555" stopColor="#FF008A" />
          <stop offset="0.336875" stopColor="#FEFFC5" />
          <stop offset="0.585774" stopColor="#FEFFC5" />
          <stop offset="1" stopColor="#001AFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
