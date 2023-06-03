---
pubDateTime: 2023-06-03T14:12:00-05:00
title: "Flavors of Infinity"
postSlug: infinity
description: "Infinity can come in two flavors in real analysis. Learn more here"
tags:
  - unit-1
  - chapter-1
  - set-theory
---

## Table of Contents

## Introduction

Infinity is not an easy object to understand. It breaks dreams about how we wish math worked that we hold dear yet undergirds laws on which we depend. In real analysis, infinity comes in two forms: countably infinite (denumerable), and uncountably infinite (uncountable).

The place infinity comes up most often is in set sizes or when you test the limits (no pun intended) of how far you can go in a set. By definition, the value infinity represents an element that is larger than all elements in an infinite set. It's counterpart, negative infinity, is an element smaller than all such elements.

$$
\forall x \in \R, \space \infty > x \wedge -\infty < x
$$

## Finite Sets

Finite sets are really easy to think about. They're essentially the sets we've been thinking about up to this point with one extra stipulation: the cardinality of the set (the number of elements in the set) must be a positive integer (any positive whole number including 0). The empty set ($\emptyset$) is considered to have 0 elements, while all other finite sets have 1 or more elements. These sets are often called _nonempty_ to stress that point.

Although, I haven't been entirely forthright. What part of what I've said may be unclear?

What in the world is cardinality? How can you tell the size of a set?

$$
\text{A set } S \text{ has } n \text{ elements } \iff \exists \text{ bijection } f: \N _n \rarr S
$$

Where $\N _n = \{1, 2, ..., n\}$.

Essentially, it has the same size as some subset of the natural numbers. It may feel like we're kicking the ball down the field, but we know for a fact that something like $\{1, 2, 3\}$ is absolutely a finite set, whereas with something like the set of all platonic solids, we're less confident (there's 5 platonic solids, so it's a finite set).

Of course, infinite sets do not abide by this law.

## Infinite Sets

Infinite sets are those where for any $n \in \N$ you try to find to come up with a finite subset, there is no bijection from the set in question to the subset you made. The integers are a great example, or the reals. But the two sets are actually vastly different; one is countable, while the other is not.

### Countable Infinity

With countably infinite sets, we still have a way to relate it back to what we know. Let's accept that the naturals are countably infinite (pretty easy point to accept, if you give me the $nth$ natural number I can give you the $(n+1)th$ natural number). Armed with that knowledge and what we've done previously, we have a slightly different formulation of our previous work which makes a new definition:

$$
S \text{ is countably infinite } \iff \exists \text{ bijection } f: \N \rarr S
$$

Instead of a subset, we just map to $\N$ itself!

Believe it or not, the integers are only countably infinite. Think about that for a second... how does a set with seemingly _twice as many elements_ (one positive natural, one negative natural, oh and 0) have a bijection to the naturals? The idea is to do an interleaving pattern with our bijection, where each negative number of $\Z$ maps to an odd number in $\N$, and each positive number of $\Z$ maps to an even number in $\N$. $0 \in \Z$ maps to $1 \in \N$.

Uncountably infinite sets do not even abide by this bijection law, though. So how do we define an uncountably infinite set?

### Uncountable Infinity

Pretty easily, actually:

$$
S \text{ is uncountably infinite } \iff \not{\exists} \text{ bijection } f: \N \rarr S
$$

Yup. If it can't map to the naturals, it's not countably infinite. QED. The reals are like that; no matter how hard you try, there is no way to map all those elements to the naturals.

## Cantor's Theorem

Cantor's theorem is one about the power set (the collection of all subsets) of a given set and its cardinality relative to the original set:

$$
\not{\exists} \text{ surjection } f: A \rarr \mathcal{P}(A) \space \forall \text{ sets } A
$$

This implies there is an infinite progression of bigger and bigger cardinalities just from any one set, as the power set's cardinality is always bigger than the set itself. This also shows that $\mathcal{P}(\N)$ is actually uncountably infinite. What does that imply about $\mathcal{P}(\R)$ then...?

## Conclusion

**_Infinity is weird._**
