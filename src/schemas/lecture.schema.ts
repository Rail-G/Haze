import z from "zod";

export const lectureSchema = z.object({
    count: z
            .string()
            .refine((data) => !(Number(data) == 0), 'Это поле обязательна')
            .refine((data) => 1 <= Number(data) && !/^0\d+$/.test(data.toString()), 'Только положительные числа'),
            
    intervention: z
        .string(),
    images: z
        .array(z
            .instanceof(File)
        )
        .min(1, 'Это поле обязательна')
})
