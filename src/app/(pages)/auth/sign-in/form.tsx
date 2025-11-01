"use client";

import { Form } from "@/components/ui/form";
import { RHFTextField } from "@/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, Form as FormType } from "./validate";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignInForm = () => {
  const methods = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (dataForm) => {
    console.log("Form data:", dataForm);
  });

  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex flex-col gap-4">
          <RHFTextField
            name="email"
            placeholder="E-mail"
            label="E-mail"
            icon={<Mail className="h-4 w-4" />}
          />
          <RHFTextField
            name="password"
            placeholder="Senha"
            label="Senha"
            icon={<Lock className="h-4 w-4" />}
            iconTogglePassword={true}
          />
        </div>

        <Button className="w-full mt-10 bg-red-600 hover:bg-red-700 cursor-pointer">Entrar</Button>
        <p className="mt-5 w-full flex items-center justify-center gap-2">
          Ja tem uma conta? 
          <Link href="/auth/sign-up" className="text-red-600">Cadastre-se</Link>
        </p>
      </form>
    </Form>
  );
};


