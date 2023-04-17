#! /usr/bin/env bash

# run this inside the Devilbox container
# ./shell.sh

# run this script
# chmod +x build.sh
# ./build.sh

clear

# https://stackoverflow.com/questions/2314750/how-to-assign-the-output-of-a-bash-command-to-a-variable
project_path=$(pwd)
build_path="$project_path/build/"
sveltekit_path="$project_path/.svelte-kit"

rm -rf $sveltekit_path
rm -rf $build_path