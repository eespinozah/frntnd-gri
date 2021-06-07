FROM docker.pkg.github.com/m-risk/static-nginx/static-nginx:1.0.9

LABEL maintainer="gmunoz@m-risk.com"

ADD build /mnt/
