# parcel-starter-scss

## How to install / Setup the starter
```
git clone https://github.com/davidvenin/starter-flexboxgrid.git
cd starter-flexboxgrid
npm install or yarn
parcel index.html
```

## Git stuff
Avant toute chose, vérifier que votre dossier parcel-starter-scss ne fait pas parti d'un dossier parent avec un dossier .git. Si c'est le cas, vous rendre dans le dossier parent (via le terminal, cd ..) et saisir la commande :
```
rm -rf .git
```
Cela vous permettra d'éviter des conflits. La commande supprime le dossier. Ensuite, vous rendre une nouvelle fois dans votre dossier parcel-starter-scss et saisir dans l'ordre :

```bash
git remote remove origin
# Cette commande permet de débrancher votre dossier de mon repository sur github
git remote add origin https://url-vers-votre-repo.gitlab/nom-du-repo.git
# La commande ci-dessus permet de brancher votre dossier à votre repo fraîchement crée. ATTENTION, il doit être VIDE.
git add .
# Permet d'ajouter tous les fichiers/dossiers de votre projet
git commit -m 'nom de vos modifications'
git push origin master
```
Si jamais vous avez encore des problèmes :
```bash
# Dans votre dossier parcel-starter-scss
rm -rf .git
git init
git remote add origin https://url-vers-votre-repo.gitlab/nom-du-repo.git 
git add .
git commit -m 'nom de vos modifications'
git push origin master
```
## Build process

Avant de mettre votre dossier dist sur le serveur eemi :
```
parcel build index.html --public-url ./
```

Puis, mettre le dossier dist sur le serveur.