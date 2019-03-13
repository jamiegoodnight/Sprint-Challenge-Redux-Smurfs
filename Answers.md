
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

I think of actions as an application's... well, actions! They respond to events move data across the application. 

I think of reducers as the application's end points. Data goes to the reducer to be transformed and resolved. 

I think of the store as the location of the data the entire application will need resides. 

Another way of thinking about these things is that the actions are a grocery list,and the reducers take the list into the store so it knows what it needs to take home (to our application).



2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used across the entire application, such an array of items on an app that displays and manipulates those items. Component state is arguably less important, and the entire application is less dependent upon it. It might be state that saves inputs on a form component. 



3.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 My experience with and understanding of thunk is that it allows our action creators to interact with remote data, retrieving and manipulating it. I believe a more literal (certainly less helpful for me) way to describe it is to call it a function that returns a function. 


