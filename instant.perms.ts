import type { InstantRules } from "@instantdb/core";

const rules = {
  projects: {
    allow: {
      view: "true",
      create: "auth.id != null",
      update: "auth.id != null",
      delete: "auth.id != null",
    },
  },
} satisfies InstantRules;

export default rules;
