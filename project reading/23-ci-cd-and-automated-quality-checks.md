# 23 - CI/CD and Automated Quality Checks

## 1. Definitions

- **Continuous Integration (CI):** automatically checks integrated changes.
- **Continuous Delivery:** keeps a verified change ready for controlled release.
- **Continuous Deployment:** automatically releases every qualifying change.

The acronym does not guarantee quality; the checks and controls determine quality.

## 2. Current versus future

Current repository:

~~~text
Push to main -> GitHub Actions -> deploy static files to Pages
~~~

Suggested future:

~~~text
Pull request
  +--> syntax
  +--> HTML/link checks
  +--> Playwright
  +--> accessibility basics
  |
  v
Review and merge
  |
  v
Existing Pages deployment
  |
  v
Live smoke test
~~~

The future pipeline is not implemented.

## 3. GitHub Actions anatomy

A workflow is a YAML file under .github/workflows. It has:

- Events/triggers.
- Jobs.
- Runner environment.
- Ordered steps.
- Commands or reusable actions.
- Permissions.
- Optional artifacts, environments, and concurrency.

See [official GitHub workflow concepts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows).

## 4. Quality layers

Run cheap, deterministic checks early:

1. Formatting and whitespace.
2. Syntax.
3. HTML and link validation.
4. Unit checks if code grows.
5. Browser smoke tests.
6. Broader cross-browser tests.
7. Deployment.
8. Live smoke test.

## 5. Artifacts and evidence

Artifacts can include reports, screenshots, or traces. They aid diagnosis but may expose URLs, source, credentials, or test data. Apply access controls and limited retention.

## 6. Secrets

- Store secrets in the platform's secret store.
- Do not print them.
- Do not expose them to untrusted fork workflows.
- Use minimum permissions.
- Prefer no secret at all for static public-page tests.

## 7. Branch protection

Suggested controls:

- Pull request required.
- Named checks required.
- Review required for sensitive paths.
- Conversation resolution.
- No direct force pushes.

Controls must match team size and recovery needs.

## 8. Failure handling

~~~text
Check fails
  |
Product failure? -> fix product
Test failure?    -> fix test
Environment?     -> fix runner/config
Flaky?           -> reproduce and remove instability
  |
Rerun and preserve evidence
~~~

Do not weaken a valid assertion merely to make CI green.

## 9. Suggested future workflows

~~~text
.github/workflows/
  quality.yml       pull-request checks
  playwright.yml    browser suite if separated
  static.yml        current Pages deployment
~~~

This is an architectural suggestion, not a request to create them now.

## 10. Sanity check

The guide clearly distinguishes the one current deployment workflow from proposed CI checks. It does not claim branch protection or Playwright CI is configured.

