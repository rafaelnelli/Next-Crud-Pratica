interface BotaoProps {
  children: any,
  from?: 'green' | 'blue' | 'gray',
  to?: 'green' | 'blue' | 'gray',
  className?: string,
  onClick?: () => void

}

export default function Botao(props: BotaoProps) {
  return (
    <button onClick={props.onClick}
      className={`
        bg-gradient-to-r from-blue-500 to-blue-700 rounded-md py-2 px-2 text-white 
        ${props.className}
      `}>
      {props.children}
    </button>
  );
}