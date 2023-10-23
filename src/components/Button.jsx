import { Children } from "react"
import { getClasses } from "../utils/getClasses"

const buttonTypes = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
}

function Button({children,type, variant, ...rest}) {
  return (
    <button className={getClasses(['btn', buttonTypes[variant]])} type={type === 'submit' ? 'submit' : 'button'}
    {...rest}>
      {children}
    </button>
  )
}

function SelectButton({ children, ...rest }) {
  return (
    <select className="form-select mx-4 my-4 px-4 py-4" {...rest}>
      {children}
    </select>
  );
}


export  {SelectButton};
export default Button;
