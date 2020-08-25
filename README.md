# @konveyor/lib-ui

Reusable React components, hooks, and TypeScript modules shared between Konveyor UI projects.

This library exists as a place to store and reuse abstractions that are useful for multiple Konveyor UI projects, and are either not available in PatternFly yet or not covered by PatternFly's scope.

The React components in this library are compositions and extensions of [patternfly-react](https://github.com/patternfly/patternfly-react) components, and we should avoid duplicating components that are available there.

[![Build Status](https://travis-ci.com/konveyor/lib-ui.svg?branch=master)](https://travis-ci.com/konveyor/lib-ui)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Documentation and examples (Storybook): http://konveyor.github.io/lib-ui/

## Usage

### Install from npm

In your app repo, install the library as a normal npm dependency:

```sh
yarn add @konveyor/lib-ui
# or:
npm install @konveyor/lib-ui
```

### Or, install from GitHub

If you need to use an unpublished branch (such as when developing an app PR and a common-ui PR at the same time), you can reference the dependency directly from GitHub:

**_TODO: figure out details here_**

We should avoid leaving apps configured this way; installing from npm will be more efficient and reliable. Once the changes you depend on are released, you should switch your app back to the npm version.

### Install peer dependencies

This package has React and PatternFly packages as peer dependencies, which are not included in the library bundle. That way, your app can also depend on them directly without bundling them twice.

When you install @konveyor/lib-ui, you should get a warning from your package manager telling you which versions to install. [Make sure you have compatible versions](https://github.com/konveyor/lib-ui/blob/master/package.json#L30) as dependencies in your app.

### Use it!

In your JS/TS, Import named modules from the library, just like PatternFly:

```js
import { MyComponent, useSomeHook } from '@konveyor/lib-ui';
```

---

## Development

### Prerequisites

- [NodeJS](https://nodejs.org/en/) >= 10.x
- [Yarn "Classic"](https://classic.yarnpkg.com/lang/en/) (1.x)

### Quick-start

Clone and install dependencies:

```sh
git clone https://github.com/konveyor/lib-ui.git konveyor-lib-ui
cd konveyor-lib-ui
yarn install
```

Run the [Storybook](https://storybook.js.org/) dev server (examples and docs) at http://localhost:6006:

```sh
yarn storybook
```

### Scripts

To run the type-checker, linter and unit tests:

```sh
# Run all 3:
yarn ci
# Or run them individually:
yarn type-check
yarn lint [--fix]
yarn test [--watch]
```

[Prettier](https://prettier.io/) code formatting is enforced by ESLint. To run Prettier and format your code (do this before committing if you don't run Prettier in your editor):

```sh
yarn format
```

To run a production build using Rollup (outputs to `./dist`):

```sh
yarn build
```

To export the Storybook docs as a static site (outputs to `./storybook-static`):

```sh
yarn storybook:export
```

## Triggering an npm release

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) via GitHub Actions to automate its npm releases. When a PR is merged to master, it is checked for specific key words in the commit message to decide whether a release needs to be made, and whether it will be a minor or major version bump.

To assist in formatting commit messages correctly for this purpose, the repo is set up for use with [Commitizen](http://commitizen.github.io/cz-cli/), which provides a CLI for guided commit messages.

**To make a commit that should trigger a release**:

First, `git add` any changes you want to commit, then:

```sh
yarn commit
```

Follow the prompts based on the scope of your commit. When your commit is merged to master, an automatic release will be triggered and a message will be posted to your PR when it is complete.

## File Structure

Components live in `src/MyComponent/` directories, which should each contain:

- `MyComponent.tsx` - component source and type interfaces (types can be their own file if they are verbose enough)
- `MyComponent.scss` - any custom styles not covered by PatternFly, we should avoid these when possible
- `MyComponent.stories.tsx` - define your [Storybook stories](https://storybook.js.org/docs/react/get-started/whats-a-story) (examples and docs) for your component
- `MyComponent.test.tsx` - unit tests using [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- `index.ts` - define your exports for the component directory

When you add a new component, be sure to also export it at the top level (`src/index.ts`)

---

## TODO:

- Add docs extension for Storybook
- Test importing into another project via GitHub dependency href? Can we do that?
- Add reusable components from mig-ui and virt-ui
- Start actually using the thing
- Unit tests?
