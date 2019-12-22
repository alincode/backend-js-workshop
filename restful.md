# RESTful

**什麼是 REST**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roy_Fielding_at_OSCON_2008.jpg/220px-Roy_Fielding_at_OSCON_2008.jpg)

- 是一種架構風格，不是標準。
- 是 `Roy Thomas Fielding` 在他 2000 年的博士論文中提出的。Fielding 是一開始 HTTP 協議的主要設計者，也是 Apache 基金會的第一任主席，所以一經發表後，馬上就引起了關注。
- 博士論文：[Architectural Styles and
  the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

  > [JSONPlaceholder](https://jsonplaceholder.typicode.com/): Fake Online REST API for Testing and Prototyping

## REST 原則 (Constraints)

- 使用 Client-Server 架構設計
- 無狀態（Stateless）
- 可實作快取（Cacheable）
- 分層架構（Layered System）
- 統一介面（Uniform Interface)
  - 唯一資源識別方法 (Identification of resources)
  - 資源有多種呈現方式 (Manipulation of resources through representations)
  - 自我描述 (Self-descriptive) messages
  - HATEOAS
- Code on demand：(非必要) 可執行程式碼的設計

#### 無狀態 (Stateless)

- Client 與 Server 的溝通不需依賴狀態，每一個 Request 必須包含所有需要的資訊，而不需依賴其他 Request 的狀態。
- Server 不保留 Client 的狀態
- 每個 request 包含足夠的訊息
- 任何一個 session 狀態，須由 client 自行處理。

### 統一介面（Uniform Interface)

定義了四種原則

- 唯一資源識別方法 (Identification of resources)：在 HTTP 就是 URL
- Manipulation of resources through representations
  - 透過特定的方式來操作資源：在 HTTP 就是 GET, POST, PUT, DELETE methods
- 自我描述 (Self-descriptive) messages：在 HTTP 就是 Content-Type
- Hypermedia as the engine of application state (HATEOAS)

#### HATEOAS

- 全名是 Hypermedia As The Engine Of Application State
- 在返回結果中提供超連結，連向其他 API 方法，讓使用者不需要查文件，也知道還有哪些相關 API 可以使用。

https://api.github.com/

```
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations"
}
```

[HATEOAS - Wikipedia](https://en.wikipedia.org/wiki/HATEOAS)

### 優點

- 可利用快取來提升速度
- 無狀態的特性，可以讓不同的伺服器處理一系列不同的 request，提高使用伺服器的彈性。
- REST 是疊在原有的 HTTP 協定之上的機制，非常的輕量，學習成本也低。

### 缺點

- 在取得複雜資料時，會產生大量的查詢次數。
  - 解法
    - 合併 API
    - GraphQL: <https://graphql.org/>

### 延伸閱讀

- [JSON Server](https://github.com/typicode/json-server): Get a full fake REST API with zero coding in less than 30 seconds (seriously)
