---
pubDateTime: 2023-06-14T21:15:00-05:00
title: "Intervals: Analytic Algebra"
postSlug: intervals
description: "The Real numbers have a secret system of algebra that few know about! Learn more here"
tags:
  - unit-1
  - chapter-2
  - set-theory
  - order
  - topology
  - analysis
---

## Table of Contents

## Introduction

Intervals are a very intuitive yet formal way to describe "everything from here to here". Specifying them all comes down to which endpoints you'd like to include. Working with them involves a topology-based algebra that makes for an interesting algebraic underworld that no one really sees until a topology class.

## How To Make Them

Specifying an interval is a lot like ordering a cheeseburger: toppings, sides, maybe a drink; compare that to endpoint inclusion, boundedness, maybe a sequence of nested intervals. Note that all intervals are uncountably infinite, as evidenced intuitively by the [Density Theorem](./completeness-applications#density-theorem-how-the-rationals-fit-in). We actually get around to proving that the unit closed interval ($[0, 1] \subset \R$, and therefore $\R$ itself) is uncountably infinite [later](#the-reals-are-uncountably-infinite). Though all intervals are uncountably infinite, they have a defined length, namely $b - a$ for upper bound $b$ and lower bound $a$. In addition, for any interval with infimum $a \in \R$ and supremum $b \in \R$, $a \le b$; this may sound obvious, but it matters when we discuss [nesting](#nested-intervals-drink), as we rely on this property to intuit the conditions for guaranteed existence of a unique value in $\bigcap ^\infin _{n = 1} I_n$. More on that funky notation and what it means in that section.

### Interval Endings: Toppings

There are two types of interval endings: open endings and closed endings. Open endings do not contain the endpoint in question, while closed endings do. The bottom and top (or left and right) sides of an interval can both be open or closed, making for four different intervals that could be represented:

1. Open bottom, open top (aka an open interval): $(a, b) = \{x \in \R \space | \space a < x < b \}$
2. Closed bottom, open top (affectionately termed a closed-open interval): $[a, b) = \{x \in \R \space | \space a \le x < b \}$
3. Open bottom, closed top (affectionately termed an open-closed interval): $(a, b] = \{x \in \R \space | \space a < x \le b \}$
4. Closed bottom, closed top (aka a closed interval): $[a, b] = \{x \in \R \space | \space a \le x \le b \}$

These are like the toppings you choose for your interval cheeseburger: you need these toppings for it to actually be called a proper cheeseburger.

As a sidenote, intervals 2 and 3 are not called "clopen" intervals because that term is saved for the only two intervals that are both closed _and_ open: the empty set $\emptyset$ and $\R$ itself. An open interval is an interval that is a member of the topology; lucky for us, interval 1 is in fact a part of the canonical topology induced by the ordering of the reals. The ordering induces the topology, and the topology is so easy to come up with and work with that it is considered the _canonical_ topology, the most natural choice, for the reals.

$$
(\R, <) \xrightarrow{induces} \tau _\R
$$

By the definition of a topology on a set, the reals and the empty set are both open sets (and also open intervals). A closed set is a set whose complement is open; therefore, the reals and the empty set are _also_ both closed, since their respective complement (the other set) is open.

To create the empty set, we simply choose an open interval that starts and ends at a single point: $\forall a \in \R, \space (a, a) = \emptyset$. We don't have the machinery yet to make $\R$ since it's unbounded; we'll do that next.

### Boundedness: Sides

The above intervals are all bounded, meaning (by the [Completeness Property](./complete-jewel-of-reals#completeness-the-answer-to-the-big-question)) that they all have a supremum and infimum (the $b$ value and $a$ value respectively). Colloquially, you'll hear these called _the_ upper and lower bounds of the interval, though they're each _an_ upper bound or _a_ lower bound.

To make _unbounded_ intervals, we need to introduce a bit of an abuse of notation: $\infin$. Infinity is a wild concept, especially considering **_it is not a part of the reals._**

Let me say that again: **_$\infin$ is not a part of the reals._** And neither is $-\infin$. $\infin$ (or $+\infin$) is a stand-in for an element that is greater than all elements in the reals. $-\infin$ does something similar, being a stand-in for an element that is less than all elements in the reals. Thus, we can make unbounded intervals by simply notating it with an "element" that is greater or less than every other element, forcing it into the interval. We now have four new intervals to create:

1. Open bottom, unbounded top (dubbed an open-unbounded interval): $(a, \infin) = \{x \in \R \space | \space x > a \}$
2. Closed bottom, unbounded top (dubbed a closed-unbounded interval): $[a, \infin) = \{x \in \R \space | \space x \ge a \}$
3. Unbounded bottom, open top (dubbed an unbounded-open interval): $(-\infin, b) = \{x \in \R \space | \space x < b \}$
4. Unbounded bottom, closed top (dubbed an unbounded-closed interval): $(-\infin, b] = \{x \in \R \space | \space x \le b \}$

There's also a special fifth unbounded interval we could make: an unbounded-unbounded one. In fact, it's known as the reals:

$$
\R = (-\infin, \infin)
$$

These five new intervals (and the property they represent) act like the sides of the cheeseburger meal: you can make a cheeseburger without them, but it wouldn't be a complete meal unless you have them.

### Nested Intervals: Drink

Nested intervals take what intervals do and crank it up to 11, allowing an intuitive "hone-in" behavior when given the right sequence.

$$
\text{A sequence of intervals } I_n, \space n \in \N \text{ is nested } \iff I_1 \supseteq I_2 \supseteq I_3... \iff I_n \supseteq I_{n + 1} \space \forall n \in \N
$$

The idea is that these intervals get smaller and smaller at some point until they hit a set that is common to all of the intervals, denoted as the following:

$$
\bigcap ^\infin _{n = 1} I_n
$$

For example, if our sequence was $I_n = [0, \frac{1}{n}]$, then $\bigcap ^\infin_{n = 1} I_n = \{0\}$ by the [Archimedean Property](./completeness-applications#archimedean-property-how-the-naturals-fit-in). Note that this set might be empty, meaning that there are no elements that are common to all intervals in the sequence; for example, $\bigcap ^\infin_{n = 1} (n, \infin) = \{0\}$. This "hone in" intuition works for any interval, but for it to have much meaning, or for the sequence to close in on a single value, some extra properties need to hold.

Firstly, the sequence should consist of closed intervals:

$$
I_n = [a_n, b_n], \space n \in \N \implies \exists \space \xi \in \R \space | \space \xi \in \bigcap ^\infin _{n = 1} I_n
$$

That way, there is at least one value that is common to all intervals; we can see intuitively that even if the $a_n$ and $b_n$ sequences meet (they can't cross one another, $a_n \le b_n \forall n \in \N$), then this $\xi$ value is simply the value inside the singleton set produced by the interval.

In addition, the following property must hold to get it to a single, [unique](./start-here#unique-or-only-such-elements) value:

$$
\inf \{ b_n - a_n \space | \space n \in \N \} = 0 \implies \xi \text{ unique } \equiv \bigcap ^\infin_{n = 1} I_n = \{\xi\}
$$

Notice that this magical property simply states that the distance of each subsequent interval must get smaller and reach 0 at some point, effectively guaranteeing that $[\xi, \xi]$ interval is in there somewhere.

## What Makes an Interval

What makes an interval? Well, its endpoints pretty much define it, scooping up all points into itself. Interestingly, we can do this "scooping" ritual for any $x, \space y \in I: \text{interval} \subseteq \R$ and get a closed interval out of it: $[x, y] \subseteq I$. If this holds for a set, then it's an interval, and you can thus specify it by its endpoints (and thus its extrema) and whether it includes them. Here's that Characterization Theorem a bit more succinctly:

$$
\forall \text{ sets } S \space | \space ({x, y} \in S \space | \space x < y \implies [x, y] \subseteq S), \space S \text{ is an interval.}
$$

## The Reals Are Uncountably Infinite

Surprising, I know. We've been talking about this property like it's obvious, but coming from the basis of naive set theory, the reals being uncountably infinite may not seem all that obvious. Let's dive into a formal proof of that here.

---

$$
I = [0, 1] \subseteq \R: \text{uncountably infinite} \wedge \R: \text{uncountably infinite}
$$

**Proof:**

$\text{We know } I = [0, 1] \subseteq \R: \text{uncountably infinite} \implies \R: \text{uncountably infinite}, \text{ so we shall only prove } I: \text{uncountably infinite}.$

$\text{Suppose } I: \text{countably infinite.}$

$$
\therefore I = \{x_1, x_2, x_3, ...\}
$$

$\text{Choose } \forall x_n \text{ an } I_n \space | \space x_n \notin I_n.$ _// make a nested interval sequence out of $I$_

$$
\therefore \forall n \in \N, \space I_n \supseteq I_{n + 1}
$$

$$
\implies \exists \xi \space | \space \xi \in \bigcap ^\infin _{n = 1} I_n
$$

$$
\implies \xi \ne x_n \space \forall n \in \N
$$

$$
\implies \xi \notin I
$$

$$
\implies \rarr \! \larr \impliedby \xi \in I \impliedby \xi \in \bigcap ^\infin _{n = 1} I_n
$$

_// $\xi$ must be in $I$ because it's in all intervals in the sequence_

$$
\therefore [0, 1]: \text{uncountably infinite}
$$

$$
\implies \R: \text{uncountably infinite} \space \square
$$

---

## Conclusion and Part 2

This article is already getting rather long, so I'm going to split this into a [part 2](./decimal-reps). For now, we've covered the essentials of intervals and the very important "hone-in" property that you can use to turn any real number into a sequence of nested intervals. In part 2, we'll use this property to create decimal representations of all real numbers. See you there!
