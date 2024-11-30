

export default function Buttons({children, color, onClick}) {
  return (
    <button className={`px-2 py-1 ${color} border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300`} onClick={onClick}>
      {children}
    </button>
  )
}
