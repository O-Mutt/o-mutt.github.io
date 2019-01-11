---
id: 316
title: Two Updates, Welcome Tucker and a Lesson in WordPress
date: 2013-02-07T14:52:57+00:00
author: Matt Erickson (ME)
layout: post
permalink: /welcome_tucker_wordpress_lesso/
tags:
  - web
  - php
  - wordpress
  - wp  
  - development
---
First, I wanted to welcome a new contributor to the site, [Tucker Combs](/author/tucker-combs/ "Welcome Tucker Combs")! Tucker is, by profession, a marketing/advertiser. With that said I know that, from our days together in college, he has always had passion for technology and what developers love, creating. I want to welcome and thank him for joining in on helping us solve some of the struggles we go through learning technologies.  
  
Now, on to the meat and potatoes of today's post. Recently, the theme that I have based my site off (Living Journal) updated. While that wouldn't have been a big deal because I incorrectly made my child theme by just copy-pasting the entire theme, I wanted the latest and greatest. So I attempted to update and move to a correctly made child theme. Needless to say I was left with the 'White Screen of Death' for a WP-Admin screen. After lots of reworking I was able to recover by starting from scratch with a local copy. However, I am dissatisfied with some things in this theme as a whole, one of which being the lack of ability to add a Google Author tag to the byline (the date posted by 'name' above these posts). So I looked through the function.php file to find out what exactly I am doing and how it does its thing. Well, here is what I found:

So there is a plus right away:

So that is nearly the same as the original minus a little tweak; the last two params and the Google+ link in the last span. To explain this we can expand on printf and php arrays a touch. printf is fairly straight forward in that it takes a list of objects, we will focus on just strings for now. So an example would be: