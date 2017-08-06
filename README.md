---webpack 官方中文文件 - 練習---

**第一次commit**

首先來個npm管理>>
npm init

再來安裝webpack最新版
npm install --save-dev webpack

**第二次commit**

新增webpack.config.js /dist /src

webpack.config.js設置輸入輸出

**第三次commit**

CSS加載>>
npm install --save-dev style-loader css-loader

圖片加載>>
npm install --save-dev file-loader

//字體跟數據先略過//

**第四次commit**

多項輸入 & 自動生成HTML>>
npm install --save-dev html-webpack-plugin

清理 /dist 文件夹>>
npm install clean-webpack-plugin --save-dev

**第五次commit**

source map & 使用 webpack-dev-server >>
npm install --save-dev webpack-dev-server

**第六次commit**

加入JS程式碼 & sass使用>>
npm install sass-loader node-sass webpack --save-dev

**第七次commit**

將CSS獨立出來，瀏覽器能夠同時載入css和js加快速度>>
npm install --save-dev extract-text-webpack-plugin

**第八次commit**

使用HTML範本 可以直接用webpack切版再轉JS生出代碼了(應該或許可以了吧!)

**第九次commit - 錯誤Error**

webpack -p時最小化程式碼>>
npm install uglifyjs-webpack-plugin --save-dev

**第十次commit - 拿掉編譯的-p**

//---生成檔案時使用webpack 不要加上-p參數--  //--

错误：webpack -p编译时产生下面的错误。webpack编译时没有问题。

ERROR in polyfills.bundle.js from UglifyJs

TypeError: Cannot read property 'sections' of null

原因：

插件（new webpack.optimize.UglifyJsPlugin()）和命令行参数 --opimize-minimize (or -p) 导致重复加入两次UglifyJsPlugin。去掉UglifyJsPlugin插件或者去掉命令行参数 -p 。