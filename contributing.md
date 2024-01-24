# contributing

## purpose
The Cookbook has one primary purpose: to serve as a handbook for common problems that beginners may have.
It is **not** meant to be a replacement for [Game Manual 0](https://gm0.org/), which is much more comprehensive and tailored to informing.
The cook book is primarily for questions and answers, although some guides that are more specific are permitted. 

## how can i contribute?
If you have the technical expertise to contribute, take a look at the next section.
If not, but you really want a section or question to be answered/added, make a [GitHub issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue).

## recipe making

Making a recipe is actually quite simple, all you need is a working knowledge of Git.

1. Make a [**fork**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) 
of the [original repository](https://github.com/dr-hextanium/cookbook).

2. Add your content under `src`. Entries should:
   - be one Markdown (`.md`) file
     - have the `snake_case` version of the title as their file name
     - store any media (images, audios, etc.) they may have under a subfolder titled their filename in `src/static/`
   - have an appropriate `SUMMARY.md` entry
   - answer a question, address a common misconception, provide a solution for frequently asked questions
   - be structured thematically
      - begin with an h1 for the title (`#`)
      - have an h2 "Ingredients" section for requirements, if required
      - have a "last updated" field.

3. Add yourself to `contributors.md`, you deserve it :)

4. Commit and push your changes to your fork.
   - Make sure your commits abide by the (Conventional Commits)[https://www.conventionalcommits.org/en/v1.0.0/] standard.

5. Submit a pull request.
   - We'll have a little discussion on things you may have to change.
   - After everything is up to par, you will be accepted.

6. Star the repo <3 and live in peace knowing that you just helped somehow who had your exact problem.

[This recipe](./src/integrating_a_custom_PIDF_controller.md) by Michael is a very well formatted recipe, and can serve as a reference/template.

## cookbook rendering
The Cookbook is powered by [`mdbook`](https://rust-lang.github.io/mdBook/).
To render the cookbook itself, take a look at their [command line instructions](https://rust-lang.github.io/mdBook/cli/index.html).

Then, simply:
```
$ cd path/to/cookbook
$ mdbook serve --open
```

Now, you will be able to view the book and your changes in real time, without reloading.