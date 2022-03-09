# Couple of team notes

Make sure you enable **Prettier** as a plugin, regardless of the editor/IDE you're using (this is being pushed from Webstorm, but VSCode works similarly). Auto-format on save will be your biggest friend!

Before interacting with any code, ensure you have all the dependencies installed, and are using **Node LTS v16.14.0 or later, and npm v8.5.2 or later**. Recommedation here is to use **nvm** (Node Version Manager) to download and switch between Node and npm versions. If you aren't on nvm, and you're having trouble navigating between Node versions, recommendation is to uninstall node and npm, then download nvm to install node directly through it.
```bash
node -v
npm -v
npm install
```

Personal recommendation for cloning, branching, or any other git actions is by using **[GitHub Desktop](https://desktop.github.com/)**. This enables easy fetch, pull, and merging, as well as consistent committing, branching, and pushing options. Third party applications for VCS may not work well with the access restrictions in this organizations, but GitHub Desktop is a safe, intuitive way of solving these issues.

Make sure you **fetch and pull** from main ***frequently***.

Refer to [Next.js documentation wherever possible](https://nextjs.org/docs/testing#jest-and-react-testing-library).

You may have noticed TypeScript is enabled here. Majority of the coding will not be in TypeScript per se, but I'm thinking it will be beneficial to have with respect to using ORM libraries and APIs. 








# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
