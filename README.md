# konveyor-common-ui

Reusable React components and TypeScript modules shared between Konveyor UI projects

[![Build Status](https://travis-ci.com/mturley/konveyor-common-ui.svg?branch=master)](https://travis-ci.com/mturley/konveyor-common-ui)

## Usage

**_TODO: figure out details of publishing to npm or adding a prepare script so we can import directly from GitHub_**

### Install from npm

In your app repo, install the library as a normal npm dependency:

```sh
yarn add @konveyor/common-ui
# or:
npm install @konveyor/common-ui
```

### Or, install from GitHub

If you need to use an unpublished branch (such as when developing an app PR and a common-ui PR at the same time), you can reference the dependency directly from GitHub:

**_TODO: figure out details here_**

We should avoid releasing apps this way, installing from npm will be more efficient and reliable. Once the changes you depend on are released, you should switch your app back to the npm version.

### In your JavaScript

In your JS/TS, Import named modules from the library, just like PatternFly:

```js
import { MyComponent, useSomeHook } from '@konveyor/common-ui`;
```

---

## Development

```sh
git clone git@github.com:mturley/konveyor-common-ui.git
cd konveyor-common-ui
yarn install
```

To run the [Storybook](https://storybook.js.org/) dev server (examples and docs) at http://localhost:6006:

```sh
yarn storybook
```

To build the library bundle using Rollup (outputs to `./dist`):

```sh
yarn build
```

To run the type-checker, linter and unit tests:

```sh
# Run all 3:
yarn ci
# Or run them individually:
yarn type-check
yarn lint
yarn test # or yarn test:watch
```

To run Prettier and format your code (do this before committing if you don't run Prettier in your editor)

```sh
yarn format
```

To export the Storybook docs as a static site (outputs to `./storybook-static`):

```sh
yarn storybook:export
```

### Structure

Components live in `src/MyComponent/` directories, which should each contain:

- `MyComponent.tsx` - component source and type interfaces (types can be their own file if they are verbose enough)
- `MyComponent.scss` - any custom styles not covered by PatternFly, we should avoid these when possible
- `MyComponent.stories.tsx` - define your [Storybook stories](https://storybook.js.org/docs/react/get-started/whats-a-story) (examples and docs) for your component
- `index.ts` - define your exports for the component directory

When you add a new component, be sure to also export it at the top level (`src/index.ts`)

---

TODO:

- Add docs extension for Storybook
- Publish Storybook to GitHub pages
- Test importing the TestComponent into another project via GitHub dependency href? Can we do that?
- Look into automated NPM releases when merging PRs or something like that?
- Add reusable components from mig-ui and virt-ui
- Start actually using the thing
