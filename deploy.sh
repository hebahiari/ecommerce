cd /var/www
git pull
cd client
npm run build
cp -R ./build/* /var/www/api/public/