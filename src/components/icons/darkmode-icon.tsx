interface IconProps {
  className?: string;
  size?: number;
}

export function DarkModeIcon({ className = "", size = 20 }: IconProps) {
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
        d="M48.4743 39.1631C47.6955 40.4043 46.7716 41.581 45.6919 42.6606C37.9081 50.4442 25.2508 50.4091 17.4205 42.5796C9.59029 34.7493 9.55324 22.0898 17.3371 14.3058C18.4166 13.2262 19.5935 12.3022 20.8346 11.5234C16.0021 19.2311 16.9624 29.5521 23.7052 36.2949C30.4479 43.037 40.7669 43.9953 48.4743 39.1631Z"
        stroke="url(#gradStrokeDark)"
      />
      <path
        d="M48.4743 39.1631C47.6955 40.4043 46.7716 41.581 45.6919 42.6606C37.9081 50.4442 25.2508 50.4091 17.4205 42.5796C9.59029 34.7493 9.55324 22.0898 17.3371 14.3058C18.4166 13.2262 19.5935 12.3022 20.8346 11.5234C16.0021 19.2311 16.9624 29.5521 23.7052 36.2949C30.4479 43.037 40.7669 43.9953 48.4743 39.1631Z"
        stroke="white"
        strokeOpacity="0.53"
      />
      <defs>
        <pattern id="gradStrokeDark" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="url(#paint0_linear_1391_686)"
            className="origin-center transition-transform duration-300 group-hover:rotate-180"
            style={{ transformBox: 'fill-box' as any }}
          />
        </pattern>
        <linearGradient id="paint0_linear_1391_686" x1="3.34963" y1="-1.4636" x2="29.9989" y2="64.8832" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5200FF" />
          <stop offset="0.117334" stopColor="#FF008A" />
          <stop offset="0.336875" stopColor="#FEFFC5" />
          <stop offset="0.585774" stopColor="#FEFFC5" />
          <stop offset="1" stopColor="#001AFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}