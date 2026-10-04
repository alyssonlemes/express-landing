export function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19.414 19.414" aria-hidden="true">
      <g transform="translate(-3.5 -3.5)">
        <path d="M19.611,12.056A7.556,7.556,0,1,1,12.056,4.5,7.556,7.556,0,0,1,19.611,12.056Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M29.083,29.083l-4.108-4.108" transform="translate(-7.583 -7.583)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function UserCheckIcon() {
  return (
    <svg width="17" height="14" viewBox="0 0 16.907 13.526" aria-hidden="true">
      <path fill="currentColor" d="M5.918,6.763A3.381,3.381,0,1,0,2.536,3.381,3.381,3.381,0,0,0,5.918,6.763Zm2.367.845H7.843a4.6,4.6,0,0,1-3.852,0H3.551A3.551,3.551,0,0,0,0,11.159v1.1a1.268,1.268,0,0,0,1.268,1.268h9.3a1.268,1.268,0,0,0,1.268-1.268v-1.1A3.551,3.551,0,0,0,8.285,7.608Zm8.533-3.392-.734-.742a.313.313,0,0,0-.444,0L12.871,6.219l-1.2-1.21a.313.313,0,0,0-.444,0l-.742.737a.313.313,0,0,0,0,.444l2.158,2.174a.313.313,0,0,0,.444,0l3.733-3.7a.316.316,0,0,0,0-.444Z" />
    </svg>
  );
}

export function DropIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 13.569 13.569" aria-hidden="true">
      <g transform="translate(-3.375 -3.375)">
        <path d="M10.166,14.6a.632.632,0,0,0,0,.89L13.288,18.6a.629.629,0,0,0,.868.02l3.076-3.066a.628.628,0,1,0-.887-.89l-2.642,2.6L11.057,14.6A.629.629,0,0,0,10.166,14.6Z" transform="translate(-3.542 -5.918)" fill="currentColor" />
        <path d="M3.375,10.159a6.784,6.784,0,1,0,6.784-6.784A6.783,6.783,0,0,0,3.375,10.159ZM14.217,6.1a5.733,5.733,0,1,1-4.058-1.683A5.691,5.691,0,0,1,14.217,6.1Z" fill="currentColor" />
      </g>
    </svg>
  );
}

export function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}>
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4.2A1.65 1.65 0 1 0 5.12 7.5 1.65 1.65 0 0 0 5.1 4.2zM20.3 20h-2.8v-5.5c0-1.55-.55-2.4-1.7-2.4-1.05 0-1.6.7-1.86 1.38-.1.23-.08.55-.08.87V20h-2.8s.04-9.1 0-10.5h2.8v1.7c.37-.57 1.04-1.9 2.7-1.9 1.97 0 3.46 1.29 3.46 4.06V20z" />
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6c-.22-.86-.9-1.54-1.76-1.76C19.4 5.4 12 5.4 12 5.4s-7.4 0-8.84.44c-.86.22-1.54.9-1.76 1.76C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.22.86.9 1.54 1.76 1.76C4.6 19 12 19 12 19s7.4 0 8.84-.44c.86-.22 1.54-.9 1.76-1.76.4-1.4.4-4.6.4-4.6zM9.75 15.5v-6.6l6.2 3.3-6.2 3.3z" />
    </svg>
  );
}
