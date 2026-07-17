# 08 - Agentic Website Development Guide

## 1. What agentic development means

Agentic development uses an AI agent that can perform a sequence of project actions: inspect, reason, plan, edit, run checks, and report. The human remains responsible for intent, permissions, business truth, risk decisions, and final approval.

~~~text
Human: goal + constraints + approvals
                 |
                 v
Agent: inspect -> plan -> edit -> verify -> report
                 |
                 v
Human: review -> accept, revise, or reject
~~~

## 2. Responsibilities

| Human owner | Agent |
|---|---|
| Supplies approved business facts | Reads source material |
| Decides priorities | Identifies affected code |
| Grants limited authority | Implements within scope |
| Reviews brand and UX | Runs repeatable checks |
| Approves publication | Reports evidence and limits |

An agent should never invent an address, price, policy, testimonial, legal promise, or availability.

## 3. Bootstrap sequence

1. Put the source outline in an accessible location.
2. Create README, project plan, checklist, and active AGENTS.md.
3. Inventory files and dirty Git state.
4. Confirm hosting and privacy boundaries.
5. Choose the smallest appropriate stack.
6. Define page map and acceptance criteria.
7. Build shared foundation.
8. Implement one page group at a time.
9. Test and document each group.
10. Obtain launch approval.

## 4. Agent task contract

Each task should state:

- Objective.
- Files or pages in scope.
- Prohibited changes.
- Source of truth.
- Expected behavior.
- Required tests.
- Documentation updates.
- Whether external publication is authorized.

## 5. Single versus multiple agents

Multiple agents help when independent work can proceed without editing the same files. They add coordination risk when tasks overlap.

~~~text
Can subtasks run independently?
  no  -> one agent
  yes
   |
Do they edit overlapping files?
  yes -> usually sequence work
  no  -> parallel work may help
~~~

For a small static site, one focused agent is often simpler.

## 6. Failure and recovery

If a test fails:

1. Preserve the failure evidence.
2. Identify the smallest reproduction.
3. Inspect relevant code and console output.
4. Fix the cause, not merely the screenshot.
5. Rerun the exact failing flow.
6. Run nearby regression checks.
7. Document the lesson.

## 7. Completion definition

A feature is complete only when:

- Source change exists.
- Acceptance behavior is demonstrated.
- Relevant accessibility states work.
- Narrow and wide layouts were checked.
- No owner-dependent claim was invented.
- Sitemap and documentation match.
- Remaining limitations are explicit.

## 8. Sanity check

This guide describes a governance model, not autonomous authority. Agents must operate inside current tool, sandbox, repository, and user permissions.

