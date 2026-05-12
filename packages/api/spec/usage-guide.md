<!-- SPDX-License-Identifier: CC-BY-4.0 -->
# L0012 User Guide

Agent-facing guide for authoring L0012 programs. Read this before composing a `create_item` prompt or an `update_item` modification.

## Overview

L0012 is a minimal Graffiticode display dialect with three primitives: `hello` for rendering a greeting string, `image` for rendering an image from a URL, and `theme` for wrapping either in a light or dark visual theme. Input is a natural-language description of a single themed display element; output is an L0012 program whose evaluation renders that element in the hosted React app. L0012 is the right tool when the job is "show a 'hello, X' greeting in dark mode" or "display this image with the light theme applied"; anything richer — styled text, captions, composed layouts, interactive controls, or programmatic logic — belongs in a higher-numbered dialect (L0002 adds the full base language; domain dialects handle specific artifacts).

When composing a request, name the element to render — a hello string or an image URL — and optionally the theme. Patterns: `hello "world"..` (unthemed greeting), `image "https://..."..` (unthemed image), `theme "dark" (hello "world")..` (themed wrapper). The `theme` argument is a string — `"dark"` or `"light"` — not a tag (that's L0002's convention; L0012 takes string names). The themed content goes in parentheses as the second argument. Every L0012 program terminates with `..`.

In scope: one `hello` greeting or one `image`, optionally wrapped in a `theme "dark"` or `theme "light"` call. Out of scope: multiple elements composed together, rich text or LaTeX, captions or alt text, interactive controls, arithmetic or lambdas (use L0002), and any domain-specific artifact (use the corresponding dialect).

## Vocabulary Cues

Say this to get that:

- **hello** — "render a 'hello, X' greeting" → `hello "X"..`.
- **image** — "display the image at URL" → `image "https://..."..`.
- **theme** — "in dark mode / with the light theme" → wrap the body: `theme "dark" (hello "world")..` or `theme "light" (image "https://...")..`. The theme name is a string; parentheses around the body are required.
- **Program terminator** — every L0012 program ends with `..`.

## Example Prompts

- *"Render a hello greeting for 'world' in dark mode."* → `themed_display`
- *"Say hello to 'reader' with the light theme."* → `themed_display`
- *"Display the image at https://example.com/photo.png in dark mode."* → `themed_display`
- *"Show the picture at https://example.com/cat.jpg with light theme."* → `themed_display`
- *"Render a plain hello greeting for 'world' without a theme."* → `rendered_display`
- *"Display the image at https://example.com/photo.png without any theme wrapper."* → `rendered_display`

## Out of Scope

- **Multiple elements or composition** — L0012 emits a single `hello` or `image`, optionally themed.
- **Styled or LaTeX-rendered text** — plain strings only.
- **Interactive controls** — no buttons, inputs, or state.
- **Programmatic logic** — arithmetic, lists, lambdas belong in L0002.
- **Domain-specific artifacts** — assessments, spreadsheets, board content, etc. belong in the corresponding domain dialect.
- **Custom themes beyond dark / light** — only those two names are supported.
