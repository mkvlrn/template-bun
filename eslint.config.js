import { base } from "@mkvlrn/eslint";

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
export default [
  ...base,
  {
    ignores: ["node_modules"],
  },
];
