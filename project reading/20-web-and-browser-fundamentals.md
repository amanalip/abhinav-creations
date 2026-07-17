# 20 - Web and Browser Fundamentals

## 1. Internet versus Web

The Internet is the underlying network of connected systems. The Web is a service built on it using URLs, HTTP, browsers, and web servers.

## 2. Opening a page

~~~text
User enters URL
   |
Browser parses address
   |
DNS resolves domain to network address
   |
HTTPS connection is established
   |
Browser sends HTTP request
   |
Server returns status, headers, and HTML
   |
Browser discovers CSS, JS, images
   |
Additional requests
   |
DOM + styles -> layout -> paint -> interaction
~~~

## 3. URL anatomy

~~~text
https://example.com/studio-spaces.html#podcast-lounge
\___/   \_________/ \________________/ \_____________/
scheme     host            path              fragment
~~~

The fragment identifies a location inside the document and is not normally sent as part of the server request.

## 4. DNS

Domain Name System translates a human-readable domain into routing information. DNS is like an address directory, not the website itself.

## 5. HTTP

HTTP is a request/response protocol.

~~~text
Request:  GET /index.html
Response: 200 OK + headers + HTML bytes
~~~

Common status meanings:

- 200: successful response.
- 301/308: permanent redirect.
- 302/307: temporary redirect.
- 404: resource not found.
- 500: server error.

HTTPS protects data in transit with encryption and authenticates the server certificate; it does not guarantee that every page claim is trustworthy.

## 6. Browser rendering

1. HTML becomes the DOM.
2. CSS rules become a style representation.
3. Browser calculates layout.
4. Browser paints pixels.
5. JavaScript may change state and trigger new work.

~~~text
HTML -> DOM --------\
                     +--> render tree -> layout -> paint -> composite
CSS  -> style rules -/
JavaScript can update DOM/styles
~~~

## 7. Storage

- Cache stores reusable resources.
- localStorage stores small origin-specific string values; this site uses it for theme preference.
- Cookies can be sent to a server; this site does not need them for current features.
- Session storage normally lasts for a tab session.

Storage can be blocked or cleared, so optional preferences need fallbacks.

## 8. Origin and security

An origin combines scheme, host, and port. Browsers restrict cross-origin access to protect visitors. Opening through file:// is not the same as using a local HTTP origin, which is why the local server is recommended.

## 9. Static versus dynamic

| Static | Dynamic/backend |
|---|---|
| Stored files | Server generates or processes |
| Simple hosting | Application runtime |
| Public browser code | Can protect server secrets |
| Fits this site | Needed for custom private processing |

## 10. Browser mind map

~~~text
Browser
|
+-- Networking: DNS, HTTP, cache
+-- Parsing: HTML, CSS
+-- Rendering: layout, paint
+-- Runtime: JavaScript, events
+-- State: storage, history, focus
+-- Security: origin, permissions, HTTPS
+-- Access: accessibility tree, keyboard
~~~

## 11. Sanity check and source

This is a simplified learning model; browser engines optimize many stages. For standards-oriented beginner references, use [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work).

