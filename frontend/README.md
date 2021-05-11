# Frontend

always use interface for public API's definition when authoring a library or 3rd party ambient type definitions, as this allows a consumer to extend them via declaration merging if some definitions are missing.

consider using type for your React Component Props and State, for consistency and because it is more constrained.

[^1]: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

### Why use React.FC

`React.FC<Props>`

- No need to mention return type `JSX.Element`
- `props.children` are already accomodated

- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) with useReducer Hook

- [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
- React.SyntheticEvent
- [uselocalstorage custom Hook](https://react-typescript-cheatsheet.netlify.app/docs/basic/useful-hooks#uselocalstorage)
- https://dev.to/hellomuthu23/how-to-use-usereducer-and-usecontext-hooks-with-typescript-in-react-14d1

## typescript

- Create new types/interfaces from older ones using extend or union
- ts complains about argument not passed despite default value?
- How best to determine if an argument is not sent to the TS function?
