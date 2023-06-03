---
pubDateTime: 2023-06-01T17:31:00-05:00
title: Start Here!
postSlug: start-here
description: "Math has some preliminaries to it. Start here and learn those things other mathematicians might not tell you"
featured: true
tags:
  - unit-0
  - set-theory
---

## Table of Contents

## Introduction

Despite the commitment to precision and rigorous definitions that the realm of mathematics sports, there are some definitions and conventions that the majority of mathematicians use that others may not see clearly. Index notation, a "least such" element in a set used to somehow prove some other thing cannot exist (looking at you, Abstract 2), and other obscure mathematical concepts are bound to mess up students. Let's go over some of those confusing definitions and what they mean intuitively vs. logically in proofs.

## Least Such and Greatest Such Elements

The least such and greatest such elements in a set are pretty easy to understand intuitively. For instance, in the set $\{1, 2, 3, 4\}$ under the standard ordering of the natural numbers, 1 is the least such element and 4 is the greatest such element.

What's interesting to note though is that every element is greater than or equal to 1 (equality holds when the element in question is 1), and every element is less than or equal to 4 (equality holds similarly). We can actually generalize that fact to any ordered set:

---

$\text{Let l be the least such element in A}$

$\text{Let g be the greatest such element in A}$

1. $\forall a \in A,\ l \le a$
2. $\forall a \in A,\ g \ge a$

---

Importantly, this means that an element that is in $A$ and is less than or equal to $l$ _must be_ $l$ (must be equal to $l$); an element that is in $A$ and is _strictly less than_ $l$ simply _cannot exist._ This is the key to those Abstract Algebra proofs: finding an element that is less than the least such element means _the element is either equal to the least such or it cannot exist._ Boom, equality or contradiction, all from stating an element is the least such and saying some other element is less than or equal to it. Simply put, for a least element $l$:

$$
\forall a \in A,\ a \le l \rArr a = l\ \wedge a < l \rArr\ \nleftrightarrow
$$

Some similar facts hold for the greatest such element of a set. An element that is in $A$ and is greater than or equal to $g$ must be $g$ (must be equal to $g$); an element that is in $A$ and is _strictly greater than_ $g$ simply _cannot exist._ In other words, for a greatest element $g$:

$$
\forall a \in A,\ a \ge g \rArr a = g\ \wedge a > g \rArr\ \nleftrightarrow
$$

## Unique or Only Such Elements

Unique elements are elements of a set that exhibit a special property that _only they_ exhibit in that set. There is only one such element that exhibits this special property; perhaps it's an identity element (like 1 is for the reals under multiplication) or a solution to an equation constrained to a set. The key insight here is that you can create a set where all elements exhibit that special property you're after, and if it's unique in the original set, the new set is guaranteed to have cardinality 1. This leads to the next major insight: any element in this set _is equal to the only element in the set._ Finally, we can extend this realization to the original set the unique element (let's call it $x$) came from:

$$
\forall a \in A,\ a \in X \rArr a = x
$$

The $a \in X$ part just means $a$ has the same properties as $x$ and is therefore a part of the set $X$.

## Inequalities

Inequalities are essentially generalized equations, and as such, fewer properties commonly enjoyed with strict equations hold true. For instance, multiplying an inequality by a negative number flips the inequality around, favoring the other side. It can be very hard to figure out what operations do what to an inequality, which is where this tip comes in:

- increasing functions **preserve** inequalities
- decreasing functions **flip** inequalities

This also works if a function is increasing on a certain interval and decreasing on another; the solutions you find will simply be valid for that interval. This effectively splits the inequality into smaller problems on smaller intervals. This tip helps in real analysis especially, considering the number of inequalities students deal with in reals.

## Conclusion

With these tips, a real analysis student should be equipped to deal with the order topology of the real numbers, the crux of any real analysis course.
