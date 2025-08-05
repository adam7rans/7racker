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
    >
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}