# 16 - Codex and Playwright Testing Architecture

## 1. Scope and interview-safe accuracy

This document explains a reference architecture based on publicly documented Codex behavior and observable browser automation. It does not describe confidential OpenAI infrastructure.

Codex is the reasoning and orchestration layer. Playwright is the deterministic browser-control layer. The browser is the execution and rendering environment.

## 2. Component diagram

~~~text
Human
  | requirement and approval
  v
Codex agent
  | plans actions and interprets evidence
  v
Tool boundary / command runner
  | invokes approved Playwright operation
  v
Playwright driver
  | browser protocol
  v
Browser process
  +-- page
  +-- DOM
  +-- accessibility representation
  +-- network
  +-- console
  +-- pixels
  |
  v
Evidence: state, output, screenshot, trace
  |
  v
Codex diagnosis -> optional code patch -> retest
~~~

## 3. Control plane and data plane

- **Control plane:** human request, Codex plan, permissions, selected commands, test definitions.
- **Data plane:** browser actions, page events, DOM values, screenshots, logs, traces.

Separating them helps answer interview questions about authority and evidence.

## 4. Step-by-step execution

1. Human defines desired behavior.
2. Codex inspects code and converts behavior into testable conditions.
3. Sandbox and approval policy determine allowed commands and files.
4. A local server exposes the static site through HTTP.
5. Playwright launches or connects to a browser.
6. A browser context provides isolated session state.
7. A page navigates to the URL.
8. Locators identify controls.
9. Playwright performs actions.
10. Assertions or evaluations capture state.
11. Screenshots or traces provide visual/temporal evidence.
12. Codex compares observations with acceptance criteria.
13. If authorized, Codex edits source.
14. The exact failing flow is repeated.
15. Codex reports evidence and limitations.

## 5. Why both AI and deterministic automation?

| Codex strength | Playwright strength |
|---|---|
| Understands natural-language intent | Repeats exact browser actions |
| Reads multiple source files | Measures actual rendered state |
| Forms hypotheses | Produces concrete failure output |
| Adapts investigation | Runs defined assertions |
| Explains trade-offs | Captures trace and screenshot |

Codex without a browser may only infer. Playwright without an informed test has no understanding of business intent.

## 6. State model

~~~text
Repository state
 + browser viewport
 + URL and history
 + DOM
 + storage/cookies
 + theme
 + scroll position
 + focus
 + timing
 = observed test state
~~~

A reproducible test controls or records each relevant state variable.

## 7. Evidence hierarchy

1. Assertion result.
2. Exact DOM or accessibility state.
3. Browser console and network evidence.
4. Geometry measurement.
5. Screenshot.
6. Human visual interpretation.

Screenshots are valuable but cannot alone prove keyboard focus semantics or an aria attribute.

## 8. Reliability architecture

- Stable semantic locators.
- Fresh browser contexts.
- Explicit base URL.
- Web-first assertions.
- Test isolation.
- Controlled projects/viewports.
- Traces on retry.
- Small reproducible scenarios.
- Static checks before expensive browser tests.

## 9. Security boundaries

~~~text
Agent request
   |
Approval policy
   |
OS/workspace sandbox
   |
Command runner
   |
Browser
   |
Target site and network policy
~~~

Browser testing must not submit real payments, contact real people, expose credentials, or mutate production without explicit authority.

## 10. Scalability

For a small site, one local browser session is sufficient for targeted QA. A larger system may add:

- Parallel browser projects.
- Sharding across CI workers.
- Test tagging.
- Separate smoke and regression suites.
- Artifact retention.
- Quarantine and ownership for flaky tests.
- Staging environment.

Parallelism reduces time but consumes more CPU/memory and can expose shared-state bugs.

## 11. Failure taxonomy

~~~text
Failure
|
+-- Product defect
+-- Test defect
+-- Environment defect
+-- Timing/flakiness
+-- Selector drift
+-- Data dependency
+-- Browser-specific behavior
+-- Permission/network failure
~~~

The correct response depends on classification. Retrying every failure can hide the cause.

## 12. Interview questions

### Why not use screenshots only?

Pixels do not reliably express semantics, focus, hidden state, or causal timing.

### How does the architecture prevent false confidence?

It combines source inspection, deterministic actions, assertions, visual evidence, multiple viewports, and explicit limitations.

### How would you improve observability?

Capture traces on failure, console messages, relevant network errors, test annotations, and the exact commit/environment.

### How would you handle flaky tests?

Measure failure patterns, remove arbitrary sleeps, improve locators and isolation, control data, and use retries only as diagnostic signal.

## 13. Project example

The native mobile selection control conflicted with live scroll tracking. Codex could reason about competing state updates; browser evidence demonstrated unreliable behavior; the implementation changed to anchor links with a temporary requested-section lock; repeated browser checks verified the result.

## 14. Sanity check

This guide does not claim that Codex internally embeds Playwright or that all Codex surfaces expose identical browser tools. It describes the tool-orchestrated architecture visible in this project and a defensible system-design model.

