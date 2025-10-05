import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "title",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(2)
          .max(15)
          .required()
          .error(
            "Category is required and must be between 2 and 15 characters"
          ),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) =>
        Rule.required().error("A valid image URL is required"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
