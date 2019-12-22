# Node.JS

### 什麼是 Node？

<https://zh.wikipedia.org/wiki/Node.js>

### 觀念題

- ❌ 我寫 Node.js
- ✔️ Node.js 是一個伺服器端的 Javascript 運行環境
- ✔️ Node.js 是非阻塞的
- ✔️ Node.js 是事件驅動的，開發者可以在不使用執行緒的情況下開發出一個能夠承載「高並行」的伺服器。
- ✔️ Node.js 允許通過 JavaScript 和一系列模組來撰寫後端應用和網路相關的應用。

<!-- Node.js 並不是一個程式語言 -->

### 官方文件

- <https://nodejs.org/en/docs/>
- Node Guides：<https://nodejs.org/en/docs/guides/>
- Node.js v13.1.0 Documentation：<https://nodejs.org/api/documentation.html>

<!--
這意味著你可以編寫系統級或者伺服器端的 Javascript 程式，交給 Node.js 來執行。常見使用情境 API Server、Web Server。
非阻塞的：多條命令可以同時被執行，通過 callback 得知命令已結束執行。
後端應用：例如檔案系統

Node.js 採用了 Google Chrome 瀏覽器的 V8 引擎，性能很好，同時還提供了很多系統級的 API，如文件操作、網絡編程等。瀏覽器端的 Javascript 代碼在運行時會受到各種安全性的限制，對客戶系統的操作有限。相比之下，Node.js 則是一個全面的後台運行時，為 Javascript 提供了其他語言能夠實現的許多功能。
-->

### 延伸閱讀

- [Wiki 事件驅動程式設計](https://zh.wikipedia.org/wiki/%E4%BA%8B%E4%BB%B6%E9%A9%85%E5%8B%95%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88)
- [深入淺出 Node.js（一）：什麼是 Node.js](https://www.infoq.cn/article/what-is-nodejs)
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
