
// const path=require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports={

// entry: "./app/index.js",

// module:{

// rules:[


//     {
//         test: /\.svg$/,
//         use: 'svg-inline-loader'
//     },

//     {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },


// {

// test:/\.(js)$/,
// use:"babel-loader",


// },



// ],




// },

// output:{


// path: path.resolve(__dirname,"dist"),
// filename:"bundle.js",




// },

// plugins: [new HtmlWebpackPlugin()],
// mode:process.env.NODE_ENV ==="production"?"production":"development",

// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
         test: /\.js$/,
         use: {


           loader: "babel-loader",
            options: {
                 presets: ['@babel/preset-env']
            }


         }

         
         
         


      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()
  
  
  
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
