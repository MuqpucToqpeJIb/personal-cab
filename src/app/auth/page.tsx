import NoneUserLayout from "@/components/layouts/NoneUserLayout/NoneUserLayout";
import AuthForm from "@/components/ui/form/AuthForm";
import {cookies} from "next/headers";
import {IAuthData} from "@/interfaces/auth";
import {ToastContainer, toast} from 'react-toastify'
import {useAppSelector} from "@/store/store";
export default function Auth() {
  const isAuth = useAppSelector(state => state.authReducer.value.isAuth)
  const authHandler =  async (e: IAuthData) => {
    'use server'
    const resp = await auth(e)
    if (resp.status === 'success') {
      'use client'
      toast('EFFF')
    }
  }

  return (
    <NoneUserLayout>
      <h1 className={'text-6xl mb-[64px]'}>Авторизация</h1>
      <AuthForm onFormSubmit={authHandler} />
    </NoneUserLayout>
  )
}


export async function auth(e: IAuthData) {
  if (e.password === 'admin') {
    cookies().set('token', JSON.stringify(e))
    return {status: 'success'}
  }else {
    return {status: 'false'}
  }
}
