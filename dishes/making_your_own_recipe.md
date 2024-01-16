---
title: Making your own recipe
tags: meta, contributing
chef: hextanium - 4017
---

# Making your own recipe

The Cookbook could not exist without contributions from the community.

This recipe will show you how to actually make your own recipe!

If you open the source of this file, you'll notice the header at the very top:

> ```
> ---
> title: Making your own recipe
> tags: meta, contributing
> chef: hextanium - 4017
> ---
> ```

A recipe must have:
- a header with a `title` to describe the issue
- `tags` to categorize and generalize the issue
- the `chef` who authored it :)

Additionally, a recipe can assign itself a `slug`, which is, by default, the file name.

For easier indexing + searching, the title should be put in simple present tense.

Here's an example of a potential recipe:

```
---
title: BHI260AP IMU: "Failed to retrieve valid quaternion from IMU. Returning the identity quaternion."
tags: imu, bhi260ap
chef: hextanium - 4017
slug: bhi260ap_imu_failed_retrieve
---

// ...content
```

## TODO: how to implement custom media such as images and videos?
- probably folders for content with media with references its own scope?
- folder names should take the place of the slug default, and its primary content should be in `content.md`?

## TODO: reference `contributing.md` afterwards, need to actually write that

## TODO: make title duplication irrelevant