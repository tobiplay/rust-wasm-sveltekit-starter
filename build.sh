echo "Changing directory to hello-wasm"
cd hello-wasm

echo "Building module from crate as web target at pkg"
wasm-pack build --target web --release

echo "Clearing all files inside svelte/src/hello-wasm"
rm -rf ../src/hello-wasm/*

echo "Copying wasm-game-of-life from rust/pkg to svelte/src/wasm-game-of-life"
cp -r pkg/* ../src/hello-wasm

echo "Changing directory back to main directory"
cd ..

echo "Installing dependencies"
npm i

echo "Building Svelte app"
npm run build

while getopts ":p" opt; do
  case $opt in
    p)
      echo "-p was triggered!" >&2
      echo "Previewing svelte"
      npm run preview
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done