import logo from 'assets/logo.svg'

export const LogoComponent: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo.src} alt="Подрамники Минск" className="h-[42px]" />
      <span className="text-light font-bold uppercase text-[20px]">
        Подрамники
      </span>
    </div>
  )
}
