import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "email",
      type: "email",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
