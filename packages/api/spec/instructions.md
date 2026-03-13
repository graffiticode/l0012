<!-- SPDX-License-Identifier: CC-BY-4.0 -->
# Dialect L0012 Specific Instructions

L0012 is a Graffiticode dialect for displaying text and images with theme support.

## L0012 Specific Guidelines

- Use `hello` to display text output: `hello "Hello, world!"..`
- Use `image` to display an image from a URL
- Use `theme` to apply a display theme to content: `theme "dark" (hello "world")..`
- Keep programs simple and focused on display

## Example Patterns

- Greeting: `hello "world"..`
- Display image: `image "https://example.com/photo.png"..`
- Themed greeting: `theme "dark" (hello "world")..`
