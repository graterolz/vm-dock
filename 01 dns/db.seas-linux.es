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
ns.seas-linux.es. 			IN 		A		127.0.0.1
ns1.seas-linux.es.            IN        A		172.20.0.2

public.seas-linux.es          IN        A         172.20.0.3
restricted.seas-linux.es      IN        A         172.20.0.4
authenticated.seas-linux.es   IN        A         172.20.0.5