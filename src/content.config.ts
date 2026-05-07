import { defineCollection, z } from "astro:content";

const intent = z.enum(["informational", "commercial", "transactional"]);
const persona = z.enum(["Coach", "Consultor", "Formador", "Agencia", "Solopreneur"]);

const tools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    toolId: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    affiliateUrl: z.string().url(),
    pricing: z.string(),
    idealUser: persona,
    rating: z.number().min(1).max(10),
    tags: z.array(z.string()).default([]),
    searchIntent: intent.default("commercial"),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    affiliate: z
      .object({
        commissionType: z.enum(["Recurrente", "OneTime"]),
        commissionRange: z.string(),
        cookieDays: z.number(),
        platform: z.string()
      })
      .optional()
  })
});

const comparisons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    toolsCompared: z.array(z.string()),
    verdict: z.string(),
    searchIntent: intent.default("commercial"),
    seoKeywords: z.array(z.string()).default([])
  })
});

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    difficulty: z.enum(["Basico", "Intermedio", "Avanzado"]),
    persona,
    scenario: z.string(),
    toolsUsed: z.array(z.string()),
    timeSaved: z.string(),
    featured: z.boolean().default(false),
    searchIntent: intent.default("informational")
  })
});

const pillars = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    sections: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    searchIntent: z.literal("informational")
  })
});

export const collections = { tools, comparisons, guides, pillars };
