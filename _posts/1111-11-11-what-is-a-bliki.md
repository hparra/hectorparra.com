---
layout: default
title: What is a Bliki?
description: What is a Bliki? It is a blog + wiki!
tags: blog, wiki, bliki, jekyll
published: true
---

# What is a Bliki?

I hate the inflexibility of your typical blogging platform. I don't want to be tied to a datetime. Wikis are more flexible, but still not flexible enough. I want to do my own thing.

A "bliki" is a combination of blog and wiki. I first read of this concept from Martin Fowler's own bliki entry ["What Is A Bliki?"](http://www.martinfowler.com/bliki/WhatIsaBliki.html).

The following is technical blah blah regarding Jekyll, which I can use to mimic a bliki.

## Jekyll

[Jekyll](https://github.com/mojombo/jekyll/wiki/Usage) is a static site generator. It's great for automating some things, while leaving others alone. If you want more bells and whistles, try [Octopress](http://octopress.org), which builds on Jekyll.

* [How Jekyll works](http://onox.com.br/2012/10/02/how-jekyll-works.html)
* [Jekyll permalink field in individual posts is not interpolated](http://stackoverflow.com/questions/5286964/jekyll-permalinks)
* [Blogging with Jekyll, Haml, Sass, and Jammit](http://mikeferrier.com/2011/04/29/blogging-with-jekyll-haml-sass-and-jammit/)
* [Building a Jekyll Watcher with FSSM](http://chriseppstein.github.com/blog/2009/09/07/building-a-jekyll-watcher-with-fssm/)

### Modifying Jekyll

This is something I'll get to eventually.
                                         
In order for Jekyll to process your file it MUST be in the YEAR-MONTH-DAY-title.MARKUP format. I don't like that, but I understand why dates are necessary. They are used for both sorting and to create future posts.

Jekyll::Post.valid? checks for the date in the filename using the MATCHER regex. This method is used just once in Jekyll::Site.read_posts(). The date is parsed once more and is finally stored by the Jekyll::Post.process(name) method. Only afterwards does the date specified in YAML overwrite.

Entries should have a date, but how? I want Git to handle this for me. This is similar to what [Gollum](http://alblue.bandlem.com/2011/05/git-tip-of-week-gollum.html) does.