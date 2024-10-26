# State management  using Redux

## useState     - a compoennt
## useContext   - share data between components


# Redux
its not part of react library , we have to install
store - src 
no - re-render
provides tools - tracking , debugging

## How Redux Works
store {} - The central place where all your data lives.
actions (object) {} - messages or instructions thay say what needs to change in the store.
reducers - pure function - function, that update the store based on the action received.
component - UI Element that read data from the store and can send actions to update it(dispatching)


## Installation 
```bash
npm install redux
```

# Understanding redux