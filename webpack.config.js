// webpack.config.js

// Permet de résoudre des chemins de fichiers
const path = require("path");

module.exports = {
    // Le fichier qui sert de point d'entrée et qui importe les différentes dépendances de l'application
    entry: "./src/app.js",
    // Le dossier et nom du fichier qui sera généré par Webpack après le build
    // Webpack va donc intégrer l'ensemble des modules (dépendances) nécessaires dans un seul fichier dist/app.js
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    // Explique la façon dont nos modules JS devront être traités
    module: {
        // Permet d'expliciter les règles à suivre en fonction des fichiers
        rules: [
            {
                // Tout fichier qui aura l'extension .js ou .jsx (aussi utilisé pour marquer les fichiers contenant du JSX)
                test: /\.(js|jsx)$/,
                // A l'exception du dossier node_modules
                exclude: /node_modules/,
                // Devra être traité via babel
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
                }
        ]
    }
};