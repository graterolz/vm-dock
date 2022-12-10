$TTL    604800
@       IN      SOA     ns1.seas-linux.es. root.seas-linux.es. (
                  3       ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.seas-linux.es.

; name servers - A records
ns1.seas-linux.es.          IN      A		172.20.0.2

ns.seas-linux.es. 			IN 		A		127.0.0.1
servidor1.seas-linux.es. 	IN 		A 		172.20.0.120
servidor2.seas-linux.es. 	IN 		A 		172.20.0.121
www.seas-linux.es.			IN 		A 		172.20.0.80
mail.seas-linux.es.			IN 		A 		172.20.0.25 