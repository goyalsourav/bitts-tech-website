export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <img
        src="/bitts-tech-logo.png"
        alt="BittsTech logo"
        className="size-10 rounded-xl object-contain shadow-[0_6px_18px_rgba(40,80,200,0.18)]"
      />
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Bitts<span className="text-primary">Tech</span>
      </span>
    </span>
  )
}
