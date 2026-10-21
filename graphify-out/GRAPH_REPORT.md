# Graph Report - obscura-Bulk-D  (2026-10-21)

## Corpus Check
- 12 files · ~7,575 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .woff2 5, (none) 2, .jason 2)

## Summary
- 53 nodes · 56 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9dd2ee07`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dashboard/src/index.js
- dashboard/package.json
- dependencies
- landing/package.json
- scripts
- Obscura Dashboard
- vercel.json
- dashboard/vercel.json
- DEPLOY_LANDING.sh
- README.md

## God Nodes (most connected - your core abstractions)
1. `react` - 5 edges
2. `scripts` - 4 edges
3. `lucide-react` - 3 edges
4. `react-dom` - 3 edges
5. `browserslist` - 3 edges
6. `App()` - 3 edges
7. `ObscuraDashboard()` - 3 edges
8. `Obscura Dashboard` - 3 edges
9. `eslintConfig` - 2 edges
10. `extends` - 2 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ObscuraDashboard()`  [EXTRACTED]
  src/App.js → src/ObscuraDashboard.js

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "dashboard/src/index.js"
Cohesion: 0.26
Nodes (8): Dashboard(), root, lucide-react, react, react-dom, App(), root, ObscuraDashboard()

### Community 1 - "dashboard/package.json"
Cohesion: 0.18
Nodes (10): browserslist, development, production, eslintConfig, extends, name, private, version (+2 more)

### Community 2 - "dependencies"
Cohesion: 0.40
Nodes (5): dependencies, lucide-react, react, react-dom, react-scripts

### Community 3 - "landing/package.json"
Cohesion: 0.40
Nodes (4): description, name, private, version

### Community 4 - "scripts"
Cohesion: 0.50
Nodes (4): scripts, build, start, test

### Community 5 - "Obscura Dashboard"
Cohesion: 0.50
Nodes (3): Deploy, Features, Obscura Dashboard

### Community 6 - "vercel.json"
Cohesion: 0.50
Nodes (3): buildCommand, headers, outputDirectory

## Knowledge Gaps
- **2 isolated node(s):** `react-scripts`, `react-app`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 32 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `dashboard/src/index.js` to `dashboard/package.json`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `react-scripts`, `react-app` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `dependencies` connect `dependencies` to `dashboard/package.json`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `dashboard/package.json`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._