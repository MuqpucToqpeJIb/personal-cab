
interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

const Button = ({text, onClick}: IButton) => {
  return <button className={"bg-gray-200 hover:bg-gray-300 px-[12px] py-[16px] rounded-[8px]"}
                 onClick={onClick}>{text}</button>
}

export default Button