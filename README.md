# tRPC in a Monorepo with TypeScript project references
This is an example of how to use tRPC in a monorepo with TypeScript project references.

The project consists of two packages `client` and `server`. Each package has its own `tsconfig.json` file, which extends from the root `tsconfig.options.json` file. The `client` package references the `server` package in its `tsconfig.json` file. TypeScript path aliases are defined in the `tsconfig.json` file of each package, not in the root `tsconfig.options.json` file. 

## Links
- [tRPC minimal working example](https://github.com/trpc/trpc/tree/main/examples/minimal)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Moonrepo](https://moonrepo.dev/docs/guides/javascript/typescript-project-refs#importing-source-files-from-local-packages)