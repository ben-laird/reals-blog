---
pubDateTime: 2023-06-02T23:03:00-05:00
title: "Functions: The Start"
postSlug: functions
description: "Some initial set theory and functions, the crux of non-boring mathematics"
tags:
  - unit-1
  - chapter-1
  - set-theory
---

## Table of Contents

## Introduction

_Make sure to [start here](./start-here) if you haven't read the preliminaries. We rely on this article a fair bit here._

Set theory is, surprisingly, hilariously important to most any mathematical theory. No joke. What's funny is that a set isn't even clearly defined, mathematicians simply take the definition of a set as a simple axiom or intuition. A set is _basically_ a bunch of objects, whatever those objects may be. [Russell's paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox) be darned.

Despite all this, the definition of a set and how to work with sets are very easy to pick up, and you'll likely pick up on the details as we work with them, because believe me, we will be working with them a lot.

Functions, also, are easy on paper; in practice, however (which is also on paper lol), they can be rather confusing. As Dr. Sprano often says about functions, "you have to remember what side of the street you're playing on." And he's right, oftentimes students will trip up in proofs or normal math work by working in the wrong set and using the wrong rules on the wrong side of the function, using the domain's rules in the range or vice versa. What's worse, core proofs with functions will often use _the inverse mapping,_ and said mapping might not even be a function, adding to the street-side confusion.

## Sets are Simple

Believe me, sets are simple. You can do two major things with sets:

### Compare Them

You can compare sets by measuring whether one is contained in the other.

![set-inclusion](/assets/set-inclusion.jpg)

In the diagram, $A \subset B$ just means all the elements of $A$ are also in $B$; similarly, $B \subset A$ just means all the elements of $B$ are also in $A$. Simple. Logically, this means:

1. $A \subset B \rArr \forall a \in A,\ a \in B$
2. $B \subset A \rArr \forall b \in B,\ b \in A$

The thing is, if $A$ is a _proper subset_ of $B$ and not just a simple subset of $B$ (in the diagram, one set is both a _proper subset_ and a _simple subset_ of the other), there is potentially an element that is in the bigger set but not the smaller set.

For example, the set $\{1, 2\}$ is both a proper subset and a simple subset of $\{1, 2, 3\}$. As a separate example, $\{1, 2, 3\}$ is _also_ a subset of $\{1, 2, 3\}$, but not a _proper subset,_ because the subset in question _is_ the bigger set. It's the difference between two numbers being less than or equal to one another versus being simply less than one another. 5 is less than or equal to 5 because it's equal to 5. Much like the lesser-than-or-equal-to symbol, we'll denote this "smaller-than-or-equal-to" property by saying $A \subseteq B$.

Importantly, this can mean two sets are equal if they have the exact same elements, which is equivalent to saying both sets are "smaller than or equal to" one another: $A = B \Leftrightarrow A \subseteq B \wedge B \subseteq A$. This is used to split an equality proof into two simpler containment proofs; as such, you'll often hear that you have to prove "double containment" when proving equality of sets.

### Combine Them

You can combine sets to make new ones using operations reminiscent of boolean logic and regular algebra, although there are greater ties to boolean logic than to regular algebra (although all three are still rather strongly connected). There's three simple operations, which I'll compare to their (effectively equivalent) counterparts in boolean logic.

![set-combination](/assets/set-combination.jpg)

### The Key: Sets are just Outputs of Logical Tests

That's right, you've been secretly reading a computer science article all along. Sets are often identified by the boolean function that all elements in the set return `true` for. Equality of sets means the two boolean functions that identify them are also equal to one another. Containment means the "smaller" function is just a restriction of the "larger" function in some way. All of De Morgan's laws have set-theoretic counterparts. In fact, here they are:

1. $A \backslash (B \cup C) = A \backslash B \cap A \backslash C$
2. $A \backslash (B \cap C) = A \backslash B \cup A \backslash C$

The union/intersection is understood to come after the relative complement.

The laws above mirror the ones you learn in a CS math class very closely. Goodness, there's even something called set algebra that is incredibly reminiscent of boolean algebra, the way to work with boolean values and functions efficiently (wink wink nudge nudge). It's all just a context shift, and you can reliably shift from one to the other depending on what you're comfortable with.

There's one more operation to combine sets. The Cartesian product of two sets just makes what's called ordered pairs of points. It's basically the difference between a 1D space and a 2D space:

$$
A \times B = \{(a,b)\ |\ a \in A,\ b \in B \}
$$

An easy example is $\R \times \R$, better known as $\R^2$, and the point $(1,2)$, which is in $\R^2$.

So while sets are just a mathematician's version of a boolean function and thus very easy to pick up on...

## Functions Kinda Aren't

Functions are way harder. But that doesn't mean they're impossible! They're actually built upon the same set theory that's really easy to learn, there's just one or two more properties to be aware of.

Intuitively, a function is a mapping between two sets, a rule of correspondence if you will. You insert a value that the function accepts, and it will spit out a value that it was programmed to spit out from the other set. The domain ($D(f)$) is all the values the function will accept; the range, meanwhile ($R(f)$), is all the values the function could theoretically spit out.

Now, how does this intuition break?

### Intuition to Definition

Well, a function could spit out multiple outputs for a single input. But, do we see that in daily life? No, and how does a function decide which one to spit out? Could a function just spit out the entire range when given a singular input? How about the other inputs? Essentially, we want our function to be deterministic: one input will always give you a single (and the same) output, with no side effects or altering any rules of the game/set we're playing in.

We also need it to map from one set to another; seems obvious, but still. The intuition above actually doesn't guarantee the function will map everything from one set to everything in the other, and that's where the defining properties of a function, a one-to-one function, and an onto function come into play. We can codify all these properties into a definition, using a thing that takes in two sets and essentially tracks the relationship between them: a subset of a Cartesian product.

$$
\text{A function } f \text{ from sets } A \text{ to } B \space (\text{noted } f: A \rarr B) \iff \text{a subset } f \subseteq A \times B \space | \space \forall a \in A, \space (a, b) \in f \wedge (a, b') \in f \rArr b = b'
$$

Essentially, a function is a subset of $A \times B$ where _every_ $a$ gets mapped to a _unique_ $b$. Granted, two different $a$ values could map to the same $b$ value, and not every $b$ value may have a corresponding $a$ value (the range $R(f)$ is not necessarily equal to the codomain $B$). Interestingly, the definition of a function does guarantee that $A$ is equal to $D(f)$. Just a tidbit. The 1-1 and onto properties help solve these "functional uh-ohs".

### Definition of One-to-One (1-1)

$$
\text{A function is 1-1} \lrArr \forall a, \space a' \in A, \space f(a) = f(a') \rArr a = a'
$$

Essentially, any element in the range is uniquely identified by its input value.

### Definition of Onto

$$
\text{A function is onto} \lrArr \forall b \in B, \space \exists \space a \in A \space | \space f(a) = b
$$

Essentially, given an element b, you can choose an a that maps to it. This implies that the range is equal to the $B$ set.

What's funny is you can do this mapping thing for sets too.

Oh the pain.

### Functions as Transformations

Functions have 2 different intuitions.

1. **Point-to-point:** functions map a single point to another single point
2. **Set-to-set:** functions transform one set into another set

Please note, that other set could be anything. Functions make no guarantees, and whole classes of properties could be destroyed in transit. There's an additional complication to these two intuitions: in the point-to-point intuition, a function only has an inverse if it's 1-1 and onto (aka bijective); in the set-to-set intuition, a function (from hereon out known as a transformation) _always_ has an inverse, but even then the concept of an "inverse" isn't very clear. I need some help on that lol.

### Inverse Functions

I've stated previously that only bijections (bijective functions) have inverse functions. The inverse function is also a bijection whose inverse is the original function. In fact, the 1-1 and onto proofs are precisely the ways to show _the inverse transformation is also a function in the point-to-point sense._

### Restrictions: Point-to-Point Functions with Smaller Domains

Restrictions are kinda what they say on the tin: point-to-point functions with a smaller domain. This is often advantageous to secure the 1-1 property. Restrict the codomain to the range of the function to secure the onto property. Some common examples are $f(x) = x^2$ or $f(x) = \sin(x)$, where restricting the domain secures the 1-1 property and thus bijectivity, yielding their respective point-to-point inverses.

## Conclusion

Sets and functions (despite how weird functions can be) are very important to all of mathematics. The fact that I don't have to explain the intuition behind a set or a function demonstrates that rather well. They are used _everywhere,_ and I mean **_everywhere._** Knowing the logical and intuitive definitions of functions and their properties can facilitate a lot of proofs by knowing what exactly a certain class of function guarantees and what it doesn't. Such guarantees are used in the coming post all about dealing with infinity in sets, and real analysis hides a lot of inifnities in its cracks and crevices.
