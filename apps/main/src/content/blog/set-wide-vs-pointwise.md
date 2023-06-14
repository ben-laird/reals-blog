---
pubDateTime: 2023-06-14T16:52:00-05:00
title: "Set-wide vs. Pointwise"
postSlug: set-wide-vs-pointwise
description: "Proofs are hard. I go on a rant about them. Read more"
tags:
  - unit-0
  - chapter-2
  - set-theory
  - topology
  - analysis
  - programming
---

## Table of Contents

## Set-wide vs. Pointwise

It's incredibly important to read the constraints on the variables being introduced into the proof you're reading; the type, scope, and special properties of the variable will often be the difference between a very elegant proof and a load of scribbles. We can borrow a lot of these concepts from the world of programming. Let's take a detour and dive into the world of type systems, variable scopes, and other special variable properties of computer science.

### Type

The type of a variable is kind of just a glorified way to say what set is it a part of; there's a lot of mathematical complexity (and cutting edge research) being abstracted away and hidden in that definition, but it works well enough for our purposes here. In programming, a variable type is often very easy to read, and there will often be a compiler telling you if you're using a variable wrong. For instance, this TypeScript program will wish a person a happy birthday:

```ts
const name: string = "Jane";

function wishHappyBirthday(name: string) {
  return `Happy birthday, ${name}!`;
}

const birthdayWish = wishHappyBirthday(name); // Will return a variable of type string

const badBirthdayWish = wishHappyBirthday(88); // Compiler will throw an error because the function doesn't accept numbers

console.log(birthdayWish);
```

In much the same way, a variable in mathematics can have a type, and we can basically determine that type through set membership. A real number abides by a different set of rules than, say, a complex number, just as a string behaves differently than a number. And in much the same way, misusing a variable--or function for that matter--can destroy the logic of a proof. Functions matter too, because in programming (and in math, though more subtly), functions are oftentimes assigned to variables too; remember that functions are also members of a set, specifically $\mathcal{P}(A \times B)$.

### Scope

The scope of a mathematical variable is all the instances that variable is defined in. This is the key to why the "for all" condition is stronger than the simple "pointwise" condition we discussed in the [article](./completeness-applications#set-theoretic) that started this rant. In [the other article](./completeness-applications#scopes-in-action), you'll see a pointwise condition being used and how that pointwise condition is a _weaker_ condition than the set-wide condition above and thus can only be used to prove _weaker_ statements about the environment around the condition. It all boils down to the _scope_ of the variables (two "for all", set-wide conditions versus one pointwise condition that's true set-wide). I really hope I'm getting this point across: how variables interact with one another and the relationships their scopes have are vastly important, especially in a set-driven proofs course like real analysis.

### Special Properties

In a proof, especially one on an exam, you'll be given _exactly_ what you'll need to complete the proof--no more, no less. Using special properties of a variable (like whether it's the [least such, greatest such](./start-here#least-such-and-greatest-such-elements), or [unique](./start-here#unique-or-only-such-elements)) is an easy way to tell whether your proof is going in the right direction or not. If you don't use a special property, you've messed up. A programmer would understand this concept as the various modifiers a variable could be given, like whether it's private or public, whether it has been allocated or not, whether it's [mutable or not](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#mutable-references), or [who owns it](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html) (my two personal favorites when discussing special properties of variables). The practice of using all special properties to a programmer just means dead code elimination and properly abstracting away or restricting access to your variables, also known as API design.

### Conclusion

I'll probably go into this deeper later on, but suffice to say, these three factors in a variable's creation are essential to proof-crafting, and a misunderstanding of these concepts is often the reason behind the creation of a horrible proof. Great mathematicians have implicitly honed these senses of variable typing, scope, and special properties, and it's evident in the proofs they make.
