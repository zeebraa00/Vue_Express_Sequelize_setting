# com

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<vue-cli + express-generator + sequelize-cli>

1. express .
2. npm i --save sequelize mysql2
3. sequelize init
----backend 완성(server폴더 만들어서 정리)----
4. vue create . (babel, router, history package.json, n) - 덮어쓰기 유의할 것!!(package.json 등)
5. npm i
----frontend backend 독립적으로 존재하는 상황----
6. npm i --save ejs => jade 대체
(app.js)
app.engine('html', require('ejs'),renderfile);
app.set(('view engine', html);
7. npm i --save connect-history-api-fallback
8. (app.js)
express static 중 public 지우기 (vue충돌)
app.use(history())
if (process.env.NODE_ENV == 'production') {
app.use(express.static(path.join(__dirname, '/../dist')));
} else {
app.use(express.static(path.join(__dirname, '/../dist_dev')));
}
}
9. (package.json)
"build:dev": "vue-cli-service build --mode development --dest dist_dev && set NODE_ENV=development && node server/bin/www",
    "build:dist": "vue-cli-service build --mode production --dest dist && set NODE_ENV=production && node server/bin/www"
10. npm run build:dev
11. npm run build:dist
12. vue.config.js 생성 - module.exports = {productionSourceMap: false}
13. (.gitignore)
/dist_dev에 추가
----설정 끝----
