FROM nginx:alpine
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY . /usr/share/nginx/html
ENV NGINX_ENVSUBST_FILTER=PORT
