'use client'
import Input from "@/components/ui/form/Input";

const AuthForm =  () => {

  const onChangeLogin = (t:string) => {
    console.log(t)
  }
  return (
    <form className={'flex flex-col max-w-xs justify-self-center'}>
        <Input defaultValue={""} onChange={onChangeLogin} placeholder={"Login"} />
        <Input defaultValue={""} onChange={onChangeLogin} placeholder={"Password"} type={'password'}/>
    </form>
  )



}

export default AuthForm