'use client'
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/form/Button";
import {useState} from "react";
import {IAuthData} from "@/interfaces/auth";


interface IAuthForm {
  onFormSubmit: (authData: IAuthData) => void
}
const AuthForm = ({onFormSubmit}: IAuthForm) => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const onChangeLogin = (login: string) => {
    setLogin(login)
  }
  const onChangePassword = (password: string) => {
    setPassword(password)
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onFormSubmit({login, password})
  }

  return (
    <form className={'flex flex-col max-w-xs justify-self-center'}>
        <Input defaultValue={""} onChange={onChangeLogin} placeholder={"Login"} />
        <Input defaultValue={""} onChange={onChangePassword} placeholder={"Password"} type={'password'}/>
        <Button onClick={onSubmit} text={'Авторизоваться'} />
    </form>
  )



}

export default AuthForm