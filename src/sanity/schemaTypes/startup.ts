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
      title: "Company Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "stage",
      type: "string",
      title: "Stage",
    }),
    defineField({
      name: "fundingGoal",
      type: "number",
      title: "Funding Goal",
    }),
    defineField({
      name: "fundingRaised",
      type: "number",
      title: "Funding Raised",
    }),
    defineField({
      name: "teamSize",
      type: "number",
      title: "Team Size",
    }),
    defineField({
      name: "votes",
      type: "number",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "founded",
      type: "string",
      title: "Founded",
    }),
    defineField({
      name: "logo",
      type: "url",
      title: "Logo",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "founders",
      type: "array",
      title: "Founders",
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
    defineField({ name: "isBookmarked", type: "boolean" }),
    defineField({ name: "createdAt", type: "datetime" }),
    defineField({ name: "views", type: "number" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "image", type: "url" }),
    defineField({ name: "pitch", type: "markdown", title: "Pitch" }),
  ],
});
