import z from "zod";

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(2, 'Слишком короткий имя')
        .max(15, 'Слишком длинный имя')
        .trim(),
    lastName: z
        .string()
        .min(2, 'Слишком короткая фамилия')
        .max(15, 'Слишком длинная фамилия')
        .trim(),
    email: z
        .email('Невалидный email адресс')
        .trim(),
    password: z
        .string()
        .min(8, 'Пароль должен быть не менее 8 символов')
        .regex(/[A-Za-z]/, 'Должны быть только иностранные буквы')
        .regex(/[A-Z]/, 'Должна быть хотя бы одна заглавная буква')
        .regex(/\d/, 'Должна быть хотя бы одна цифра')
        .regex(/[^A-Za-z0-9]/, 'Должен быть хотя бы один специальный символ')
        .trim(),
    confirmPassword: z
        .string(),
    terms: z
        .boolean()
        .refine((data) => data == true, 'Услвовия не приняты')
}).superRefine(({password, confirmPassword}, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmPassword']
        });
    }
})
