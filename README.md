# Menelas

Démarrer l'environnement de dev :
```bash
docker-compose up -d --build
```
Cette commande crée 2 services : 
- mariadb (qui contient une base de données avec un set de données de tests)
- api (serveur nodejs avec connection à la base + routes de test)
Le service api utilise nodemon et ne nécessite donc pas le rebuild du conteneur pour integrer les modifications effectuées en local.
J'ai juste fait un dossier pour les routes, mais on pourra ranger le reste un peu mieux si tu veux.

Les variables de connections à la db ne passe pas par un .env parce que j'avais la flemme.

                                