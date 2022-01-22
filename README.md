# **FullStack Developer Task**


## Front-End

- I used `react-hook-form` with `yup` because it isolates the component and avoids the other components from re-rending.
- I used `yup` in `react-hook-form` to validate the inputs in an easy way and clean, less code.
- I used `React Redux` specially `Redux persist`, because it allows you to transform your store depending on the version you want for the app. Moreover, the last data fetched will still exist in the store saved in localStorage.
- For Styling, I used `Vanilla CSS`.
- `React JS` is Loosely typed, so it doesn't have type checks that's why I used `TypeScript` to check the type for each of variables, props or returned value from functions.
- Because I used a validation input, you won't be able to call the API until you typed at least three characters. Furthermore, I used `Lodash` for that because the input is a onChange function, which means that the API will be executed each time a character is added. To avoid this, I used Lodash to give the user more time to finish typing to ensure that the data is typed correctly and fetched only once. 
- I used anchor tag `<a>` instead of `<Link>` tag to navigate for a specific GitHub profile ,because <link> it used in react-router-dom, so you can only navigate inside the dom only(inside the project), but `<a>` provides you to navigate outside project.
- UI `responsive` in mobile with `width <=768px`

## Back-End

- I used `express generator` to create new Node JS project, to save more time and easy to read, write and avoid missing some important dependencies
- I used `Redis` to avoid calling the API every time you enter data. To accomplish this, I created a middleware in the middleware folder that checks if the API call has already been retrieved, eliminating the need to call the API again. All we need to do is pass through the middleware and search for a specific key in redis before returning the value. Furthermore, redis is faster than calling the API directly.
- To get the `user` information, first call the API to get all the users with this name, and then do another fetch with 'item.url' from the first response to get all the users' information, which is why I used 'nested fetch'.
- I used `Express JS`, because it is lightweight and helps to organize web applications on the server-side into a more organized MVC architecture.
- I faced a problem with `API limit rate request`. To handle this type of error, It's not actually an error put to avoid any not necessary or exact information that the user needs, by doing a condition `typeof final.message !== 'undefined'`.
- I did `swagger` for API testing and documentation.