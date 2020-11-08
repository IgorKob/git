…or create a new repository on the command line
echo "# myreact" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/IgorKob/myreact.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/IgorKob/myreact.git
git branch -M main
git push -u origin main

//////////////
Створіть виробничу збірку вашого додатка та розгорніть його на сторінках GitHub. (2 хвилини)
$ npm run deploy
//
$ git add .
$ git commit -m "Create a React app and publish it to GitHub Pages"
$ git push origin master

////
react github pages
gh-pages
github.com/gitname/react-gh-pages

две ветки:
master - здесь лежит исходный код
gh-pages - здесь лежит билд, который хостится

в package.json нужно добавить:
homepage: "https://{username}.github.io/{repositoryName}"

"devDependencies" : {
"gh-pages" : "{version}"
}

"scripts" : {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}


проблемма с cors - на API сервере должен быть разрешен github.com

проблемма с перезагрузкой страницы (F5) на роуте отличающемся от url по которому хостится наша страница на git hub pages {domainName}/{repositoryName}
нужно чтобы наши урлы были относительно этого пути
{domainName}/{repositoryName} (!!а не этого {domainName} )
для этого нужно настроить brouserRouter
medium.com/@Dragonza/react-router-problem-with-gh-oages-c93a5e243819
<BrouserRouter basename={ process.env.PUBLIC_URL}>
...
</BrouserRouter>
process.env.PUBLIC_URL - это из мира node.js

Но проблемма все равно остается, потому что упираемся в то что github все равно ищет index.html в папке mySpecificRoute ({domainName}/{repositoryName}/mySpecificRoute) а index.html то лежит в папке repositoryName

И тут нас выручает HashRouter (вместо BrouserRouter)
# - браузерная фишка, обрывает для сервера URL, сревре получив такой URL {domainName}/{repositoryName}/#/MySpecificRoute будут думать что он получил такой URL {domainName}/{repositoryName}/
!!Даже не нужна уже basename={ process.env.PUBLIC_URL}
(Suspense - работает)
