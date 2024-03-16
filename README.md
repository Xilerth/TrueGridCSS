# Grid System README

![Grid System Logo](demo/assets/logo-light.png)

## Introduction

This is a simple grid system that you can use to create a responsive layout for your website. It's a different approach to the grid system that you can find in other grid systems like Bootstrap.

## How to Use

You can use the grid system by adding the class `tg-grid` to the container and then add the class `tg-grid-*` to the children. The `*` represents the number of columns that you want to use, ranging from 1 to 12 columns.

## Responsive

The grid system is responsive. You can use the following classes to create a responsive layout:

- `tg-grid-sm-*`
- `tg-grid-m-*`
- `tg-grid-l-*`
- `tg-grid-xl-*`

## Example

This is an example of how you can use the grid system to create a responsive layout:

```html
<div
  class="tg-grid-3-3-3-3 tg-grid-sm-12 tg-grid-m-6-6 tg-grid-l-4-4-4 tg-grid-xl-3-3-3-3"
>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
---

Feel free to experiment and create amazing layouts with this grid system!
