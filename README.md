# Pasos para desplegar página con react en github pages
1. instalar github pages con npm
    - npm i --save-dev gh-pages
2. configurar en el archivo vite.config.js la ruta base del proyecto.
    - Ejemplo:   base: 'https://perea07.github.io/react-shopping-cart'
3. dentro del archivo package.json configurar en el apartado de scripts los siguientes comandos.
    - "predeploy": "npm run build"
    - "deploy": "gh-pages -d dist"
4. Ejecutar el comando npm run deploy (comando para deplegar el proyecto en github pages)