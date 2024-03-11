---
title: Goodbye React UseEffect
date: 10-05-2023
---

Based on the content in 

https://www.youtube.com/watch?v=bGzanfKVFeU

Things to look out for to hint that useEffect is the wrong paradigm

- a set state in the useEffect
- For fire and forget effects can just run it outside of the component
- For user actions that should be handled in an event handler not an effect

Alternative Hooks

# Scenarios

## Derived state

Something like you have a list of items and need to calculate something from them

Just use something like a `.map` function or etc. and only if it is really expensive switch it to a `useMemo`

## Communicating with Parent

- Could be introducing additional re-renders
- Move the effects closer to the state change - either a function or an event handler

## Subscribe to external stores

- `useSyncExternalStore` may be a better idea
- a hint is if you are using a `setState`

## Fetch Data

- `renderAsYouFetch` may be a better idea
- Again `setState` is a hint of this

Alternatives

- Whatever the framework provides
- NextJS Server Side Props or server side components
- `useSWR`
- `use` - fetch a post and automatically suspend component

Fetching in useEffect has a lot of problems

- Race conditions
- No instant back button
- No initial HTML content
- Chasing waterfalls - loading dependencies

## Global Singletons

- Just call it outside of the component

## User Events

- `useReducer`

# Supplementary Materials

https://react.dev/learn/you-might-not-need-an-effect

https://react.dev/reference/react/use
