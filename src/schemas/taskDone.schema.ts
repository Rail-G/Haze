import z from "zod";

export const taskDoneSchema = z.object({
    intervention: z
        .string(),
    staffs: z
        .array(z
            .string()
            .min(5, 'Не верю, что имя такое маленькое')
            .max(40, 'Не верю, что имя такое длинное')
            .trim()
        )
        .min(0)
        .max(3),
    images: z
        .array(z
            .instanceof(File)
        )
        .min(1, 'Это поле обязательна')
})
