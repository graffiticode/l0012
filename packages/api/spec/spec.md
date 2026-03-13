<!-- SPDX-License-Identifier: CC-BY-4.0 -->
# L0012 Vocabulary

This specification documents dialect-specific functions available in the
**L0012** language of Graffiticode. These functions extend the core language
with display and theming functionality.

The core language specification including the definition of its syntax,
semantics and base library can be found here:
[Graffiticode Language Specification](./graffiticode-language-spec.html)

## Functions

| Function | Signature | Description |
| :------- | :-------- | :---------- |
| `hello` | `<string: string>` | Renders a hello message |
| `image` | `<string: record>` | Displays an image from a URL |
| `theme` | `<[dark\|light] record: record>` | Selects a display theme |

### hello

Renders a hello message that includes the given string.

```
hello "world"  | returns "hello, world!"
```

### image

Displays an image from the given URL string.

```
image "https://example.com/photo.png"
```

### theme

Selects a display theme for the given content. The first argument specifies
the theme name (e.g. `"dark"` or `"light"`), and the second argument is the
content to render with that theme.

```
theme "dark" (hello "world")
```

## Program Examples

```
hello "world"..
```

```
theme "dark" (hello "world")..
```
