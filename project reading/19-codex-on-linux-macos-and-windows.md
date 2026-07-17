# 19 - Codex on Linux, macOS, and Windows

> Snapshot date: 17 July 2026. Codex surfaces and platform support evolve; verify current official documentation before installation or enterprise deployment.

## 1. What remains the same

Across platforms, Codex works with a model, project context, tools, permissions, configuration, and human review.

~~~text
Codex workflow
  |
  +-- Linux shell and filesystem
  +-- macOS shell and filesystem
  +-- Windows native PowerShell/filesystem
  +-- Windows WSL Linux environment
~~~

The conceptual loop is the same; command syntax, paths, sandbox implementation, and available desktop surfaces can differ.

## 2. Comparison table

| Topic | Linux | macOS | Windows native | Windows WSL2 |
|---|---|---|---|---|
| Common shell | bash | zsh | PowerShell | bash |
| Path example | /home/ana/site | /Users/ana/site | C:\Users\Ana\site | /home/ana/site |
| Separator | / | / | \ in native tools | / |
| Case sensitivity | Usually yes | Commonly case-insensitive by default | Usually case-insensitive | Yes |
| Permissions | POSIX | POSIX | Windows ACL | Linux/POSIX |
| Script style | shell | shell | PowerShell/batch | shell |

## 3. Command comparisons

| Task | Linux/macOS/WSL | PowerShell |
|---|---|---|
| List files | ls | Get-ChildItem |
| Current folder | pwd | Get-Location |
| Change folder | cd path | Set-Location path |
| Environment variable | export NAME=value | $env:NAME = "value" |
| Remove variable | unset NAME | Remove-Item Env:NAME |
| Find command | which node | Get-Command node |
| Stop foreground process | Ctrl+C | Ctrl+C |

Many cross-platform tools such as git, node, npm, python, and rg use similar subcommands once installed.

## 4. Linux

Advantages:

- Common server and CI environment.
- Strong shell tooling.
- Case-sensitive behavior resembles GitHub Pages hosting.
- Convenient package management.

Challenges:

- Distribution-specific packages.
- Browser libraries may be missing.
- Desktop integration differs across environments.

Playwright may require OS browser dependencies; its official installer can install supported dependencies where appropriate.

## 5. macOS

Advantages:

- Unix-style shell and paths.
- Strong web-development tooling.
- Safari-related testing can be complemented with Playwright WebKit, though WebKit automation is not identical to every physical Safari environment.

Challenges:

- Default filesystems are often case-insensitive.
- Apple Silicon versus Intel architecture may affect native binaries.
- Command-line developer tools may require separate installation.

## 6. Windows native

The current Codex manual describes native Windows desktop workflows using PowerShell and a Windows sandbox. Integrated terminal options can include PowerShell, Command Prompt, Git Bash, or WSL, depending on installation.

Advantages:

- Native Windows filesystem and toolchain.
- Appropriate for .NET and Windows applications.
- Desktop app integration.

Challenges:

- PowerShell syntax differs from bash.
- Backslashes and drive letters.
- Line-ending differences.
- Some documentation assumes Unix commands.
- Case-insensitive development can hide case errors that fail on Pages.

## 7. Windows Subsystem for Linux

WSL2 runs a Linux environment on Windows. It is useful when a project and commands assume Linux.

~~~text
Windows desktop
  |
  +--> native agent + PowerShell + Windows project
  |
  +--> WSL agent + bash + Linux project
~~~

Avoid repeatedly editing the same project through mismatched Windows and Linux paths without understanding performance and permission implications. The current Codex manual states that Windows-native and WSL agent choices are distinct and may require an app restart.

## 8. Path and quoting hazards

Spaces require quoting:

~~~bash
cd "/home/ana/My Project"
~~~

~~~powershell
Set-Location "C:\Users\Ana\My Project"
~~~

Shells interpret variables and special characters differently. Copy commands only when they match the active shell.

## 9. Line endings

- Unix-like systems commonly use LF.
- Windows tools may use CRLF.

Configure Git and editors intentionally. Avoid mass line-ending changes mixed with feature work.

## 10. Case-sensitivity trap

~~~text
Local link: Assets/Logo.png
Actual file: assets/logo.png

May appear to work on case-insensitive filesystem
May fail on Linux/GitHub Pages
~~~

Use exact casing.

## 11. Playwright differences

Playwright supports Chromium, Firefox, and WebKit across supported Windows, Linux, and macOS environments, but system prerequisites vary. Browser emulation is not a physical device. Always consult the current [Playwright installation requirements](https://playwright.dev/docs/intro).

## 12. Choosing an environment

- Choose Linux for parity with common CI/server tooling.
- Choose macOS for Unix workflows plus native Apple development.
- Choose Windows native for Windows-first projects.
- Choose WSL2 when Linux tools are central on a Windows machine.

No platform is universally best. Team skills, deployment target, and project toolchain matter more.

## 13. Cross-platform project practices

- Use relative web paths.
- Avoid filename case mismatches.
- Document commands per shell.
- Commit lockfiles.
- Use editor settings for line endings.
- Run CI on the deployment-like platform.
- Avoid OS-specific scripts when a portable option is reasonable.
- Keep secrets out of shell history.

## 14. Sources and sanity check

Codex-specific platform claims were checked against the current official Codex manual, including the [Windows app](https://learn.chatgpt.com/docs/windows/windows-app) and [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli). This guide does not claim identical feature availability across every platform, account, or Codex surface.

