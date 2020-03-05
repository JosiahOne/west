# west
Ruin programs, benchmark your testing.

## Summary
Ideally, software projects contain large test suites that verify the
majority of its behavior.

Is this ideal met in practice? Who knows.

Enter West, a tool which aims to provide benchmarking capabilities to your
test suites by determining how well they detect *changes* to your program.

Specifically, West works by *mutating* Javascript programs and then confirms
whether your test suites detect these changes as failures.

A tenet of this tool is the following (unproven) claim:

  "Assume a monkey hits a keyboard for a while and suddenly finds itself with
   a copy of your software project. If the monkey then makes a bunch of random
   changes to your program, those changes are likely unwanted."
