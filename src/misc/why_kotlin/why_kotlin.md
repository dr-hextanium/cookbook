# Why do some FTC programmers use Kotlin? Should I switch?

*Have you ever seen Kotlin mentioned in the context of FTC code?*

*Are you curious about why some FTC programmers like to use Kotlin for their code bases?*

Kotlin is a language with very high cross compatability with Java, which means it can be used to write your FTC code.

FIRST provides official instructions for adding Kotlin to your project [here](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/installing_kotlin/Installing-Kotlin.html)

## Ingredients

1. Good understanding of Java
2. Interest in learning and exploring Kotlin

## The Recipe

Kotlin is a language that makes a very solid attempt at modernising Java. It makes writing common Java patterns extremely concise, and makes it easy to write safer code, that is less likely to have strange bugs or throw null pointer exceptions that are hard to deal with.

Kotlin is unlikely to be particularly useful to you if you are not using Object-Oriented aspects of Java already, if you are just writing \[Linear\]OpModes, but are not writing your own classes, Kotlin is probably not for you, while Kotlin certainly does offer some nice features in this environment, the challenges that come with using Kotlin may also prove hard to overcome unless you are writing more complex and involved code. It is also advisable not to try to switch to Kotlin at the same time as learning more Object-Oriented skills.

Due to Kotlin's concise nature, Kotlin can often prove difficult to read, where Java likes to put everything out in the open, and is very direct, Kotlin tends to imply much more.

This recipe will cover some basics, but large parts of common Kotlin syntax, with direct comparisons to Java.

### Vars and Vals

A big part of Kotlin is its changes to fields, getters, setters, and how they interact with paramaters from the constructor.

The following two snippets are equivalent (this is not quite true, but close enough, and gets the idea across):

```kt
{{#rustdoc_include VarsAndVals.kt:2:6}}
```

```java
{{#rustdoc_include VarsAndVals.java:2:30}}
```
Its pretty clear that Kotlin saves a lot of work on the front of writing getters and setters. While this isn't too big of a deal, after all, android studio offers some helpful tools to auto generate these functions in Java, Kotlin makes itself invaluable in enforcing the usage of these functions, in a syntactically shorter manner.

```kt
{{#rustdoc_include VarsAndVals.kt:8:19}}
```

```java
{{#rustdoc_include VarsAndVals.java:32:43}}
```

Kotlin enforces the use of getters and setters for property access, but uses the property access syntax!

Already, our java code is ~2.5 times longer than Kotlin.

If you're worried about defining custom getters and setters, don't worry, Kotlin allows that too, but we won't cover it here. Kotlin allows for a fairly wide range of cool features around this concept.

### Storing Constructor Parameters

Kotlin makes it super easy and fast to take in constructor paramaters and store them in the class. The following two snippets are once again, equivalent:

```kt
{{#rustdoc_include ConstructorParams.kt}}
```

```java
{{#rustdoc_include ConstructorParams.java}}
```

In this case, what was numerous lines in Java was only one in Kotlin, which is even a little easier to read!

### Default Values In Methods and Constructors

Kotlin makes it easy to specify default values to functions and constructors, again, the following two snippets are equivalent:

```kt
{{#rustdoc_include DefaultValues.kt}}
```

```java
{{#rustdoc_include DefaultValues.java}}
```

Kotlin makes this a little more powerful than demonstrated here, but for most situations, this is pretty simple.

### Null Safety

Kotlin makes it easy to work with values that can and can't be null, much easier than Java

```kt
val neverNull: Int = 10
val nullable: Int? = null
```
The `?` lets us know that the variable could be null, and Kotlin will throw compilation warnings if we try to use it without checking and handling it.

Lets look at some more:

```kt
fun addOrThrow(a: Int?, b: Int?) {
    val safeA = a ?: throw IllegalStateException("a is null")
    val safeB = b!!
    return safeA + safeB
}
```

The `?:` operator is known as the Elvis operator, and means that the code after it gets run if the left hand side is null, which means that we know we exit early and throw an exception if either of our inputs are null

The `!!` operator is like a shortcut for this operation in this situation, the Elvis operator is more powerful and flexible, if we don't want to throw our own error, and just want to crash, the `!!` operator basically insists that the value isn't null

Finally:

```kt
fun nullSafeMethodCall(a: Int?): Double {
    return a?.toDouble() ?: throw IllegalStateException("a is null")
}
```

We'll combine the concept above with the `?.` operator, which performs a null safe method call, if a is null, Kotlin won't try to call `.toDouble()` on it, and will just return null, which will then be caught by the Elvis operator!

### Overview

Kotlin has a lot more to it than this short overview, but these are some of the features that I find make a big common difference with Java, hopefully, this arms you with an expectation of what the rest of Kotlin is like, and some of the reasons that more advanced FTC programmers like to chose it over Java.

[Kotlin official documentation](https://kotlinlang.org/docs/home.html)

Overall, the best way to learn is just to jump in and give it a try, if you get stuck, search it up, or take a look at the [docs](https://kotlinlang.org/docs/home.html) again!

If you feel like you need a complete example of using Kotlin for FTC, I advise you ask in the unoffical Discord. Most people who use Kotlin write fairly complex codebases, and use different combinations of libraries, so you might need to ask some questions in order to find an example that you can follow, and matches the libraries you plan to use.

Another good place to search for Kotlin code in an FTC context is in libraries. A good portion of FTC software libraries are written in Kotlin, so they may provide usage examples for Kotlin, or you may find reading their contents a good place to learn.

*Last updated: 2024-01-30*
