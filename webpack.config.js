const HtmlWebpackPlugin = require('html-webpack-plugin') // para que wp me de el html
module.exports = {
  // por que webpack tiene que esportar un objeto
  output: {
    // le decimos a webpack como se va a llamar el archivo con el js empaquetado
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Aplique esta regla a todos los archivos js
        exclude: /node_modules/, // menos a node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
