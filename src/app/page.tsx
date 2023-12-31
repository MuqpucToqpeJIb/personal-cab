'use server'
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Home() {
  const cookieStore = cookies()
  const isAuth = cookieStore.get('token' as any)
  if (typeof isAuth === 'undefined') {
    redirect('/auth')
  } else {
    redirect('/dashboard')
  }

  return (
    <main>
      <h1 className={'text-5xl flex justify-center my-4'}>Персональный  кабинет</h1>
    </main>
  )
}
