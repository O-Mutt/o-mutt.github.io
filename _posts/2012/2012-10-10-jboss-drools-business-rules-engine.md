---
id: 32
title: Jboss Drools Business Rules Engine
date: 2012-10-10T21:01:31+00:00
layout: post
permalink: /jboss-drools-business-rules-engine/
tags:
  - Development
  - business rules
  - drools
  - java
  - tutorial
---
So, I have had the luxury of working with just under a butt load of technologies at in my young software engineering career. One that I have enjoyed more than others has been <a href="http://www.jboss.org/drools/" rel="external">Jboss' own Drools Rules Engine</a>. This engine allows you to quickly and 'easily" integrate complex business rules into your application without muddling them into your actual application layer. 

<div class="smallMargin">
  So the drools syntax can be a bit confusing at first glance but after you write a few simple rules and see how they work it is cake! 
  
  <div>
    Ex:
  </div>
  
  <pre class="brush: java; title: ; notranslate" title="">
rule "This is a short description of the rule"
when
$derp : MyObject(name == "Matt")
then
$derp.lastName.setValue("Erickson")
end
</pre>
  
  <div>
    Lets break that down line by line:
  </div>
  
  <div>
    <strong><span style="text-decoration: underline;">Line 1:</span></strong> rule 'blah blah blah..." - This explains what the rule does, it doesn't actually have to explain anything but must be unique to this rules engine or it will bomb out.
  </div>
  
  <div>
    <span style="font-weight: bold; text-decoration: underline;">Line 2:</span>when - indicates this is the left hand side of the rule (until we reach a then statement).
  </div>
  
  <div>
    <span style="font-weight: bold; text-decoration: underline;">Line 3:</span>$derp : MyObject(name == 'Matt") - This is actually where the rule's business logic lives for determining if we should run the right hand side logic on this object. This line is <strong>VERY </strong>important. The '$variableName' notation is common in drools but is notnecessarily, we can just use 'derp' as a variable but you can see why we don't, forreadabilitysake. The ':' item is a MUST, this is actually what assigns the object to the variable when the rules match. This is the part of drools that is kinda Quirky, if a new line is added. Say we insert a line AFTER line 3, we'll call it 4a (for line 4 alternative):
  </div>
  
  <pre class="brush: java; title: ; notranslate" title="">MyObject(age > 23)</pre>
  
  <div>
    This line will ask the very same 'MyObject' if it <em style="font-weight: bold;">ALSO</em> has an age attribute that is greater than 23.
  </div>
  
  <div>
    Before we move on I would like to look at a few ways this line can be modified to have the same behavior. Lets remove line 4a and append that logic to line 3:
  </div>
  
  <pre class="brush: java; title: ; notranslate" title="">$derp : MyObject(name == "Matt" &amp;&amp; age > 23)</pre>
  
  <div>
    Simple enough. Here is another:
  </div>
  
  <pre class="brush: java; title: ; notranslate" title="">$derp : MyObject(name == "Matt")
and MyObject(age > 23)</pre>
  
  <div>
    This is nearly identical to 4a but with more explicit definition of what we want out of this rule. Drools, by default, treats new lines in the left hand side of a rule as 'AND' statements. So this can be left out or added as you see fit, I would pick one and stick with it though. Similarly we can change the behavior with an '||' and an 'or'. Ex.
  </div>
  
  <pre class="brush: java; title: ; notranslate" title="">$derp : MyObject(name == "Matt" ||age > 23)
$derp : MyObject(name == "Matt")
or MyObject(age > 23)</pre>
  
  <div>
    These are fairly self explanatory after learning how the and works.
  </div>
  
  <div>
    <span style="font-weight: bold; text-decoration: underline;">Line 4:</span>then - I'm sure by now you can guess what this does, indicates that if all left hand side arguments match: do this stuff.
  </div>
  
  <div>
    <span style="font-weight: bold; text-decoration: underline;">Line 5:</span>$derp.lastName.setValue('Erickson") - This is where the right hand side runs if all the left hand side arguments match. The '$derp', here, is the same as the object that we set in the left hand side of the rule, this means we already have values in some of the object and don't need to reset them... unless that is what the rules should do, of course. '.lastName' is anattributefrom the MyObject type with a 'setValue' method that takes in a String.
  </div>
  
  <div>
    <span style="font-weight: bold; text-decoration: underline;">Line 6:</span> end - Fine!
  </div>
  
  <div>
    Now that you have 'read' this you can probably go hack away at a keyboard and write something that may resemble a drools rule. But keep in mind; drools does not care the order in which you write your rules. It runs them much like a shotgun, all at once. So make sure you do not have any conflicting business rules!
  </div>
  
  <div>
    Things I didn't cover that you should probably read further into: integration, knowledgeBase class, and most likely much much more but this was mostly from memory.
  </div>
</div>