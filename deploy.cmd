echo "Build started"
call ng build --output-path docs --base-href /sskj/
echo "Build ended"

echo "Files staging started"
git add .
echo "Files staged"

echo "Commit started"
git commit -m "Mobile menu color change"
echo "Commit ended"

echo "Pulling from remote"
git pull

echo "Pushing to remote"
git push
echo "Deployed"