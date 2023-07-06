import NoneUserLayout from "@/components/layouts/NoneUserLayout/NoneUserLayout";
import AuthForm from "@/components/ui/form/AuthForm";

export default function Auth() {
  return <NoneUserLayout>
    <h1 className={'text-6xl mb-[64px]'}>Авторизация</h1>
    <AuthForm />
  </NoneUserLayout>
}