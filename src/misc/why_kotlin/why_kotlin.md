# Why do some FTC programmers use Kotlin? Should I switch?

*Have you ever seen Kotlin mentioned in the context of FTC code?*

*Are you curious about why some FTC programmers like to use Kotlin for their code bases?*

Kotlin is a language with very high cross-compatability with Java, which means it can be used to write your FTC code.

FIRST provides official instructions
for adding Kotlin to your project [here.](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/installing_kotlin/Installing-Kotlin.html)

## Ingredients

1. Good understanding of Java
2. Interest in learning and exploring Kotlin

## The Recipe

Kotlin is a language that makes a very solid attempt at modernizing Java. 
It makes writing common Java patterns concise. 
Kotlin also makes it easy to write safer code that is less likely to have strange bugs or throw confusing NullPointerExceptions.

Kotlin is unlikely to be particularly useful to you if you are not using Object-Oriented aspects of Java already.
If you are just writing \[Linear\]OpModes but are not writing your own classes, Kotlin is probably not for you. 
While Kotlin certainly does offer some nice features in this environment, the challenges that come with using Kotlin may also prove hard to overcome unless you are writing more complex and involved code. 
It is also advisable not to try to switch to Kotlin at the same time as learning more Object-Oriented skills.

Due to Kotlin's concise nature, it can sometimes prove difficult to read. 
Java likes to put everything out in the open and be very direct and specific, while Kotlin tends to imply much more.

This recipe will cover some basics of Kotlin syntax with direct comparisons to Java.

### Vars and Vals

A big part of Kotlin is its changes to fields, getters, setters, and how they interact with parameters from constructors.

The following two snippets are effectively equivalent:

```kt
{{#rustdoc_include VarsAndVals.kt:2:6}}
```

```java
{{#rustdoc_include VarsAndVals.java:2:30}}
```
It's pretty clear that Kotlin saves a lot of work on the front of writing getters and setters. 
While this isn't too big of a deal, Kotlin makes itself invaluable in enforcing the usage of these functions in a syntactically shorter manner.

```kt
{{#rustdoc_include VarsAndVals.kt:8:19}}
```

```java
{{#rustdoc_include VarsAndVals.java:32:43}}
```

Kotlin enforces the use of getters and setters for property access, but uses the property access syntax!

Already, our Kotlin code is ~2.5 times shorter than Java.

If you're worried about defining custom getters and setters, Kotlin allows that too.
More detail is available in the [Kotlin docs](https://kotlinlang.org/docs/properties.html#getters-and-setters).
Kotlin allows for a fairly wide range of cool features around this concept.

### Storing Constructor Parameters

Kotlin makes it super easy to take in constructor parameters and store them in the class. 
The following two snippets are also equivalent:

```kt
{{#rustdoc_include ConstructorParams.kt}}
```

```java
{{#rustdoc_include ConstructorParams.java}}
```

In this case, what was numerous lines in Java is only one in Kotlin. 
The Kotlin version is even a little easier to read!

### Default Values In Methods and Constructors

Kotlin makes it easy to specify default values to functions and constructors.
The following two snippets are equivalent:

```kt
{{#rustdoc_include DefaultValues.kt}}
```

```java
{{#rustdoc_include DefaultValues.java}}
```

Kotlin makes this a little more powerful than demonstrated here, but for most situations, this is pretty straightforward.

### Null Safety

Kotlin makes it easy to work with values that can and can't be null, much easier than Java:

```kt
val neverNull: Int = 10
val nullable: Int? = null
```
The `?` lets us know that the variable could be null, and Kotlin will throw compilation warnings if we try to use it without checking and handling it.

Some more examples:

```kt
fun addOrThrow(a: Int?, b: Int?) {
    val safeA = a ?: throw IllegalStateException("a is null")
    val safeB = b!!
    return safeA + safeB
}
```

The `?:` operator is known as the Elvis operator (after it's resemblance to Elvis Presley) and means that the code after it gets run only if the left-hand side is null.
This allows the function to immediately exit and throw an error before any further processing occurs.

The `!!` operator is a shortcut for this operation. 
The Elvis operator is more powerful and flexible, but if you don't want to throw a specific error and instead crash immediately, the `!!` operator will enforce that the value isn't null.

Finally:

```kt
fun nullSafeMethodCall(a: Int?): Double {
    return a?.toDouble() ?: throw IllegalStateException("a is null")
}
```

We combine the concept above with the `?.` operator, which performs a null safe method call. 
If `a` is null, Kotlin won't try to call `.toDouble()` on it and will just return null,
which will then be caught by the Elvis operator!

### Accessing Hardware
Because of Kotlin's null safety system, accessing hardware must be done differently.
There are a few ways to do this, but the one we'll show here is to use `by lazy`:
```kt
    // by lazy will only initialize this variable the first time it is used.
    // This prevents it from ever being null, but also allows you to initialize it only after your opmode begins.
    val arm by lazy { hardwareMap["arm"] as DcMotorEx } // Alternately hardwareMap.get(DcMotorEx::class.java, "arm") also works here

    override fun init() { // or runOpMode() for LinearOpModes
        // Since we used by lazy, accessing the arm in any way will automatically initialize it:
        arm.power = 1.0
        telemetry.addData("armPos", arm.currentPosition)
        telemetry.update()
        // Note that, since we used by lazy, we do NOT need to put !! after arm.
    }
```
There are other options to do this as well such as the `lateinit` keyword.

### Overview

Kotlin has a lot more to it than this short overview, but these are some of the features that make a big common difference with Java.
Hopefully, this arms you with an expectation of what the rest of Kotlin is like, and some of the reasons that more advanced FTC programmers like to choose it over Java.

[Kotlin official documentation](https://kotlinlang.org/docs/home.html)

Overall, the best way to learn is just to jump in and give it a try. 
If you get stuck, search it up, or take a look at the [docs](https://kotlinlang.org/docs/home.html) again!

If you feel like you need a complete example of using Kotlin for FTC, I advise you ask in the FTC Discord. 
Most people who use Kotlin write fairly complex codebases and use different combinations of libraries, so you might need to ask some questions to find an example relevant to you.

Another good place to search for Kotlin code in an FTC context is in libraries. 
Many FTC software libraries such as [Roadrunner](https://github.com/acmerobotics/road-runner) are written in Kotlin, so they can provide great usage examples. 


*Last updated: 2024-05-29*
