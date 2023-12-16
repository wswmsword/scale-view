# scale-view

<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" align="right"></a>

scale-view 内包含了一组函数，这些函数可以通过 JavaScript 动态设置 CSS 样式，**将样式中的固定长度转为能限制最大宽度的可伸缩的长度**。scale-view 可以配合 [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) 使用，scale-view 用于运行阶段，postcss-mobile-forever 用于编译阶段。

> **⚠️ Warning**
>
> 使用 scale-view 和 postcss-mobile-forever，或是其它使用动态根元素 `font-size` 结合 rem，这两种方法生成的伸缩视图，不能触发浏览器的缩放功能（可以通过快捷键同时按下 <kbd>CMD/Ctrl</kbd> 和 <kbd>+/-</kbd> 触发），不能满足[针对缩放的可访问性标准](https://www.w3.org/Translations/WCAG21-zh/#resize-text)，因此存在可访问性问题。查看一个[关于 vw 伸缩视图的可访问性实验](https://github.com/wswmsword/web-experiences/tree/main/a11y/mobile-vw-viewport)。

## 安装

使用 npm 安装最新版本（yarn 则是 `yarn add scale-view`）：

```bash
npm install scale-view
```

## 使用

### init

```javascript
import { init } from "scale-view";
init([idealWidth], [maxWidth]);
```

初始化 scale-view，应在其它函数被调用前首先调用。`idealWidth` 表示视图中的固定长度所基于的宽度，也就是设计稿的宽度；`maxWidth` 表示伸缩视图的最大宽度，该宽度将限制伸缩视图，避免无限放大。这两个入参都是可选的，默认值分别为 750 和 600。

### vw

```javascript
import { vw } from "scale-view";
vw(number, [unit]);
```

转换 px 值，使固定的值变为基于 `idealWidth` 的伸缩长度。`number` 表示值的大小，`unit` 表示单位，可选。

### clampVw

```javascript
import { clampVw } from "scale-view";
clampVw(number, [unit]);
```

转换 px 值，使固定的值变为基于 `idealWidth` 的伸缩长度，并且实际长度限制最大为 `maxWidth`。`number` 表示值的大小，`unit` 表示单位，可选。

### percentage

```javascript
import { percentage } from "scale-view";
percentage(number, [unit]);
```

转换 vw 值和百分比值，百分比值应是基于包含块为浏览器窗口宽度的值，转换使原先基于浏览器窗口宽度的值变为基于 `idealWidth` 的值，并且受到 `maxWidth` 的限制。`number` 表示值的大小，`unit` 表示单位，可以传入字符串 `"vw"` 和 `"%"`，如果不传，则默认为 `"%"`。

### centre

```javascript
import { centre } from "scale-view";
centre(number, unit);
```

转换用于 left 和 right 属性的值，属性所在元素的包含块应是浏览器窗口，转换使 left 和 right 属性基于 `idealWidth` 所在的视图，而不是浏览器窗口，并且受到 `maxWidth` 的限制。`number` 表示值的大小，`unit` 表示单位，必填，需传入 `"vw"`、`"px"` 或 `"px"`。

## 范例

进入 `examples` 文件夹后，运行项目，本地查看项目：

```bash
cd examples/react
npm i
npm run start
```

## 单元测试与参与开发

```bash
npm install
npm run test
```

修改源码后，编写并执行单元测试，验证是否输出了预期的结果。

一起开发，让程序的变量命名更合适、性能和功能更好。

## CHANGELOG

查看[更新日志](./CHANGELOG.md)。

## 版本规则

查看[语义化版本 2.0.0](https://semver.org/lang/zh-CN/)。

## 协议

查看 [MIT License](./LICENSE)。

## 支持与赞助

请随意 Issue、PR 和 Star，您也可以支付该项目，支付金额由您从该项目中获得的收益自行决定。

<details>
<summary>展开查看用于微信支付和支付宝支付的二维码。</summary>

<table>
  <tr align="center">
    <td>微信支付</td>
    <td>支付宝支付</td>
  </tr>
	<tr>
		<td><img src="https://raw.githubusercontent.com/wswmsword/postcss-mobile-forever/main/images/wechat-pay.png" alt="Pay through WeChat" /></td>
		<td><img src="https://github.com/wswmsword/postcss-mobile-forever/raw/main/images/ali-pay.jpg" alt="Pay through AliPay" /></td>
	</tr>
</table>

</details>