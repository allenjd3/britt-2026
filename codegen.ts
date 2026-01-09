import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: 'https://brittleeallen.com/wp/graphql',
  documents: ["src/**/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
      ],
    },
  },
};

export default config;