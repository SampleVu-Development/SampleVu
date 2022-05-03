# SampleVu

SampleVu is a digital product management app and feedback collection tool designed to streamline and organize product development processes in the food industry.

**NOTE**: This project is still a work in progress and is not the complete product

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

**Testing**

- [Jest](https://jestjs.io/docs/getting-started)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

We highly recommend enabling **[Prettier](https://prettier.io/)** as a plugin, regardless of the editor/IDE you're using, in order to maintain consistent formatting for the project's code.

For more information about our design decisions, please refer to our **[Design Document](https://tarheels.live/523eggplants/d2-design-document-2/)**

## Installation

### Cloning Repository

There are two ways to clone the repository from GitHub

Our personal recommendation for cloning, branching, or any other git actions is by using **[GitHub Desktop](https://desktop.github.com/)**. This enables easy fetch, pull, and merging, as well as consistent committing, branching, and pushing options. Third party applications for VCS may not work well with the access restrictions in this organizations, but GitHub Desktop is a safe, intuitive way of solving these issues.

You can also manually clone the SampleVu repository:

```bash
git clone https://github.com/SampleVu-Development/SampleVu.git
```

### Installing Dependencies

Before interacting with any code, ensure you have all the dependencies installed, and are using **Node LTS v16.14.0 or later, and npm v8.5.2 or later**. Recommedation here is to use **nvm** (Node Version Manager) to download and switch between Node and npm versions. If you aren't on nvm, and you're having trouble navigating between Node versions, recommendation is to uninstall node and npm, then download nvm to install node directly through it.

```bash
node -v
npm -v
```

You can install all of the required dependencies using npm

```bash
npm install
```

## Usage

Unfortunately, there is currently no server hosting SampleVu (work in progress), but Next.js does provide the ability to host the application locally

After the installation is complete:

- Run `npm run dev` to start the development server on `http://localhost:3000`
- Visit `http://localhost:3000` to view your application
- You can access different pages using their routes (i.e., `http://localhost:3000/results`)

User Documentation can be found in the **[Documentation Plan](https://docs.google.com/document/d/1yZpJIDNbC75nkTlyxJNe-o-vq9OYhQEVyy5llgnbNqg/edit?usp=sharing)**
