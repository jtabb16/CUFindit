FROM nginx:stable
EXPOSE 80
EXPOSE 443
RUN apt-get update && apt-get install -y \
    certbot \
    python-certbot-nginx \
    python3-certbot-dns-digitalocean \
    openssl
COPY DigitalOcean/certbot/digitalocean.ini /root
RUN certbot certonly \
  --dns-digitalocean \
  --dns-digitalocean-credentials root/digitalocean.ini \
  --agree-tos \
  --email jbtabb@g.clemson.edu \
  -d cufindit.tech \
  -d *.cufindit.tech \
  -i nginx
