import z from "zod";

export const newsSchema = z.object({
    title: z
        .string()
        .min(4, 'Слишком короткий заголовок')
        .max(50, 'Слишком длинный заголовок')
        .trim(),
    category: z
        .string()
        .min(3, 'Слишком короткая категория')
        .max(20, 'Слишком длинная категория')
        .trim(),
    image: z.
        instanceof(File, { message: 'Отсутсвует изображения обложки' }),
    text: z
        .string()
        .min(100, 'Слишком короткий текст')
        .trim()
})
