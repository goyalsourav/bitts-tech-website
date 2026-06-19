export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_6px_18px_rgba(40,80,200,0.3)]">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M5 4h8a4 4 0 0 1 0 8H5zM5 12h9a4 4 0 0 1 0 8H5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Bitts<span className="text-primary">Tech</span>
      </span>
    </span>
  )
}
