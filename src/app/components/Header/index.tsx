interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-sm text-zinc-400">{subtitle}</span>
    </div>
  )
}
