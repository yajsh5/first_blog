---
title: "学习如何使用 Next.js 通过静态生成来预渲染页面"
excerpt: "本文将向您介绍 Next.js 中静态生成 (Static Generation) 的概念，以及如何利用它来预渲染页面，从而提升网站性能和用户体验。"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

静态生成是 Next.js 的核心功能之一。通过在构建时生成 HTML 文件，您的用户可以更快地访问页面内容。这对于内容驱动的网站（如博客、文档）尤其有用。

与服务器端渲染 (SSR) 不同，静态生成不需要在每次请求时都由服务器动态生成页面。相反，页面在构建过程中一次性生成，然后可以部署到 CDN 进行全球分发，从而实现极低的延迟和高可用性。

Next.js 通过 `getStaticProps` 函数来支持静态生成。您可以在此函数中获取页面所需的数据，这些数据将在构建时传递给页面组件进行渲染。对于动态路由，您还可以使用 `getStaticPaths` 来指定需要预渲染哪些路径。

## 核心概念

在本节中，我们将深入探讨 `getStaticProps` 和 `getStaticPaths` 的工作原理，以及如何在不同场景下有效地使用它们。我们还将讨论增量静态再生 (Incremental Static Regeneration, ISR) 技术，它允许您在站点构建完成后，仍然能够更新和添加静态页面，而无需完全重新构建整个站点。
