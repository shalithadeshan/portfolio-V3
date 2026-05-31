import next from "eslint-config-next";

/** Next 16 ships eslint-config-next as a native flat config array. */
const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];

export default eslintConfig;
