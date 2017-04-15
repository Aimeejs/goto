Goto
---

#### Usage
```js
import goto from 'goto'
```

#### For Mobile Site
当前网站是移动网站，配置当PC设备访问时跳转到PC站点
```js
goto.computer('http://ilinco.com')
// 配置过滤条件，当url参数arc=m时不执行跳转
goto.computer('http://ilinco.com').filter('arc', 'm')
```

#### For Computer Site
当前网站是PC网站，配置移动设备访问时跳转到Mobile站点
```js
goto.mobile('http://m.ilinco.com')
// 配置过滤条件，当url参数arc=c时不执行跳转
goto.mobile('http://m.ilinco.com').filter('arc', 'c')
```

#### Filter
可选，过滤跳转配置，参数对应url参数
```js
// 例
goto
// 当前网站是PC网站，配置手持设备跳转到Mobile网站
.mobile('http://m.ilinco.com')
// 当url参数arc=c时不做跳转
.filter('arc', 'c')
```
```sh
# In Mobile
http://ilinco.com       # => 符合跳转条件，不符合过滤条件，最终执行跳转动作
http://ilinco.com?arc=c # => 符合跳转条件，符合过滤条件，最终不执行跳转
```
