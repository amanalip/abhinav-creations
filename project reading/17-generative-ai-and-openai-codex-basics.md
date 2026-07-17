# 17 - Generative AI and OpenAI Codex Basics

> Product snapshot date: 17 July 2026. Durable concepts are separated from changeable product names. Recheck official documentation for current availability.

## 1. AI concept map

~~~text
Artificial Intelligence
|
+-- Machine learning
    |
    +-- Neural networks
        |
        +-- Large language models
            |
            +-- Generative AI
            +-- Tool-using agents
~~~

Generative AI produces new content based on learned patterns and current input. It does not retrieve an infallible stored answer for every question.

## 2. Tokens

A token is a unit processed by a language model. It may be a word, part of a word, punctuation, or code fragment.

~~~text
Instructions + conversation + files + tool results
                       |
                       v
                  input tokens
                       |
                     model
                       |
                       v
                  output tokens
~~~

Token count affects context capacity, latency, and sometimes cost.

## 3. Context window

The context window is the amount of information a model can consider in one run. It may include system instructions, user requests, conversation, repository excerpts, images, and tool output.

It is not:

- Unlimited.
- Perfect long-term memory.
- A guarantee that every detail receives equal attention.
- A substitute for project documentation.

Large noisy logs can reduce effective reliability even when they technically fit.

## 4. Context compaction

As a conversation grows, earlier content may be summarized so work can continue.

~~~text
Detailed early conversation
          |
          v
Compaction creates concise durable summary
          |
          v
Later reasoning uses summary + recent turns + project files
~~~

Compaction can preserve important facts but may omit nuance. Record requirements and decisions in repository files.

## 5. Hallucination and verification

A hallucination is confident-looking but unsupported output. Reduce risk with:

- Authoritative sources.
- Repository inspection.
- Explicit unknowns.
- Tests.
- Human review.
- Separating facts from proposals.

The pending-content approach in this website is an example of refusing to convert missing business data into invented copy.

## 6. Model, product, and surface

- A **model** performs language/reasoning work.
- Codex is a coding agent product using models plus tools, context, and execution controls.
- A **surface** is where a person uses Codex, such as CLI, IDE integration, desktop app, or hosted/cloud experience.
- A **tool** gives the agent a controlled capability such as shell execution, file editing, browsing, or a connector.

Do not assume a model name automatically implies every product feature.

## 7. Model selection principles

Current model catalogs change. Choose based on:

- Task complexity.
- Coding/reasoning strength.
- Speed.
- Context needs.
- Modality.
- Tool support.
- Price or plan entitlement.

The official [OpenAI models page](https://developers.openai.com/api/docs/models) is the current source for API model details. Codex surfaces may expose a curated selection and reasoning levels. Do not hard-code a handbook recommendation forever.

## 8. Codex execution loop

~~~text
Understand request
   |
Inspect context and instructions
   |
Plan if necessary
   |
Call controlled tools
   |
Observe results
   |
Edit or reason
   |
Validate
   |
Report outcome and limits
~~~

## 9. Codex customization surfaces

According to the current Codex manual:

- Prompt/thread context is for one-off requirements.
- AGENTS.md stores durable repository instructions.
- config.toml stores configuration.
- Skills package reusable workflows.
- Plugins can bundle skills and tools.
- MCP servers or connectors provide controlled external capabilities.
- Automations schedule suitable repeated work.
- Hooks enforce lifecycle behavior.

Use the smallest surface that matches the scope.

## 10. Sandboxing and approvals

The sandbox limits reachable files, commands, or network. Approval policy decides when Codex must ask before acting.

~~~text
Capability requested
        |
Within sandbox?
  yes -> execute
  no  -> approval or denial
        |
        v
Result returned to agent
~~~

Keep permissions narrow and expand only for a concrete need.

## 11. Tools and agents

Tool use changes a response from pure text generation into evidence-backed action. An agent can inspect files, run tests, and revise based on results. Multiple agents can divide independent work, but they consume additional resources and require coordination.

## 12. Current Codex surface map

The official Codex manual describes terminal-first CLI work, editor-attached IDE work, desktop app workflows, and cloud/hosted work. Availability and maturity may depend on platform, account, workspace policy, and release.

~~~text
CLI       -> terminal and local repository
IDE       -> editor-attached workflow
Desktop   -> projects, review, integrated tools
Cloud     -> hosted/offloaded repository tasks
~~~

## 13. Safe beginner workflow

1. Open a trusted repository.
2. Read AGENTS.md and README.
3. Ask for inspection before broad editing.
4. Define scope and acceptance criteria.
5. Use workspace-write sandbox.
6. Approve exceptional actions narrowly.
7. Review diffs.
8. Run checks.
9. Review browser output.
10. Commit only intended changes.

## 14. Limitations

- Models can be wrong.
- Context can omit details.
- Tools can fail.
- Tests can be incomplete.
- Permissions can block or overexpose.
- Current information requires current sources.
- Generated legal, medical, security, or financial content needs qualified review.

## 15. Sources and sanity check

Codex product claims were checked with the current official Codex manual, including [best practices](https://learn.chatgpt.com/docs/best-practices), [configuration](https://learn.chatgpt.com/docs/config-file/config-basic), and [models](https://learn.chatgpt.com/docs/models). The file avoids claiming that model names, context sizes, prices, or surface availability are permanent.

