---
title: "静态生成的预览模式"
excerpt: "了解 Next.js 中的预览模式如何与静态生成协同工作，使您能够在发布前查看草稿内容或未发布的内容。"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

Next.js 的预览模式功能非常强大。它允许您绕过静态生成的缓存，实时从您的 CMS（内容管理系统）或其他数据源获取内容进行预览。这对于内容编辑者在正式发布前审核更改至关重要。

当启用预览模式时，Next.js 会在请求时（而不是构建时）按需渲染页面。这意味着您可以即时看到来自 CMS 的最新数据，即使这些数据尚未通过正常的构建流程发布到生产环境。

预览模式通常通过一个特定的 API 路由来激活，该路由会设置一个特殊的 cookie。一旦 cookie 设置成功，后续对页面的请求将进入预览模式，`getStaticProps` 或 `getServerSideProps` 会在请求时执行，而不是使用构建时的静态版本。

## 工作原理

本节将详细解释预览模式的实现机制，包括如何设置 API 路由来进入和退出预览模式，以及它如何与 `getStaticProps` 和 `getServerSideProps` 交互。我们还会讨论一些安全方面的考虑，确保只有授权用户才能访问预览内容。
