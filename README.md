## Introduction

This small project is an extension to Justin Kim's amazing [Redux Toolkit and React tutorial](https://www.youtube.com/watch?v=9lCmbth63k0). I designed yet **another Todo App** and implemented the same store using [Easy Peasy](https://easy-peasy.now.sh/) to add a comparison with one more global state tool for React.

## Usage

The store implementation file for each tool are in the src folder:

```
/src
  -redux-og.ts
  -redux-rtk.ts
  -easy-peasy.ts
```

To change to a different implementation just uncomment the code snippets highlighted in the files:

```
/src
  -index.tsx
  /components
    /Counter
      -index.tsx
    /Form
      -index.tsx
    /Todos
      -index.tsx
```

To start the app in development mode run the command `yarn start` in the root directory.
