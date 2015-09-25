### Style
- 4 space indent 
- The one true brace style is one of the most common brace styles in JavaScript, in which the opening curly brace of a block is placed on the same line as its corresponding statement or declaration.
- Single quote marks
- At least two charactor identifier names
- Use Camel Case Naming convention
- Comma spacing after variable and at the end of lines.
- Files must end with a line break 
- Function Expressions should have a Name
- Space after Object key `key: value`
- New Consutructor definations should be Capitalized
- Max of 2 line breaks between code
- No Ternaries 
- Don't use the object Constructor 
- Parentheses on the same line as functions definations 
- No trailing spaces
- Extra Parenthese aren't allowed. 
- Always use a Semi colon
- Add space around operators



#### Strict Mode
Babel inserts strict mode for us during transpile. 

#### Remove Any used variables
Don't leave them laying around like dirty landry. 

#### Perfer Const
If you aren't going to change a value just set it as a const and be happier. 

#### No Shadowing
Shadowing is the process by which a local variable shares the same name as a variable in its containing scope.

Also will error if you try to use restricted Javascript name/word as a varaible there will be an error. 

#### No Unused Variables
If you declared a variable but never used it, delete it. 
- Will ignore Global Variables 
- Will ignore Function args before one is used. 

#### Don't define a variable before it's used. 
You shouldn't define a variable before it's used. 

#### No Comma Dangling
IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.

#### Don't Make Assignments in Conditional Statements 
In conditional statements, it is very easy to mistype a comparison operator (such as ==) as an assignment operator (such as =).

#### Console.log, Debugger and Alert 
Console.log is great for debugging, but shouldn't make it to production. Warnings are thrown for every console.log statement in the code base. 

#### Shouldn't use constant expressions in conditions
Comparing a literal expression in a condition is usually a typo or development trigger for a specific behavior.

#### Duplicate Keys and Cases
Creating objects with duplicate keys in objects can cause unexpected behavior in your application.

A switch statements with duplicate case labels is normally an indication of a programmer error.

#### No Empty Block Statements 
Empty statements usually occur due to refactoring that wasn't completed, such as:

```
	if (foo) {
	}
```

#### Disallow Assignment of the Exception Parameter
When an error is caught using a catch block, it's possible to accidentally (or purposely) overwrite the reference to the error. Such as:

```
try {
    // code
} catch (e) {
    e = 10;
}
```
This makes it impossible to track the error from that point on.

#### Disallow Extra Boolean Casts
In contexts such as an if statement's test where the result of the expression will already be coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary.

#### Disallow Extra Semicolons (no-extra-semi)
JavaScript will more or less let you put semicolons after any statement without complaining. Typos and misunderstandings about where semicolons are required can lead to extra semicolons that are unnecessary.

#### Disallow Function Assignment [(no-func-assign)](http://eslint.org/docs/rules/no-func-assign)
JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a FunctionExpression `var foo = function() { ... };`. While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

#### Declarations in Program or Function Body [(no-inner-declarations)](http://eslint.org/docs/rules/no-inner-declarations)
In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a program or the body of another function, though parsers sometimes erroneously accept them elsewhere. This only applies to function declarations; named or anonymous function expressions can occur anywhere an expression is permitted.

#### Disallow Invalid Regular Expressions [(no-invalid-regexp)](http://eslint.org/docs/rules/no-invalid-regexp)
This rule validates string arguments passed to the RegExp constructor.

#### No Irregular Whitespace [(no-irregular-whitespace)](http://eslint.org/docs/rules/no-irregular-whitespace)
Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature to mixed tabs and spaces.

#### Disallow Global Object Function Calls [(no-obj-calls)](http://eslint.org/docs/rules/no-obj-calls)
ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as Math and JSON) but will throw an error if you try to execute them as functions.

#### Disallow Sparse Arrays [(no-sparse-arrays)](http://eslint.org/docs/rules/no-sparse-arrays)
Sparse arrays contain empty slots, most frequently due to multiple commas being used in an array literal, such as:

	var items = [,,];
	
While the `items` array in this example has a `length` of 2, there are actually no values in `items[0]` or `items[1]`. The fact that the array literal is valid with only commas inside, coupled with the `length` being set and actual item values not being set, make sparse arrays confusing for many developers. Consider the following:

	var colors = [ "red",, "blue" ];
	
In this example, the `colors` array has a `length` of 3. But did the developer intend for there to be an empty spot in the middle of the array? Or is it a typo?

The confusion around sparse arrays defined in this manner is enough that it's recommended to avoid using them unless you are certain that they are useful in your code.

#### Disallow Unreachable Code [(no-unreachable)](http://eslint.org/docs/rules/no-unreachable)
A number of statements unconditionally exit a block of code. Any statements after that will not be executed and may be an error. The presence of unreachable code is usually a sign of a coding error.

	function fn() {
    	x = 1;
    	return x;
    	x = 3; // this will never execute
	}

#### Require isNaN() [(use-isnan)](http://eslint.org/docs/rules/use-isnan)
In JavaScript, `NaN` is a special value of the Number type. It's used to represent any of the "not-a-number" values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic. NaN has the unique property of not being equal to anything, including itself. That is to say, that the condition `NaN !== NaN` evaluates to true.

#### Treat var as Block Scoped [(block-scoped-var)](http://eslint.org/docs/rules/block-scoped-var)
The block-scoped-var rule generates warnings when variables are used outside of the block in which they were defined. This emulates C-style block scope.

	function doSomething() {
    	if (true) {
        	var build = true;
    	}

    	console.log(build);
	}
	
#### Require Consistent Returns [(consistent-return)](http://eslint.org/docs/rules/consistent-return)
One of the confusing aspects of JavaScript is that any function may or may not return a value at any point in time. When a function exits without any `return` statement executing, the function returns `undefined`. Similarly, calling `return` without specifying any value will cause the function to return `undefined`. Only when return is called with a value is there a change in the function's return value.

Unlike statically-typed languages that will catch when a function doesn't return the type of data expected, JavaScript has no such checks, meaning that it's easy to make mistakes such as this:

	function doSomething(condition) {

    	if (condition) {
        	return true;
    	} else {
        	return;
    	}
	}
	
Here, one branch of the function returns `true`, a Boolean value, while the other exits without specifying any value (and so `returns` undefined). This may be an indicator of a coding error, especially if this pattern is found in larger functions.

#### Require Following Curly Brace Conventions [(curly)](http://eslint.org/docs/rules/curly)
JavaScript allows the omission of curly braces when a block contains only one statement. However, it is considered by many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity.

#### Require Default Case in Switch Statements [(default-case)](http://eslint.org/docs/rules/default-case) 

#### Require Dot Notation [(dot-notation)](http://eslint.org/docs/rules/dot-notation)
In JavaScript, one can access properties using the dot notation (`foo.bar`) or square-bracket notation (`foo["bar"]`). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

	foo["bar"];
	
#### Require === and !== [(eqeqeq)](http://eslint.org/docs/rules/eqeqeq)
It is considered good practice to use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=`.

The reason for this is that `==` and `!=` do type coercion which follows the rather obscure Abstract Equality Comparison Algorithm. For instance, the following statements are all considered true:

	[] == false
	[] == ![]
	3 == "03"
	
If one of those occurs in an innocent-looking statement such as `a == b` the actual problem is very difficult to spot.

#### Require Guarding for-in [(guard-for-in)](http://eslint.org/docs/rules/guard-for-in)
Looping over objects with a for in loop will include properties that are inherited through the prototype chain. This behavior can lead to unexpected items in your for loop.

	for (key in foo) {
    	doSomething(key);
	}
	
#### Disallow Use of caller/callee [(no-caller)](http://eslint.org/docs/rules/no-caller)
The use of arguments.caller and arguments.callee make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

	function foo() {
    	var callee = arguments.callee;
	}

#### Disallow return in else [(no-else-return)](http://eslint.org/docs/rules/no-else-return)
If an if block contains a return statement, the else block becomes unnecessary. Its contents can be placed outside of the block.

	function foo() {
    	if (x) {
        	return y;
    	} else {
        	return z;
    	}
	}
	
#### Disallow Null Comparisons [(no-eq-null)](http://eslint.org/docs/rules/no-eq-null)
Comparing to null without a type-checking operator (== or !=), can have unintended results as the comparison will evaluate to true when comparing to not just a null, but also an undefined value.

	if (foo == null) {
		bar();
	}

#### Disallow eval() [(no-eval)](http://eslint.org/docs/rules/no-eval)
JavaScript's eval() function is potentially dangerous and is often misused. Using eval() on untrusted code can open a program up to several different injection attacks. The use of eval() in most contexts can be substituted for a better, alternative approach to a problem.

	var obj = { x: "foo" },
    	key = "x",
    	value = eval("obj." + key);
    	
#### Disallow Extending of Native Objects [(no-extend-native)](http://eslint.org/docs/rules/no-extend-native)
In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes people change the behavior of these native objects in ways that break the assumptions made about them in other parts of the code.

For example here we are overriding a builtin method that will then affect all Objects, even other builtins.

	// seems harmless
	Object.prototype.extra = 55;

	// loop through some userIds
	var users = {
    	"123": "Stan",
    	"456": "David"
	};

	// not what you'd expect
	for (var id in users) {
    	console.log(id); // "123", "456", "extra"
	}

#### Disallow unnecessary function binding [(no-extra-bind)](http://eslint.org/docs/rules/no-extra-bind)
The `bind()` method is used to create functions with specific `this` values and, optionally, binds arguments to specific values. When used to specify the value of `this`, it's important that the function actually use `this` in its function body. For example:

	var boundGetName = (function getName() {
    	return this.name;
	}).bind({ name: "ESLint" });

	console.log(boundGetName());      // "ESLint"
	
This code is an example of a good use of `bind()` for setting the value of `this`.

Sometimes during the course of code maintenance, the `this` value is removed from the function body. In that case, you can end up with a call to `bind()` that doesn't accomplish anything:

	// useless bind
	var boundGetName = (function getName() {
    	return "ESLint";
	}).bind({ name: "ESLint" });

	console.log(boundGetName());      // "ESLint"
	
In this code, the reference to `this` has been removed but `bind()` is still used. In this case, the `bind()` is unnecessary overhead (and a performance hit) and can be safely removed.

#### Disallow Case Statement Fallthrough [(no-fallthrough)](http://eslint.org/docs/rules/no-fallthrough)

The `switch` statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one `case` to the next. For example:

	switch(foo) {
    	case 1:
        	doSomething();

    	case 2:
        	doSomethingElse();
	}
	
In this example, if `foo` is `1`,then execution will flow through both cases, as the first falls through to the second. You can prevent this by using `break`, as in this example:

	switch(foo) {
    	case 1:
        	doSomething();
        	break;

    	case 2:
        	doSomethingElse();
	}

#### Disallow Floating Decimals [(no-floating-decimal)](http://eslint.org/docs/rules/no-floating-decimal)
Float values in JavaScript contain a decimal point, and there is no requirement that the decimal point be preceded or followed by a number. For example, the following are all valid JavaScript numbers:

	var num = .5;
	var num = 2.;
	var num = -.7;
	
Although not a syntax error, this format for numbers can make it difficult to distinguish between true decimal numbers and the dot operator. For this reason, some recommend that you should always include a number before and after a decimal point to make it clear the intent is to create a decimal number.

#### Disallow Implied eval() [(no-implied-eval)](http://eslint.org/docs/rules/no-implied-eval)
It's considered a good practice to avoid using `eval()` in JavaScript. There are security and performance implications involved with doing so, which is why many linters (including ESLint) recommend disallowing `eval()`. However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

The first is using `setTimeout()`, `setInterval()` or `execScript()` (Internet Explorer only), both of which can accept a string of JavaScript code as their first argument. For example:

	setTimeout("alert('Hi!');", 100);
	
This is considered an implied `eval()` because a string of JavaScript code is passed in to be interpreted. The same can be done with `setInterval()` and `execScript()`. Both interpret the JavaScript code in the global scope. For both setTimeout() and setInterval(), the first argument can also be a function, and that is considered safer and is more performant:

	setTimeout(function() {
    	alert("Hi!");
	}, 100);
	
The best practice is to always use a function for the first argument of `setTimeout()` and `setInterval()` (and avoid `execScript()`).

#### Disallow Unnecessary Nested Blocks [(no-lone-blocks)](http://eslint.org/docs/rules/no-lone-blocks)
In JavaScript, prior to ES6, standalone code blocks delimited by curly braces do not create a new scope and have no use. For example, these curly braces do nothing to `foo`:

	{
    	var foo = bar();
	}
	
In ES6, code blocks may create a new scope if a block-level binding (let and const), a class declaration or a function declaration (in strict mode) are present. A block is not considered redundant in these cases.

#### Disallow Functions in Loops [(no-loop-func)](http://eslint.org/docs/rules/no-loop-func)
Writing functions within loops tends to result in errors due to the way the function creates a closure around the loop. For example:

	for (var i = 0; i < 10; i++) {
    	funcs[i] = function() {
        	return i;
    	};
	}
	
In this case, you would expect each function created within the loop to return a different number. In reality, each function returns 10, because that was the last value of `i` in the scope.

`let` or `const` mitigate this problem.

	for (let i = 0; i < 10; i++) {
    	funcs[i] = function() {
        	return i;
    	};
	}
	
In this case, each function created within the loop returns a different number as expected.

#### Disallow Multiline Strings [(no-multi-str)](http://eslint.org/docs/rules/no-multi-str)
It's possible to create multiline strings in JavaScript by using a slash before a newline, such as:

	var x = "Line 1 \
         	Line 2";
         	
Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.

#### Disallow Reassignment of Native Objects [(no-native-reassign)](http://eslint.org/docs/rules/no-native-reassign)
Reports an error when they encounter an attempt to assign a value to built-in native object.

	String = "hello world";

#### Disallow new For Side Effects [(no-new)](http://eslint.org/docs/rules/no-new)
The goal of using `new` with a constructor is typically to create an object of a particular type and store that object in a variable, such as:

	var person = new Person();
	
It's less common to use `new` and not store the result, such as:

	new Person();
	
In this case, the created object is thrown away because its reference isn't stored anywhere, and in many cases, this means that the constructor should be replaced with a function that doesn't require `new` to be used.

#### Disallow Function Constructor [(no-new-func)](http://eslint.org/docs/rules/no-new-func)
It's possible to create functions in JavaScript using the Function constructor, such as:

	var x = new Function("a", "b", "return a + b");
	
This is considered by many to be a bad practice due to the difficult in debugging and reading these types of functions.

#### Disallow Primitive Wrapper Instances [(no-new-wrappers)](http://eslint.org/docs/rules/no-new-wrappers)

There are three primitive types in JavaScript that have wrapper objects: string, number, and boolean. These are represented by the constructors `String`, `Number`, and `Boolean`, respectively. The primitive wrapper types are used whenever one of these primitive values is read, providing them with object-like capabilities such as methods. Behind the scenes, an object of the associated wrapper type is created and then destroyed, which is why you can call methods on primitive values, such as:

	var text = "Hello world".substring(2);
	
Behind the scenes in this example, a `String` object is constructed. The `substring()` method exists on `String.prototype` and so is accessible to the string instance.

It's also possible to manually create a new wrapper instance:

	var stringObject = new String("Hello world");
	var numberObject = new Number(33);
	var booleanObject = new Boolean(false);
	
Although possible, there aren't any good reasons to use these primitive wrappers as constructors. They tend to confuse other developers more than anything else because they seem like they should act as primitives, but they do not. For example:

	var stringObject = new String("Hello world");
	console.log(typeof stringObject);       // "object"

	var text = "Hello world";
	console.log(typeof text);               // "string"

	var booleanObject = new Boolean(false);
	if (booleanObject) {    // all objects are truthy!
    	console.log("This executes");
	}
	
The first problem is that primitive wrapper objects are, in fact, objects. That means `typeof` will return `"object"` instead of `"string"`, `"number"`, or `"boolean"`. The second problem comes with boolean objects. Every object is truthy, that means an instance of Boolean always resolves to true even when its actual value is `false`.

For these reasons, it's considered a best practice to avoid using primitive wrapper types with `new`.

#### Disallow Octal Literals [(no-octal)](http://eslint.org/docs/rules/no-octal)
Octal literals are numerals that begin with a leading zero, such as:

	var num = 071;      // 57
	
The leading zero to identify an octal literal has been a source of confusion and error in JavaScript. ECMAScript 5 deprecates the use of octal numeric literals in JavaScript and octal literals cause syntax errors in strict mode.

It's therefore recommended to avoid using octal literals in JavaScript code.

#### Disallow Octal Escapes [(no-octal-escape)](http://eslint.org/docs/rules/no-octal-escape)
As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated feature and should not be used. It is recommended that Unicode escapes be used instead.

	var foo = "Copyright \251";
	
#### Disallow Reassignment of Function Parameters [(no-param-reassign)](http://eslint.org/docs/rules/no-param-reassign)
Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the `arguments` object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error.

#### Disallow Use of `__proto__` [(no-proto)](http://eslint.org/docs/rules/no-proto)
`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code. Use getPrototypeOf method instead.

#### Disallow Redeclaring Variables [(no-redeclare)](http://eslint.org/docs/rules/no-redeclare)
In JavaScript, it's possible to redeclare the same variable name using var. This can lead to confusion as to where the variable is actually declared and initialized.

#### Disallow Assignment in return Statement [(no-return-assign)])(http://eslint.org/docs/rules/no-return-assign)
One of the interesting, and sometimes confusing, aspects of JavaScript is that assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when the true intent was to do a comparison. This is especially true when using a `return` statement. For example:

	function doSomething() {
    	return foo = bar + 2;
	}
	
It is difficult to tell the intent of the `return` statement here. It's possible that the function is meant to return the result of `bar + 2`, but then why is it assigning to `foo`? It's also possible that the intent was to use a comparison operator such as `==` and that this code is an error.

Because of this ambiguity, it's considered a best practice to not use assignment in `return` statements.

#### Disallow Script URLs [(no-script-url)](http://eslint.org/docs/rules/no-script-url)

Using `javascript:` URLs is considered by some as a form of `eval`. Code passed in `javascript:` URLs has to be parsed and evaluated by the browser in the same way that `eval` is processed.

#### Disallow Self Compare [(no-self-compare)](http://eslint.org/docs/rules/no-self-compare)

Comparing a variable against itself is usually an error, either an typo or refactoring error. It is confusing to the reader and may potentially introduce a runtime error.

The only time you would compare a variable against itself is when you are testing for `NaN`. However, it is far more appropriate to use the `isNaN()` function for that use case rather than leaving the reader of the code to determine the intent of self comparison.

#### Disallow Use of the Comma Operator [(no-sequences)](http://eslint.org/docs/rules/no-sequences)

The comma operator includes multiple expressions where only one is expected. It evaluates each operand from left to right and returns the value of the last operand. However, this frequently obscures side effects, and its use is often an accident. Here are some examples of its use:

	var a = (3, 5); // a = 5

	a = b += 5, a + b;

	while (a = next(), a && a.length);

	(0,eval)("doSomething();");

#### Restrict what can be thrown as an exception [(no-throw-literal)](http://eslint.org/docs/rules/no-throw-literal)

It is considered good practice to only `throw` the `Error` object itself or an object using the `Error` object as base objects for user-defined exceptions. The fundamental benefit of `Error` objects is that they automatically keep track of where they were built and originated.

This rule restricts what can be thrown as an exception. When it was first created, it only prevented literals from being thrown (hence the name), but it has now been expanded to only allow expressions which have a possibility of being an `Error` object.

#### No with Statements [(no-with)](http://eslint.org/docs/rules/no-with)

The `with` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. Additionally, the `with` statement cannot be used in strict mode.

#### Require Radix Parameter [(radix)](http://eslint.org/docs/rules/radix)
When using the `parseInt()` function it is common to omit the second argument, the radix, and let the function try to determine from the first argument what type of number it is. By default, `parseInt()` will autodetect decimal and hexadecimal (via `0x` prefix). Prior to ECMAScript 5, `parseInt()` also autodetected octal literals, which caused problems because many developers assumed a leading `0` would be ignored.

This confusion led to the suggestion that you always use the radix parameter to `parseInt()` to eliminate unintended consequences. So instead of doing this:

	var num = parseInt("071");      // 57
	
Do this:

	var num = parseInt("071", 10);  // 71
	
ECMAScript 5 changed the behavior of `parseInt()` so that it no longer autodetects octal literals and instead treats them as decimal literals. However, the differences between hexadecimal and decimal interpretation of the first parameter causes many developers to continue using the radix parameter to ensure the string is interpreted in the intended way.

#### Require Variable Declarations to be at the top of their scope [(vars-on-top)](http://eslint.org/docs/rules/vars-on-top)
The `vars-on-top` rule generates warnings when variable declarations are not used serially at the top of a function scope or the top of a program. By default variable declarations are always moved (“hoisted”) invisibly to the top of their containing scope by the JavaScript interpreter. This rule forces the programmer to represent that behaviour by manually moving the variable declaration to the top of its containing scope.

#### Require IIFEs to be Wrapped [(wrap-iife)](http://eslint.org/docs/rules/wrap-iife)
Require immediate function invocation to be wrapped in parentheses.

	var x = function () { return { y: 1 };}();
	
#### Require or disallow Yoda Conditions [(yoda)](http://eslint.org/docs/rules/yoda)
Yoda conditions are so named because the literal value of the condition comes first while the variable comes second. For example, the following is a Yoda condition:

	if ("red" === color) {
    	// ...
	}
	
This is called a Yoda condition because it reads as, "red is the color", similar to the way the Star Wars character Yoda speaks. Compare to the other way of arranging the operands:

	if (color === "red") {
    	// ...
	}
	
This typically reads, "color is red", which is arguably a more natural way to describe the comparison.

Proponents of Yoda conditions highlight that it is impossible to mistakenly use `=` instead of `==` because you cannot assign to a literal value. Doing so will cause a syntax error and you will be informed of the mistake early on. This practice was therefore very common in early programming where tools were not yet available.

Opponents of Yoda conditions point out that tooling has made us better programmers because tools will catch the mistaken use of `=` instead of `==` (ESLint will catch this for you). Therefore, they argue, the utility of the pattern doesn't outweigh the readability hit the code takes while using Yoda conditions.



