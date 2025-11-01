import { z } from "zod";

const schema = z.object({
    email: z
      .string()
      .email("E-mail inválido!")
      .nonempty({ message: "Campo obrigatório" }),
    password: 
      z.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .nonempty({ message: "Campo obrigatório" }),
  });

  type Form = z.infer<typeof schema>

  export {schema, type Form}