# 11 - GitHub Pages and Deployment

## 1. Hosting and deployment

Hosting is where public website files are served. Deployment is the act of placing a verified version on that host.

## 2. Current workflow

The repository's .github/workflows/static.yml runs:

- On pushes to main.
- When manually started from GitHub Actions.

It grants read access to content and the Pages identity/deployment permissions, then:

~~~text
Checkout -> Configure Pages -> Upload repository artifact -> Deploy Pages
~~~

The concurrency setting does not cancel an in-progress deployment.

## 3. No build step

The workflow uploads the repository path directly. It does not run Jekyll, npm, or a custom compiler. This matches the direct static files.

## 4. Publication procedure

1. Confirm Git status and intended diff.
2. Run local checks.
3. Preview locally.
4. Obtain approvals.
5. Commit with a focused message.
6. Push or merge to main.
7. Open the Actions page.
8. Wait for deployment success.
9. Open the published address.
10. Run a live smoke test.

Pushing and successful publication are separate events.

## 5. What Pages can host here

- HTML.
- CSS.
- Browser JavaScript.
- Images and downloadable static documents.
- Client-side links to approved external providers.

It cannot safely provide a custom secret-bearing backend merely by adding JavaScript.

## 6. Custom domain primer

A custom domain requires:

- Domain ownership.
- DNS records pointing to GitHub Pages as officially instructed.
- Pages repository configuration.
- HTTPS provisioning.
- Testing both apex and www behavior if used.

DNS changes can take time. Use current GitHub documentation during setup because platform instructions can change.

## 7. Troubleshooting

### Workflow failed

Inspect the failed step and its log. Confirm Actions and Pages permissions and workflow syntax.

### Deployment succeeded but old content appears

- Confirm the deployed commit.
- Hard-refresh or test a private window.
- Check whether a cached asset is being reused.
- Confirm the changed file was committed.

### Page works locally but is missing online

- Check filename case.
- Check relative link path.
- Confirm deployment completed.
- Remember that Linux hosting is case-sensitive.

### Wrong base path

Project sites may be served below a repository path. Relative links are generally safer for this direct multi-page design than root-absolute assumptions.

## 8. Rollback concept

Prefer a new Git commit that reverses the faulty change, then deploy it. Preserve history. Do not casually rewrite shared history or use destructive reset commands.

## 9. Sanity check

Workflow claims were checked against static.yml. Platform settings and custom-domain steps should be rechecked against current official GitHub documentation at the time of use.

