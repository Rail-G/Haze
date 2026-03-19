import z from "zod";

export const taskSchema = z.object({
    title: z
        .string()
        .min(4, 'Слишком короткий заголовок')
        .max(50, 'Слишком длинный заголовок')
        .trim(),
    description: z
        .string()
        .min(25, 'Слишком короткое описания')
        .max(500, 'Слишком длинное описания')
        .trim(),
    reward: z
        .string()
        .refine((data) => 1 < Number(data) && !/^0\d+$/.test(data.toString()), 'Только положительные числа'),
    conditions: z
        .array(z
            .string()
            .min(5, 'Слишком короткое условие')
            .max(100, 'Слишком длинное условие')
            .trim()
        )
        .min(0)
        .max(3),
    image: z.
        instanceof(File, { message: 'Отсутсвует изображения обложки' })
})