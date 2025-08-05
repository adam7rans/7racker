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
    >
      <path 
        d="M46.4297 35.1406V13.3555C46.4297 12.2509 45.5343 11.3555 44.4297 11.3555H15.5781C14.4736 11.3555 13.5781 12.2509 13.5781 13.3555V35.1406M46.4297 35.1406H13.5781M46.4297 35.1406L51.1805 45.8345C51.768 47.157 50.7999 48.6465 49.3527 48.6465H10.6551C9.20793 48.6465 8.23981 47.157 8.82735 45.8345L13.5781 35.1406" 
        stroke="currentColor" 
        strokeWidth="1"
      />
    </svg>
  );
}