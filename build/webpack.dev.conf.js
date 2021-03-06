'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const express = require('express')
const app = express()
var router = express.Router()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hlj1010',
    database:'mydata'
});
connection.connect();




const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: 
  {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },


    before(app){
          app.get('/charge',function(req,res){  //路由所有产品
                connection.query('SELECT * FROM product', function(err, rows, fields)  
                {
                  if (err) throw err;   
                  res.json(rows);      
                });
             
          }),
          app.get('/list',function(req,res){  //请求菜单列表
            connection.query('SELECT * FROM category', function(err, rows, fields)  
            {
              if (err) throw err;  
              res.json(rows);      
            });
         
          }),
          app.get('/good',function(req,res){  //请求产品分类
            var s =req.query.id;
            console.log(s);
            var st = "SELECT * FROM product WHERE category_id="+s;
            connection.query(st, function(err, rows, fields)  
            {
              if (err) throw err;  
              res.json(rows);      
            });
          }),
          app.get('/goodbyke',function(req,res){  //请求购物车数据
            var st = "SELECT * FROM orders";
            connection.query(st, function(err, rows, fields)  
            {
              if (err) throw err;  
              res.json(rows);      
            });
          }),
          app.get('/bykegood',function(req,res){  //请求购物车单个商品详情
            var s = req.query.id;
            var st = "SELECT * FROM product WHERE product_id="+s;
            connection.query(st, function(err, rows, fields)  
            {
              if (err) throw err;  
              res.json(rows);      
            });
          }),
          app.get('/toorderdb',function(req,res){  //刷新购物车商品数量,总金额
            var s = req.query.pid;
            var d = req.query.count;
            var a = req.query.allprice;
            var st = "UPDATE orders SET ocount="+d+","+ "total_price="+ a +" "+"WHERE product_id="+s;
            console.log(a);
            connection.query(st, function(err, rows, fields)  
            {
              if (err) throw err;  
              res.json(rows);    
            });
          //关闭连接connection.end();
          })
        },
  },


  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})



