# SampleVu

SampleVu is a digital product management app and feedback collection tool designed to streamline and organize product development processes in the food industry.

## About Our Code

**(Documentation will be linked below)**

**Languages**

- JavaScript
- TypeScript

**Frontend**

- **Framework**: [Next.js (React)](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/docs/installation), [Ant Design](https://ant.design/docs/react/introduce)
- **Other Libraries**: [Ant Design Charts](https://charts.ant.design/en/docs/manual/introduction)

**Backend**

- **Framework**: Next.js, [Node.js](https://nodejs.org/en/docs/)
- **API Architecture**: [REST](https://restfulapi.net/)

**Database**

- [Prisma ORM](https://www.prisma.io/docs/)
- [PostgreSQL](https://www.postgresql.org/docs/)

**Server**

- **Frontend**: [Vercel](https://vercel.com/docs)
- **Database**: [Amazon RDS](https://docs.aws.amazon.com/rds/index.html?nc2=h_ql_doc_rds)

We highly recommend enabling [Prettier](https://prettier.io/) as a plugin, regardless of the editor/IDE you're using, in order to maintain consistent formatting for the project's code.

For more information about our design decisions, please refer to our [Design Document](https://tarheels.live/523eggplants/d2-design-document-2/)

## Installation

### Cloning Repository

There are two ways to clone the repository from GitHub

Our personal recommendation for cloning, branching, or any other git actions is by using **[GitHub Desktop](https://desktop.github.com/)**. This enables easy fetch, pull, and merging, as well as consistent committing, branching, and pushing options. Third party applications for VCS may not work well with the access restrictions in this organizations, but GitHub Desktop is a safe, intuitive way of solving these issues.

You can also manually clone the SampleVu repository:

```bash
git clone https://github.com/SampleVu-Development/SampleVu.git
```

Before interacting with any code, ensure you have all the dependencies installed, and are using **Node LTS v16.14.0 or later, and npm v8.5.2 or later**. Recommedation here is to use **nvm** (Node Version Manager) to download and switch between Node and npm versions. If you aren't on nvm, and you're having trouble navigating between Node versions, recommendation is to uninstall node and npm, then download nvm to install node directly through it.

```bash
node -v
npm -v
npm install
```

# Couple of team notes

Make sure you **fetch and pull** from main **_frequently_**.

Refer to [Next.js documentation wherever possible](https://nextjs.org/docs/testing#jest-and-react-testing-library).

You may have noticed TypeScript is enabled here. Because plain JS is valid TS, we've decided to do the rest of the coding in TypeScript so that we can properly type and document various props and whatnot passed down components. Also enables us to catch a fair amount of bugs at compile time, and will be much more maintainable as the project develops. Because Next.js 12 has a built-in TS compiler in their Rust SWC, it'll be fair better to work with than if we had used Babel. It will also be beneficial to have with respect to using ORM libraries (most likely using Prisma) and APIs.

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
