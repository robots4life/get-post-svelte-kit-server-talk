#! /usr/bin/env bash

# run this inside the Devilbox container
# ./shell.sh

# run this script
# chmod +x copy.sh
# ./copy.sh

# clear

# https://stackoverflow.com/questions/2314750/how-to-assign-the-output-of-a-bash-command-to-a-variable
project_path=$(pwd)
build_path="$project_path/build/"
echo $build_path

static_path="/shared/httpd/static/"
static_htdocs_path="/shared/httpd/static/htdocs"

cd $static_path
echo 'You are now in' && pwd

rm -rf htdocs
echo 'htdocs folder deleted'

mkdir htdocs
echo 'htdocs folder created'

cd $project_path
pwd
# $ rsync [option] [source] [destination]
# copy /build/ to /shared/httpd/static/htdocs folder
rsync -a "$build_path" "$static_htdocs_path" || exit 1

echo $build_path "copied to" $static_htdocs_path