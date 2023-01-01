先npm init -->package.json 配置文件

npm install --save-dev @babel/core @babel/cli

npm install --save-dev @babel/preset-env


新建 babel.config.json 补充presets


// 监听src文件夹所有文件，转换到lib文件夹中
npx babel src --watch --out-dir lib
