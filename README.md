# Login
* 可以判斷信箱與密碼是否正確

# 環境建置與需求
* Node.js v10.15.0
* Nodemon v2.0.4
* Express v4.17.1
* Express-handlebars v5.1.0
* body-parse v0.1.0
* mongoose v5.10.9
* MongoDB v4.2.9
* Robo 3T v1.4.1
# 安裝與執行步驟

安裝mongoDB  
安裝Robo 3T  
開啟mongoDB伺服器  
連線到mongoDB伺服器  
創建名為 users 的資料庫  

開啟終端機(Terminal)cd 到存放專案本機位置並執行:  

    $ git clone https://github.com/yongde2900/login.git 
至專案資料夾使用npm安裝套件

    $ cd login
    $ npm install
建立種子資料
    $ npm run seed
使用nodemon執行app.js
    $ npm run dev
成功開啟會出現以下訊息

    Express is running on http://localhost:3000
    
進入http://localhost:3000 即可使用本專案
