# hydra

A Sass-based, utility-first CSS framework—built two years before Tailwind—featuring modular variables, functions, and components to accelerate responsive UI development.

---

Hydra is a lightweight, Sass-powered utility-first CSS framework that I began two years before Tailwind CSS officially launched. Its goal is to offer a familiar utility-driven workflow—only built entirely in Sass—so you can:

* **Quickly compose layouts** using pre-defined spacing, typography, and color utilities.
* **Customize globally** by tweaking a single set of variables (colors, breakpoints, font sizes, etc.).
* **Leverage modular components** (buttons, cards, forms, etc.) that follow a consistent naming convention.
* **Extend functionality** through simple Sass functions and mixins, allowing you to craft your own utilities without reinventing the wheel.
* **Keep CSS output small** by using only the utilities and components you actually need, thanks to Hydra’s modular folder structure (`variables/`, `utilities/`, `components/`, etc.).

Although it never reached an official “v1.0” release, Hydra represents a proof-of-concept for a utility-first approach in pure Sass—well before Tailwind became popular. If you’re curious about how a Sass-only framework can mirror many of Tailwind’s ideas (customizable config, responsive helpers, component patterns), feel free to browse the source folders (`_hydra-components.scss`, `hydra.scss`, `hydra.min.css`) and experiment.

> **Note:** This repository is largely experimental/inactive, but the core architecture can still serve as a starting point if you’d like to build your own utility-first style system in Sass.

