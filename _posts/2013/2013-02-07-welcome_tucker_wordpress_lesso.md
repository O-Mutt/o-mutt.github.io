---
id: 316
title: Two Updates, Welcome Tucker and a Lesson in WordPress
date: 2013-02-07T14:52:57+00:00
author: Matt Erickson (ME)
layout: post
permalink: /welcome_tucker_wordpress_lesso/
tags:  - web
   - php
   - wordpress
   - wp  - development
---
First, I wanted to welcome a new contributor to the site, [Tucker Combs](/author/tucker-combs/ "Welcome Tucker Combs")! Tucker is, by profession, a marketing/advertiser. With that said I know that, from our days together in college, he has always had passion for technology and what developers love, creating. I want to welcome and thank him for joining in on helping us solve some of the struggles we go through learning technologies.  
  
Now, on to the meat and potatoes of today's post. Recently, the theme that I have based my site off (Living Journal) updated. While that wouldn't have been a big deal because I incorrectly made my child theme by just copy-pasting the entire theme, I wanted the latest and greatest. So I attempted to update and move to a correctly made child theme. Needless to say I was left with the 'White Screen of Death' for a WP-Admin screen. After lots of reworking I was able to recover by starting from scratch with a local copy. However, I am dissatisfied with some things in this theme as a whole, one of which being the lack of ability to add a Google Author tag to the byline (the date posted by 'name' above these posts). So I looked through the function.php file to find out what exactly I am doing and how it does its thing. Well, here is what I found: 

``` php
if ( ! function_exists( 'livingjournal_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function livingjournal_posted_on() {
	printf( __( '<span class="sep">Posted on </span>
<a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a>
<span class="byline"> <span class="sep"> by </span>
<span class="author vcard"><a class="url fn n" href="%5$s" title="%6$s" rel="author">%7$s</a></span>
</span>', 'living-journal' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'living-journal' ), get_the_author() ) ),
		esc_html( get_the_author() )
	);
}
endif;
```
 So there is a plus right away: 

``` php
if ( ! function_exists( 'livingjournal_posted_on' ) ) : 
```
!! That means that because I now have a correctly made child theme my function.php file loads BEFORE the parent theme and I can overwrite the function! So I took it on myself to make it happen and here is how: 

``` php
function livingjournal_posted_on() {
  printf( __( '<span class="sep">Posted on </span>
<a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a>
<span class="byline"> <span class="sep"> by </span>
<span class="author vcard"><a class="url fn n" href="%5$s" title="%6$s" rel="author">%7$s</a></span>
<span> : <a class="url fn n" href="%8$s" title="%9$s" rel="me" target="_blank">Google+</a></span>
</span>', 'living-journal' ),
	  esc_url( get_permalink() ),
	  esc_attr( get_the_time() ),
	  esc_attr( get_the_date( 'c' ) ),
	  esc_html( get_the_date() ),
	  esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
	  esc_attr( sprintf( __( 'View all posts by %s', 'living-journal' ), get_the_author() ) ),
	  esc_html( get_the_author() ),
	  esc_url( get_the_author_meta( 'gplus_author_url' ) ),
    esc_attr( sprintf( __( 'Find %s on Google+', 'living-journal' ), get_the_author() ) )
  );
}
```
So that is nearly the same as the original minus a little tweak; the last two params and the Google+ link in the last span. To explain this we can expand on printf and php arrays a touch. printf is fairly straight forward in that it takes a list of objects, we will focus on just strings for now. So an example would be: 

``` php
printf("%1$s %2$s", 'Knock Knock', 'Who\'s there?');
```
Piece by piece: 

**Note " are not the same as '. Double quotes get used for evaluating params** 

``` php
%1$s
```
 is asking for: \*\*%1 param\*\* \*\*of type $\*\* \*\*string s\*\*. The second would be self-explanatory from there. 

``` php
'Knock Knock'
```
 is the string literal, similar to 'Who\'s there?' but because we have a single quote within a single quote we must 'escape' it with a backslash. The only other explanation you may need is that I use a google plus authorship plugin to add a 'gplus\_author\_url' to the author meta data. As a last note most author data have two methods associated to them: 

``` php
the_author_**object**
```
 and 

``` php
GET_the_author_**object**
```
. If you want to simply print the value to the page the\_author\_object works but you must use the getter if you'd like to use it inside the code. Thanks for reading and hopefully I helped, (ME)