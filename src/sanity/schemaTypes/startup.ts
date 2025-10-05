import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "companyName" },
    }),
    defineField({
      name: "companyName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "stage",
      type: "string",
    }),
    defineField({
      name: "fundingGoal",
      type: "number",
    }),
    defineField({
      name: "fundingRaised",
      type: "number",
    }),
    defineField({
      name: "teamSize",
      type: "number",
    }),
    defineField({
      name: "votes",
      type: "number",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "founded",
      type: "string",
    }),
    defineField({
      name: "logo",
      type: "url",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "founders",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "avatar", type: "url" }),
          ],
        },
      ],
    }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "isBookmarked", type: "boolean" }),
    defineField({ name: "createdAt", type: "datetime" }),
    defineField({ name: "views", type: "number" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "image", type: "url" }),
    defineField({ name: "pitch", type: "markdown" }),
  ],
});
