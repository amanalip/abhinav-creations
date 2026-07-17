# 14 - Security, Privacy, and Architectural Limitations

## 1. Static does not mean risk-free

A static site has a smaller server attack surface because it has no custom backend, database, or login. It can still expose secrets, link to malicious services, collect data through third parties, load compromised scripts, or publish incorrect private information.

## 2. Public-repository rule

Assume every committed value can become public and remain in Git history.

Never commit:

- Passwords.
- Private API keys.
- Payment secrets.
- Personal identification documents.
- Unapproved private contact data.
- Private contracts.
- Session tokens.

Deleting a secret later may not remove it from history. Revoke exposed credentials immediately.

## 3. Browser-code boundary

~~~text
Visitor can download and inspect
HTML + CSS + JavaScript
            |
            v
No trusted secret or private business rule belongs here
~~~

Obfuscation is not security.

## 4. Future forms, booking, and payments

Use a suitable external provider or a secure backend that:

- Uses HTTPS.
- Protects credentials server-side.
- Validates input.
- Provides spam and abuse controls.
- Defines retention and deletion.
- Supports applicable privacy obligations.
- Has a tested failure and confirmation flow.

The current website intentionally does not collect this information.

## 5. Third-party risks

Before embedding a map, video, analytics script, form, or widget, review:

- Data transmitted.
- Cookies or tracking.
- Privacy disclosure and consent.
- Content Security Policy compatibility.
- Performance.
- Accessibility.
- Provider availability.
- Exit and data-export options.

## 6. Privacy minimization

Collect only information required for a defined purpose. Tell visitors what is collected, why, who receives it, how long it is kept, and how to exercise applicable rights. Obtain qualified review for jurisdiction-specific obligations.

## 7. Current limitations

- No secure private-data processing.
- No authentication or authorization.
- No server validation.
- No custom payment or booking engine.
- No website-wide search.
- No formal security audit claimed.
- No formal accessibility certification claimed.
- No automated cross-browser CI suite.
- Legal and business content remains pending where marked.

## 8. Basic security checklist

- [ ] Git history checked for secrets before public release.
- [ ] Repository access uses individual accounts and strong authentication.
- [ ] GitHub Pages enforces HTTPS.
- [ ] External links and providers reviewed.
- [ ] Dependencies, if later introduced, are inventoried and updated.
- [ ] Form and booking abuse cases tested.
- [ ] Privacy policy matches actual collection.
- [ ] Backups and rollback ownership defined.
- [ ] Security contact route established.

## 9. Sanity check

This document provides general engineering guidance, not legal or security certification. Current public behavior is described conservatively and future integrations are conditional.

