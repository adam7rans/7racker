interface IconProps {
  className?: string;
  size?: number;
}

export function LightModeIcon({ className = "", size = 20 }: IconProps) {
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
      <circle cx="30" cy="30" r="20" stroke="url(#gradStrokeLight)" />
      <circle cx="30" cy="30" r="20" stroke="white" strokeOpacity="0.53" />
      <defs>
        <pattern id="gradStrokeLight" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="url(#paint0_linear_1391_676)"
            className="origin-center transition-transform duration-300 group-hover:rotate-180"
            style={{ transformBox: 'fill-box' as any }}
          />
        </pattern>
        <linearGradient id="paint0_linear_1391_676" x1="1.9481" y1="2.12758" x2="39.081" y2="58.7552" gradientUnits="userSpaceOnUse">
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