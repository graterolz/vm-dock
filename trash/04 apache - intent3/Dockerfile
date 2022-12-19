From php:7.2-apache
Copy website/ /var/www/html/
Run echo "ServerName localhost" >> /etc/apache2/apache2.conf
COPY site1.conf /etc/apache2/apache2.conf
#COPY site2.conf /etc/apache2/apache2.conf
COPY apache2.sh /root/
RUN bash /root/apache2.sh
RUN rm /root/apache2.sh
RUN docker-php-ext-install pdo pdo_mysql
Expose 80