# Starter template for SvelteKit and WASM from Rust (via Vite)

## Intro

This is a starter template for SvelteKit and WASM from Rust (via Vite). It is based on the SvelteKit template you can create via [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), i.e.,

```bash
npm create svelte@latest
```

## Getting started

You can get started with this template by just forking it and then cloning it to your local machine. Then, you can install the dependencies and run the project in development mode:

```bash
npm install

npm run dev
```

If you're greeted with a pop-up modal (triggered by the WASM part of the app), it's working!

## Building and developing

Building for production is the same as with the original SvelteKit template mentioned above. Therefore, refer to the [SvelteKit documentation](https://kit.svelte.dev/docs/introduction) for more information. We ship this template with an adapter that should work flawlessly on Netlify and Vercel. You can check the deployment link for this app [here](http://rust-wasm-sveltekit-starter.vercel.app/).

If you make changes to the Rust code, you need to rebuild the WASM module via `wasm-pack` and move it to the correct path where Vite can find it. 

Because the process is not too much fun to do manually, I have added an example script (`build.sh`) that does it for you. You may need to adjust the paths, permissions etc. in the script to your needs. You can also just run the following commands manually (from the root of the project), once you're happy with the changes you made to the Rust code:

```bash
cd hello-wasm

wasm-pack build --target web --release

rm -rf ../src/hello-wasm/*

cp -r pkg/* ../src/hello-wasm

cd ..

npm i

npm run build

npm run preview
```

The development experience outside of preparing for deployment, i.e., if you stay in `dev` rather than `preview`, is the same as with the one in the original template also used in the [Rust WASM book](https://rustwasm.github.io/docs/book/game-of-life/setup.html).

Make sure you have the full dev toolchain for Rust and WASM development installed, as per the [Rust WASM book](https://rustwasm.github.io/docs/book/game-of-life/setup.html). It may take a while to install everything and init the first build process, but due to the caching of `wasm-pack`, `cargo`, and `npm`, subsequent builds should be much faster.

After running `npm run build`, you can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
