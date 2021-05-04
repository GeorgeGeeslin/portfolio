---
title: 6 Things I Learned Building My Portfolio with Gatsby
date: "2019-06-05T03:03:00.000Z"
coverImage: gatsby-logo-l.png
tags: ["Gatsby", "React", "GraphQL", "Netlify"]
description: "I used Gatsby to build this site, and I'm not at all sad that I did. In this post I'll cover some things I learned along the way."
---

![Gatsby Logo](./gatsby-logo-l.png)

I recently built this portfolio/blog using Gatsby. Before doing so I was not very familiar with Gatsby. I had heard that its out-of-the-box performance optimizations create blazingly fast static sites, and that it uses React and GraphQL. Knowing not much more than that I decided to give it a shot. Here’s what I learned along the way.

##1. There are a lot of tutorials about Gatsby, but the best ones are in the official docs.

I’m sure this is reflective of some terrible deficit of mine as a person, but I don’t always read the docs too closely, at least not until I have a specific problem to solve and my search leads me there. Especially when I’m starting off with something new. I’d much rather watch a few videos and read a couple articles. Just enough to get a dev environment configured and the project running, learn some core concepts, and then jump right in.

I took the same approach this time around, but I’m glad I quickly stumbled across the [tutorial](https://www.gatsbyjs.org/tutorial/) on the official site. Not only is that tutorial very helpful when just starting out, but the docs themselves are fantastic, well organized, and very easy to digest.

##2. Gatsby has a huge plugin ecosystem, and plugins are how you'll get a lot done quickly.

Before I started writing any code for this project I knew a few things. First, I knew that I wanted my project write-ups and blog posts to be markdown files that would be parsed to create their various pages in the site. (Something not uncommon with other static site generators.) Second, I knew I'd want SASS support, because I like SASS. Third, I'd want responsive images that load quickly and look great on any device. Sure, these aren't exactly exotic needs, just a few must haves, but I was ready to learn the Gatsby way of getting them done. Enter plugins.

Gatsby has a plugin for seemingly everything: Source plugins like gatsby-source-filesystem to turn your local files into a data source. Transformer plugins like gatsby-transformer-remark or gatsby-transformer-json to make sense of the data in those files and make them available to Gatsby's data-layer via GraphQL. There's plugins for service workers, plugins for typescript, plugins for SEO, and responsive images and, [many](https://www.gatsbyjs.org/plugins/) other things you might need.

If you're the cynical type you might think it's a bit of a pain that the functionality you want has been separated out of the framework for you to reassemble piecemeal until you've got something with the features you want, and I'm not entirely uncynical myself so I see your point. On one hand, it feels like accumulating a bunch of different dependencies. Will they play nice together? Will they break unexpectedly down the line with some update? Will they be hard to configure? For the most part they're pretty easy to configure and they work as expected, though you may be wondering what plugins you really need for your site, which brings me to my next point.

##3. Use starter sites to avoid dealing with boilerplate and configuration.

Gatsby maintains a [library](https://www.gatsbyjs.org/starters/?v=2) of starter sites which are great way to get up and running quickly. They're also pretty useful to just look at the code and see how things tie together. I used [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) for my blog. My strategy was to find a starter that did most of what I wanted and then to checkout the gatsby-config.js file to see what plugins they were using.

##4. gatsby-node.js is where a lot of the magic happens.

There is a file, gatsby-node.js, that you'll see in the root directory of most of the starter sites. It's not strictly necessary, but its where you'll interact with Gatsby's Node APIs. There's a lot you can do here, so I'd suggest a quick glance at the [docs](https://www.gatsbyjs.org/docs/node-apis/). For a blog, what you'll find immediately useful is [createPages](https://www.gatsbyjs.org/docs/node-apis/#createPages) which will create individual pages using your markdown files and React component to serve as a template.

##5. GraphQL in Gatsby.

In a lot of your components you'll find yourself writing GraphQL queries. If you're not familiar with GraphQL I'd recommend a [primer](https://www.gatsbyjs.org/docs/querying-with-graphql/). GraphQL is a query language, similar in some regards to SQL. It is not a specific database implementation. The data you'll be interacting with will come from the plugins you're using. This might be an external source or it might be your own local files depending on your need. There's a bit framework magic at play when writing these queries. The query is usually written as an exported const at the end of a file containing a React component. The results of that query are automatically passed to the component's properties.

Just to be clear, this is data you're querying to be gathered and baked into the site at build time. Gatsby is, after all, a static site generator. You can of course still use AJAX, but that's not what the [page and static queries](https://www.gatsbyjs.org/docs/building-with-components/) are for.

##6. Netlify is a really easy way to host your Gatsby site.

If you've read much about getting started with Gatsby then you've probably come across some talk about Netlify. Its a good choice for hosting. The key things that make it good is that it's easy to set up and you can have it automatically build a site simply by pushing your code via git. Netlify knows how to build a gatsby site, so you just push your source code and it will build the static files. Netlify also has a CLI you can install, as well as Netlify Dev which lets you run Netlify in a local environment so you can troubleshoot any deployment issues. 

On a few occasions I have run into difficulties where things work differently in the local dev server verses production. This is annoying when things are fine in dev and busted in prod. It's usually a syntax problem somewhere, and not too terribly difficult to troubleshoot. Of course troubleshooting in this case means deploying code when you're not yet 100% sure it will fix the problem. If lives or money are at stake you'll probably want a secondary and prod environment you can deploy to so you know things are perfect before deploying to prod. In the case of this blog, the stakes are low enough that I'll troubleshoot in production if it comes down to it.
