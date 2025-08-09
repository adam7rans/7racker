interface IconProps {
  className?: string;
  size?: number;
}

export function SystemIcon({ className = "", size = 20 }: IconProps) {
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
        d="M46.4297 35.1406V13.3555C46.4297 12.2509 45.5343 11.3555 44.4297 11.3555H15.5781C14.4736 11.3555 13.5781 12.2509 13.5781 13.3555V35.1406M46.4297 35.1406H13.5781M46.4297 35.1406L51.1805 45.8345C51.768 47.157 50.7999 48.6465 49.3527 48.6465H10.6551C9.20793 48.6465 8.23981 47.157 8.82735 45.8345L13.5781 35.1406"
        stroke="url(#gradStrokeSystem)"
      />
      <path
        d="M46.4297 35.1406V13.3555C46.4297 12.2509 45.5343 11.3555 44.4297 11.3555H15.5781C14.4736 11.3555 13.5781 12.2509 13.5781 13.3555V35.1406M46.4297 35.1406H13.5781M46.4297 35.1406L51.1805 45.8345C51.768 47.157 50.7999 48.6465 49.3527 48.6465H10.6551C9.20793 48.6465 8.23981 47.157 8.82735 45.8345L13.5781 35.1406"
        stroke="white"
        strokeOpacity="0.53"
      />
      <defs>
        <pattern id="gradStrokeSystem" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="url(#paint0_linear_1395_697)"
            className="origin-center transition-transform duration-300 group-hover:rotate-180"
            style={{ transformBox: 'fill-box' as any }}
          />
        </pattern>
        <linearGradient id="paint0_linear_1395_697" x1="0.195386" y1="9.75322" x2="44.4565" y2="68.6961" gradientUnits="userSpaceOnUse">
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