# L0012

L0012 is the **degenerate language** in the Graffiticode ecosystem. It provides idempotent mapping of raw data values to task IDs.

## What it does

L0012 maps arbitrary data values to task IDs idempotently - the same input always produces the same ID. It performs no computation or transformation; it simply stores values and returns stable identifiers.

**Store**: `value` → L0012 → `task ID`
**Retrieve**: `task ID` → `/data` endpoint → `value`

## Examples

```
10          → id1
{foo: 20}   → id2
"hello"     → id3
```

Submitting the same value twice returns the same task ID - no duplicates are created.

## Purpose

All Graffiticode languages are idempotent by design. L0012 is the minimal case - the identity function of the ecosystem. Use it when you need to:

- Store raw data values and get stable IDs for later retrieval
- Reference data consistently across the system
- Deduplicate identical values

## Form view

The form view simply displays the stored value as formatted JSON for inspection. Unlike L0011 (which renders interactive property editors), L0012's form view has no runtime purpose - it's purely for viewing the data.

## Architecture

- **packages/api** - Node.js/Express backend (port 50012)
- **packages/app** - React/TypeScript frontend for viewing stored data

## Getting started

```bash
# Install dependencies
npm install

# Start the API server
npm start
```

The API server runs on port 50012 by default.
