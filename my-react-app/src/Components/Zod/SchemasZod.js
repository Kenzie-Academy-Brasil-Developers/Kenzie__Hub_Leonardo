import {z} from "zod" ;

export const addScrapSchema = z.object({
    title: z.string().min(1 ,"Descreva um nome") , 
    status:z.string().nonempty('Selecione um modulo')
})

export const registerSchema = z.object({

    nome: z.string().min(2,'Nome precisa ter 2 ou mais caracteres'),
    email: z.string().min(1,'Insira um Email').email(),    
    bio:z.string().min(5,'Bio precisa ter mais que 5 caracteres'),
    contato:z.string().min(2,'Insira uma forma de contato'),
    senha: z.string()
      .min(8, 'Senha precisa ter 8 ou mais caracteres')
      .regex(/[A-Z]/, 'Senha precisa ter ao menos uma letra maiuscula')
      .regex(/[a-z]/, 'Senha precisa ter ao menos uma letra minuscula')
      .regex(/[0-9]/, 'Senha precisa ter ao menos um numero')
      .regex(/[-!@#$%^&*()_+=[\]{};:'"\\|,.<>/?`~]/, 'Senha precisa ter um caracter especial'),
      confirm: z.string().nonempty("As senhas não correspondem."),
      course_module:z.string().nonempty('Selecione um modulo')
    })
    .refine(({ senha, confirm }) => senha === confirm, {
      message: "As senhas não correspondem.",
      path: ["confirm"],
    })
    