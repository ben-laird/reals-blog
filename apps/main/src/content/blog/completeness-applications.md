---
pubDateTime: 2023-06-07T16:08:00-05:00
title: "What Does Completeness Do?"
postSlug: completeness-applications
description: "The Completeness Property has some interesting ramifications. Learn more here"
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

In [the last article](./complete-jewel-of-reals), we established the Completeness Property (aka the Supremum Property). Now it's time to delve into what the Completeness Property enables.

## Assurance of Existence

Remember that for _any_ bounded-above set, the supremum exists, and that for _any_ bounded-below set, the infimum exists. That also implies that if you find _any_ upper or lower bound, the supremum or infimum also exists and is less than/equal to or greater than/equal to the upper or lower bound found:

$$
u \text{ is an upper bound of the set } S \implies \exists \sup S \wedge \sup S \le u
$$

$$
l \text{ is a lower bound of the set } S \implies \exists \inf S \wedge \inf S \ge l
$$

This is surprisingly useful, as oftentimes proofs will establish that a set is bounded-above/below and then by the Completeness Property establish the existence of the supremum/infimum, respectively. This "assurance of existence" corollary of the Completeness Property is used powerfully in proofs in this article and beyond.

## Compatibility

### Algebraic

The supremum and infimum of a set are compatible with the algebraic operations discussed in the [Jewel of Reals article](jewel-of-reals#algebraic-properties). For instance, as one would expect, adding a value to any value in a set also adds the same value to the supremum or infimum. Remember that we can map between a bounded-above set and a bounded-below set via the bijection $f(x) = -x$, so without loss of generality, we only need to prove this for the supremum.

---

$\text{Let } a + S = \{ a + s \space | \space s \in S \} \space \forall a \in \R. \text{ We will prove that }$

$$
\sup(a + S) = a + \sup S.
$$

$\text{We know that } \forall x \in S, \space x \le \sup S.$

$$
\implies x + a \le a + \sup S
$$

$$
\implies a + \sup S \text{ is an upper bound of } S
$$

$\text{Let } v \in \R \text{ be any upper bound of } a + S.$

$$
\implies a + x \le v \forall x \in S
$$

$$
\implies x \le v - a
$$

$$
\implies v - a \text{ is an upper bound of } S
$$

$$
\implies \sup S \le v - a
$$

$$
\implies \sup S + a \le v
$$

$\text{Because } v \text{ is any upper bound of } a + S, \space \sup(a + S) = a + \sup S. \space \square$

---

A similar proof can be done for subtraction, but the astute reader will notice that $a$ was not restricted to being a positive number, so in essence, the subtraction part has already been proven. And without loss of generality, the same property holds for $\inf S$.

The supremum and infimum are also compatible with multiplication, though in a slightly different way. If the multiplication factor is negative, suprema become infima, and infima become suprema:

$$
\forall a > 0 \in \R, \space \sup(aS) = a \sup S
$$

$$
\forall a < 0 \in \R, \space \sup(aS) = a \inf S
$$

This is because, in effect, we are applying the $f(x) = -x$ bijection to the set $S$ when multiplying by a negative number, which we've already established will flip the supremum/infimum logic. Once again, the astute reader will see that this property holds for division as well, since the only property we care about the $a$ value is whether it is positive or negative; in addition, this property holds for the infimum through that application of the $f(x) = -x$ bijection we're so familiar with now. The proof is largely the same as the addition one, with the only difference being the $a$ value must be positive or negative (depending upon the property being proven).

### Set Theoretic

In addition, the suprema and infima of two sets can interact with one another in very nice ways thanks to the Completeness Property. For example, let's take two nonempty sets ${A, B} \subseteq \R$.

$$
a \le b \space \forall a \in A, \space b \in B \implies \sup A \le \inf B
$$

Pay attention to the "for all" part of $\forall a \in A, \space b \in B$; that means that _for any and all_ $a$ values that could be chosen, _any and all_ possible $b$ values are greater than or equal to _each and every_ $a$ value. This is true _for the entire set_, not just a single pair of points chosen from the candidate sets; it's still true for any two points chosen from the two sets, but the "for all" condition above is a stronger condition than the "pointwise" condition.

Take a look at [this rant](./set-wide-vs-pointwise) before reading on; the only reason it's not here is because the page took too long to load.

## Bounded Functions

This logic works for functions too, so long as the range is in the reals. Any set in the reals is bound by the logic of the reals. Ergo, we can extend our definitions of boundedness and completeness to functions.

### Definitions

$$
\text{A function from a set } D \text{ to } \R \space f: D \rarr \R \text{ is bounded above } \iff f(D) \subseteq \R \text{ is bounded above.}
$$

For clarity, that means $\exist \space u \in \R \space | \space \forall d \in f(D), \space u \ge d$. Similarly,

$$
\text{A function } f: D \rarr \R \text{ is bounded below } \iff f(D) \subseteq \R \text{ is bounded below.}
$$

Therefore $\exist \space l \in \R \space | \space \forall d \in f(D), \space l \le d$.

Of course, a function is bounded if it is bounded above and below; the standard definition can be reformulated a bit using the absolute value function:

$$
\text{A function } f: D \rarr \R \text{ is bounded } \iff \exist \space b \in \R \space | \space |f(x)| \le b \space \forall x \in D
$$

What we're saying here is that after folding the function in on itself towards the positive side, there is some $b \in \R$ that any $y \in f(D)$ will never cross. By folding the function via the absolute value, we're effectively making 0 the lower bound; thus, we only need to focus on the existence of an upper bound, which is what the $b$ value serves to do.

As a notational convenience, the supremum of a function $f: D \rarr \R$ (because that exists, [remember](./complete-jewel-of-reals#completeness-the-answer-to-the-big-question)) is notated as

$$
\underset{x \in D}{\sup} \space f(x) = \sup f(D)
$$

A similar convention is adopted for the infimum.

### Scopes in Action

Now we get to the bread and butter of what created the [set-wide vs. pointwise rant](./set-wide-vs-pointwise):

$\text{Suppose } {f, g}: D \rarr \R \space | \space D \subseteq \R \wedge {f, g} \text{ bounded.}$

$$
f(x) \le g(x) \space \forall x \in D \implies \underset{x \in D}{\sup} \space f(x) \le \underset{x \in D}{\sup} \space g(x)
$$

Notice <mark class="bg-skin-accent bg-opacity-50 rounded-md text-skin-base">that is all we can prove about $f(x)$ and $g(x)$. That's it.</mark> This is in contrast to what we said [previously](#set-theoretic) about how sets could have their infima and suprema separated too. And notice too that since $\sup A \le \inf B$, that means that $\inf A \le \sup A \le \inf B \le \sup B \implies \sup A \le \sup B$. The set-wide condition _**literally implies what the pointwise condition had to prove!**_ Ergo, the pointwise condition _is the weaker condition._

**And this is why [that scope rant](./set-wide-vs-pointwise#scope) is so important!**

Now, if $f(x) \le g(y) \space \forall {x, y} \in D$, this would be a different story. Now we have a set-wide condition, as _every_ $f(x)$ must be less than or equal to _every_ $g(y)$. Ergo,

$$
f(x) \le g(y) \space \forall {x, y} \in D \implies \underset{x \in D}{\sup} \space f(x) \le \underset{y \in D}{\inf} \space g(y)
$$

If you'd like a concrete example of a pointwise vs a set-wide condition with these properties, look at $f(x) = x^2, \space g(x) = x$ on $D = \{x \in \R \space | \space 0 \le x \le 1 \}$ for the pointwise condition and $f(x) = x^2, \space g(x) = x + 1$ on $D = \{x \in \R \space | \space 0 \le x \le 1 \}$ for the set-wide condition. Verify that the two functions satisfy the relevant conditions and see visually how the suprema and infima of the two interact. It illustrates what I'm talking about in my rant quite nicely.

I promise I'll stop harping on this (for now). Let's look at another arbitrary value property or two to cool off.

## Archimedean Property: How the Naturals Fit In

Remember how I've basically said before that [the naturals are unbounded](./infinity#countable-infinity)? Or at least I've kind of implied it? Let's revisit this with a consequence of the Completeness Property called the Archimedean Property.

$$
x \in \R \implies \exist \space n \in \N \space | \space x \le n
$$

This property has several seemingly unrelated corollaries.

1. $\inf \space \{ \frac{1}{n} \space | \space n \in \N \} = 0$
2. $\forall t > 0, \space \exist n \in \N \space | \space 0 < \frac{1}{n} < t$
3. $\forall t > 0, \space \exist n \in \N \space | \space n - 1 \le t \le n$

Sometimes all four collectively are considered the Archimedean Property, seeing as all of them are equivalent to one another. The key to see here is that this infinite interleaving of the naturals necessitates the naturals be unbounded. For _any_ $x \in \R$ we choose, there is some natural number greater than it. There also is the idea that the naturals are inductive, meaning $n \in \N \implies n + 1 \in \N$. Intuitively, it's rather easy to see that the naturals are unbounded, yet the Reals are bigger by a wide margin (an entire order of infinity, in fact). How do we know this? Well...

## Density Theorem: How the Rationals Fit In

The Density Theorem allows us to intuitively tell that the reals are not only unbounded, they are uncountably infinite. In fact, I wasn't entirely honest about the Density Theorem in the title of this section: the Density Theorem not only interleaves the rationals into the reals, but also the reals into themselves. Here's the theorem:

$$
\forall {x, y} \in \R \space | \space x < y, \space \exists \space z \in \R \space | \space x < z < y
$$

Seeing as there's an isomorphic copy of the rationals inside the reals, this theorem describes how the rationals fit in. But by truth over the reals, it's also true for the isomorphic copy of the irrationals that are also in the reals. In total, therefore, it's true for all the reals.

## Conclusion

The Completeness Property, while sounding abstract at first, guarantees the existence of a supremum and infimum for bounded-above and bounded-below sets, respectively. This power allows the naturals, the rationals, and the reals themselves to be interwoven together to make a very complex system (no pun intended) with a great deal of intricacies. We will look further into these intricacies in the next chapter! It'll be a lot more analytical, I promise. For now, we need to more properly codify how to make the various types of bounded sets, almost making an "analytical algebra" if you will.
