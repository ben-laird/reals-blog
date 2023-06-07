---
pubDateTime: 2023-06-03T22:10:00-05:00
title: "The Reals: The (Complete) Jewel of Real Analysis"
postSlug: complete-jewel-of-reals
description: "The real numbers are not just magical, they are Complete. Learn more here"
tags:
  - unit-1
  - chapter-2
  - order
  - topology
  - analysis
---

## Table of Contents

## Introduction

**TLDR:** The Completeness Property of $\R$ (aka the Supremum Property) states that every nonempty bounded-above subset of $\R$ has a supremum.

That's it. That's the tweet.

This entire article deals with this one property. This property, as well as the order properties of $\R$, truly power all of real analysis. The order properties power the "analysis" part, and the completeness property powers the "real" part.

That's all well and good, the Completeness Property is super important, real analysis wouldn't be real analysis with out it, sure that's great. What in the world does any of that mean? Well I'm glad you asked. Let's break down the definition.

## Boundedness

Boundedness is a surprisingly intuitive feature of a set. In essence, a set is bounded if there is some element greater than or equal to any of the set's elements as well as some element that is less than or equal to any of the set's elements. We can split this into two smaller definitions:

1. A set is bounded above if there is some element greater than or equal to all the set's elements.
2. A set is bounded below if there is some element less than or equal to all its elements.

A set is bounded then if it's both bounded above and below. A set is unbounded if it is not bounded (sounds simple, but specifying this allows us to make solid inferences down the road). Below are more symbolic ways to define each property, with diagrams of examples of each type of bounded set.

### Bounded Below

![Bounded Below](/assets/bounded-below.jpeg)

$$
\text{A set } S \text{ is bounded below } \iff \exists \space l \in \R \space | \space \forall s \in S, \space l \le s
$$

### Bounded Above

![Bounded Above](/assets/bounded-above.jpeg)

$$
\text{A set } S \text{ is bounded above } \iff \exists \space u \in \R \space | \space \forall s \in S, \space u \ge s
$$

### Bounded

![Bounded](/assets/bounded.jpeg)

$$
\text{A set } S \text{ is bounded } \iff \exists \space {l, u} \in \R \space | \space \forall s \in S, \space l \le s \le u
$$

### Boundedness Considerations

This was demonstrated in the diagram, but just for clarity, the upper or lower bound in question need not be a member of the set; it could be or it could not be depending upon the set in question. Astute readers will see that the set need not be connected for it to be bounded. There must only exist a single element satisfying the relevant property for the entire set to be bounded above or below. Even more astute readers will see that if there is one lower or upper bound, there are actually an infinite number of lower or upper bounds. For lower bounds, any element that is less than the lower bound works as a lower bound for the entire set:

---

$\text{Let } l \in \R \text{ be a lower bound of } S.$ $\text{Suppose } \exists \space t \in \R \space | \space t \le l.$

$$
\therefore t \le l \le s \space \forall s \in S
$$

$$
\implies t \le s \space \forall s \in S
$$

$$
\implies t \text{ is a lower bound of } S
$$

---

And for upper bounds, any element that is greater than the upper bound works as an upper bound for the entire set:

---

$\text{Let } u \in \R \text{ be a lower bound of } S.$ $\text{Suppose } \exists \space v \in \R \space | \space u \le v.$

$$
\therefore s \le u \le v \space \forall s \in S
$$

$$
\implies s \le v \space \forall s \in S
$$

$$
\implies v \text{ is an upper bound of } S
$$

---

## The Big Question

This begs the question of whether there's a lower bound greater than all other lower bounds, or an upper bound less than all other upper bounds. If there were such elements, these elements would effectively place the strongest constraints on the set; the set would be allowed to vary the least if it had to be between its greatest lower bound and least upper bound. This question gives rise to the next part of the completeness property definition.

## Extremums

Now that we understand the bounded-above part of the definition, and that there is an uncountably infinite set of lower or upper bounds for a bounded-below or bounded-above set, let's move on to the supremum part.

Building upon the boundedness definitions, an extremum is the least or greatest such bound:

1. A supremum, or least upper bound, denoted $\sup S$, is the least such element of the set of upper bounds
2. An infimum, or greatest lower bound, denoted $\inf S$, is the greatest such element of the set of lower bounds

### Extremum Considerations

Note that because the supremum is the least such element in the set of upper bounds, the supremum is necessarily unique. Similarly, the infimum of a set is also unique because it is the greatest such element of the set of lower bounds. If you need a refresher on least such or greatest such elements in a set, [read about these concepts here](./start-here#least-such-and-greatest-such-elements).

## Completeness: The Answer to the Big Question

The two concepts of boundedness and extremums allow us to summarize the question posed [previously](#the-big-question): for any bounded-above or bounded-below set, is there a supremum or infimum? Without loss of generality, we can actually reduce this question further to just consider the bounded-above case; we can do this because we can map any bounded-below set to a corresponding bounded-above set through the bijection $f(x) = -x$. We know this function is a bijection (don't take my word for it though, go ahead and prove it), and if we apply this function to a set's lower bound, it suddenly becomes the transformed set's upper bound. Applying the function again ($f(x) = -x$ is its own inverse) yields the original set.

So now we have our essential question: does any bounded-above set have a supremum? And the answer is yes! The Completeness Property is the answer to that question! Having this guarantee allows us to make limits, to cover sets by using their extremums to construct the best cover for the job, to efficiently constrain series and sequences.

## Conclusion

**TLDR:** The Completeness Property of $\R$ (aka the Supremum Property) states that every nonempty bounded-above subset of $\R$ has a supremum.

That's it. That's the tweet.

And now you know what that means.
