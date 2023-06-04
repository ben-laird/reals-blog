---
pubDateTime: 2023-06-03T14:12:00-05:00
title: "The Reals: The Jewel of Real Analysis"
postSlug: jewel-of-reals
description: "The real numbers is where all the magic of real analysis happens. Learn more here"
tags:
  - unit-1
  - chapter-2
  - algebra
  - order
  - topology
  - analysis
---

## Table of Contents

## Introduction

This should be one of the easiest posts to understand, primarily because you've been working with this content all your life most likely. The real numbers are an ordered field endowed with the order topology, a metric topology that powers the analysis part of real analysis. Don't worry if all that makes your head spin, remember you're very familiar with all this, but if you'd like to Google anything, have at it.

## Algebraic Properties

As stated, the reals are a field. That means the set has addition and multiplication, and these operations give rise to subtraction and division, respectively. the full list of properties are as follows:

### Addition

1. $\forall {a, b} \in \R, \space a + b = b + a$ (commutativity)
2. $\forall {a, b} \in \R, \space (a + b) + c = a + (b + c)$ (associativity)
3. $\exists 0 \in \R \space | \space \forall a \in \R, \space a + 0 = 0 + a = a$ (identity)
4. $\forall a \in \R, \space \exists -a \in \R \space | \space a + (-a) = (-a) + a = 0$ (inverses)

### Multiplication

1. $\forall {a, b} \in \R, \space a \cdot b = b \cdot a$ (commutativity)
2. $\forall {a, b} \in \R, \space (a \cdot b) \cdot c = a \cdot (b \cdot c)$ (associativity)
3. $\exists 1 \in \R \space | \space \forall a \in \R, \space a \cdot 1 = 1 \cdot a = a$ (identity)
4. $\forall a \in \R, \space \exists 1/a \in \R \space | \space a \cdot (1/a) = (1/a) \cdot a = 1$ (inverses)

### Interaction

- $\forall {a, b, c} \in \R, \space a \cdot (b + c) = a \cdot b + a \cdot c \wedge (b + c) \cdot a = b \cdot a + c \cdot a$ (left and right distributivity)

### Results

The axioms above can be used to prove some important results about algebra in the reals. These may seem obvious, but the only reason they are is because we've been in this environment for years.

- $\text{For } {x, y} \in \R$
  - $x + y = y \rArr x = 0$
  - $y \not ={0} \wedge xy = y \rArr x = 1$
  - $x \cdot 0 = 0$
- $\text{For } {a, b} \in \R \space | \space a \not ={0} \wedge ab = 1, \space b = 1/a$
- $\text{For } {a, b} \in \R, \space ab = 0 \rArr a = 0 \vee b = 0$

## Ordering Properties

As stated before, the reals are not only a field, they are an ordered field, which simply means they have a way to order all the elements of the set. Any one element is either greater than or less than a different element. The way to define this more precisely is to use the concept of positivity/negativity and a dash of algebra.

---

$\exists \R^+ \subset \R \text{ with the following properties:}$

1. $\forall {a,b} \in \R^+, \space a + b \in \R^+$
2. $\forall {a,b} \in \R^+, \space ab \in \R^+$
3. $\forall a \in \R, \text{ exactly one of the following hold:}$
   - $a \in \R^+$
   - $a = 0$
   - $-a \in \R^+$

---

The specification of $\R^+$ may seem a bit weird at first, but this definition will show how we go from set membership to an order relation. That last point, known as the Trichotomy property, allows for the defining property of the usual order relation.

---

$\text{Let } {a, b} \in \R$

1. $a - b \in \R^+ \rArr a > b \vee b < a$
2. $a - b \in \R^+ \cup \{0\} \rArr a \ge b \vee b \le a$

---

Note that $a > b$ is equivalent to $b < a$, so using either one in the definition is just a formality. Also note that the Trichotomy Property will guarantee $a > b \oplus a = b \oplus a < b$, where the $\oplus$ symbol means "exclusively one or the other". You can also chain orderings together: for instance, $a < b < c \iff a < b \wedge b < c$.

## The Moves of an Inequality

Inequalities are hard. In fact, in the [first post](./start-here), we discussed how to handle inequalities in general. These order properties allow us to specify how to handle most inequalities we will encounter. Use these lemmas as "moves" to solve an inequality.

---

$\text{Let } {a, b, c} \in \R.$

- $a > b \wedge b > c \rArr a > c$
- $a > b \rArr a + c > b + c$
- $a > b \wedge c > 0 \rArr ca > cb$
- $a > b \wedge c < 0 \rArr ca < cb$ (this is an example of the flipping property a decreasing function has that we discussed in the first post)
- $ab > 0 \rArr (a > 0 \wedge b > 0) \oplus (a < 0 \wedge b < 0)$
- $ab < 0 \rArr (a < 0 \wedge b > 0) \oplus (a > 0 \wedge b < 0)$

---

## Other Inequalities

Other inequalities can actually be used as moves as well. The idea is to chain an inequality to another one and take the outer two terms.

- **Arithmetic-Geometric Mean Inequality:** $\sqrt{ab} \le 1/2 (a + b)$ (equality only happens when $a = b$)
- **Bernoulli's Inequality:** $\forall x \in R, \space n \in \N, \space (1 + x)^n \ge 1 + nx$

## The Weird Stuff

The ordering property of the reals not only powers the analysis we do, but the weirdness we encounter. This is the first glimpse into that weirdness.

Firstly, there is no smallest positive real number. Let $a > 0$. We know $1/2 > 0$, and therefore $1/2 a > 0$. But we also know $1/2 a < a$. So we've demonstrated that we can come up with a smaller positive real number given _any_ positive real number. But a smallest positive real number wouldn't have that property, as it's the smallest such element in the positive reals. Therefore, such an element _cannot exist._

Oh yeah, the reals allow for arbitrary value proofs. Oh boy. I'll show you what I mean.

$$
\forall a \in \R \space | \space 0 \le a < \epsilon \forall \epsilon > 0, \space a = 0
$$

The $\epsilon$ in this proof is what I affectionately call an arbitrary value. Given _any_ $\epsilon > 0$, you're supposed to provide an $a$ value that fulfills the equality _for all_ $\epsilon$'s I could give you. The proof contends that the only such value is 0, which makes sense intuitively. Until you realize there is no smallest positive real number, so one might guess that you could supply something like an $\epsilon/2$ to satisfy the inequality. But for _any_ $\epsilon$, this line of reasoning doesn't really pan out, because the inequality must be true _for all $\epsilon$ values_ and for _the one single $a$ value provided._ The only $a$ value that satisfies the inequality _at all points_ is 0. Crazy, right?

## Conclusion

The real numbers are both very easy and very odd to work with. On the one hand, the field properties make most equations a breeze to figure out, while on the other, any inequalities or proofs about inequalities (or anything that relies on ordering in the first place) is highly confusing and lead to several mismatches between logic and intuition. Those mismatches might seem weird at first, but they are the source of the power of real analysis. As well as most of the headaches.
