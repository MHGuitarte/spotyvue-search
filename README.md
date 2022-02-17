# Introduction

At Empathy.co, we strive to deliver the best search experiences to our customers. As a Frontend Engineer, you are
expected to lead the way by combining creativity and technical skills. The goal of this exercise is to get an
understanding of how you apply those skills to one of our most common challenges: crafting a search interface.

Once finished, the code turned in will be the starting point of a conversation with our team. We would like to both
understand how you approached this exercise and get a glimpse of how collaborating with you in a real problem
would feel like.

# Description

For the exercise, we'd like you to build a web application that allows a user to search for artists, albums and tracks
on the Spotify catalog. There are no other requirements in terms of features as well as no requirements in terms of
aesthetics, but you are encouraged to be creative. You can also add any additional feature you desire, although it is
not mandatory.

In order to evaluate your component-oriented development skills, we’d like you to use your framework of choice to build
the UI, although we mostly use Vue in our products and appreciate the effort if you also choose it. We'd also like you
to pick technologies that help us get clear signal on your frontend fundamentals. For that reason, we recommend that you
stick Typescript, ES6 and vanilla CSS. CSS frameworks and libraries such as Bootstrap are NOT allowed
(CSS preprocessors like SASS, LESS etc. are not only allowed but encouraged).

You can use the Spotify Web API to fetch all the necessary data.

### Authentication method

We recommend using the client credentials flow for this exercise, as it limits the effort spent on authorization,
but feel free to use any other [available on Spotify's docs](https://developer.spotify.com/documentation/general/guides/authorization-guide/).

# Evaluation

This exercise will be evaluated based on 4 criteria:


#### Code quality

There are many views on what good code is. Ours is that good code is code that is easy to change. That means loosely
coupled, good abstractions, thoughtful naming and well tested.

#### Performance

Performance is critical for a good user experience. If we had to choose between code readability and marginal
performance gains with cryptic code, we would go for the readability. But still we would like to see you taking
performance into account and justifying this performance decisions.

#### Design

We take pride in creating beautiful experiences, and you should strive to do the same. Equally important, we really care
about the user experience and accessibility.

#### Process

Solving the problem is just half of the way, the other half is how to solve it. We truly believe that small incremental
steps are the way to go. If possible, we would like to see just that through your commit history.

# Checkpoints

Here are some of the things we expect from a good quality take-home exercise, these checks are the minimum we expect for
the different seniority levels inside.

Please take into account the seniority level you are postulating to, **not reaching the minimum requirements for the
level will result in a failed take-home** and the selection process will end.

### Software Engineer I
- [ ] No particular requirements, just show us your skills.

### Software Engineer II
- [ ] Testing:
    - [ ] Unit tests.
- [ ] Component architecture:
    - [ ] Component composition.
    - [ ] Use of props and events.
- [ ] CSS:
    - [ ] If you use a CSS pre-processor show use of mixins or functions.

### Senior Software Engineer
- [ ] Testing:
    - [ ] Unit tests.
    - [ ] E2E tests.
- [ ] Component architecture:
    - [ ] Component composition.
    - [ ] Use of props and events.
    - [ ] Business logic shared between components.
    - [ ] Reusable components.
    - [ ] Use of design patterns.
- [ ] Focus on code quality and performance:
    - [ ] Limit the amount of requests made when typing a query.
    - [ ] Create performant code.
- [ ] CSS:
    - [ ] If you use a CSS pre-processor show use of mixins or functions.
    - [ ] Class naming system, most of our projects use BEM but you can use what you feel most comfortable with.
    - [ ] Advanced use of CSS (animations, flex, grid where needed).
- [ ] Generate at least 2 views with routing.
