# Handling Forms and Input State with useState

## Controlled Component
[React controls elements by State(useState)]
* Controlled component in React where form data is handled by the React Component State

* The input value is bould to a state variable and updates via an onChange event handler.

* The component actively controls the form fileds and data is managed entirely by React

* Advantages :
    * Easier to validate and manipulate form data.  
    * Provides real-time updates.  
    * Good for more complex form logic.

```js
    const [username, setUsername] = useState('');

    ....

    <input type="text" value={username} 
    onChange = {(e) => setUsername(e.target.value) }/>
```

## Uncontrolled Component
[DOM controls elements] 
* An Uncontrolled component uses the DOM itself to manage form data, not the React state.  
* The input's value is accessed only when needed, often through refs or event.target.value in a form submit handler.  
* React doesnot manage or track the form data until the form is submitted.

* Advantages
    * Simple for quick forms that dont need real time updates.   
    * Better for legacyforms or when  migrating older HTML

```js
    <input type="text" value="username" />
```
