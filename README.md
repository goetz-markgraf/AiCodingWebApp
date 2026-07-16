# AI assisted coding repository

This repository contains a project that can be used in talks to demonstrate
how AI can be used to assist developers in their daily tasks.

## Used in Demo

This project in combination with https://github.com/goetz-markgraf/AiCodingWebApp
is used in the talk "AI assisted coding" to demonstrate how AI can be used to
assist developers in their daily tasks.

It consists of three parts with prepared prompts. Always use "gpt-4.1",
it is the fastest model.

### Weather Client

1. Start by creating a file `src/api/weatherClient.ts'
2. Open Copilot in Edit mode.
3. Use this prompt:
   ```
    add a function that calls this API endpoint:
    localhost:8000/weather/Nuremburg
    Use fetch API.

    The last part if the endpoint is a name of a location. It should be the parameter for the function.

    The return JSON looks like this:
    `{"location":"Nuremburg","temperature":16.664558,"description":"Cloudy"}`

    Create a data structure for this. This should be the return value of the function.
   ```
4. Check that the used URL is correct.
5. Create a hook file `src/hooks/useWeather.ts`.
6. Open Copilot in Edit mode.
7. Use this prompt:
   ```
   Create a React Hook that uses this api, declared in weatherClient.ts.

   Take the location as the parameter.

   If the location is an empty string, return undefined.
   ```
8. Check the hooks code.
9. Open the file `src/components/Weather.tsx`.
10. Open Copilot in Edit mode.
11. Use this prompt:
    ```
    In `Weather.tsx` add the `useLocation` hook to display the weather at the entered location. If the returned values are `undefined` display a hint to enter a location instead.
    ```

The component should now display the weather for the entered location.

Possible improvements:

```
Format the temperature with one digit after the decimal point.
```

```
add a button that starts the hook so that the endpoint is not queried by every key stroke.
```

```
Style this component
```

### Agentic: Prettier

Close all open windows and open copilot in Agent mode.

Use this prompt:

```
I want to include prettier in the project. Set the configuration to sane defaults. Make sure that prettier adds missing ; at the end of the line if needed.
Use npm.
```

Use 'copilot -> explain' to understand the settings in `prettierrc.json`.

### Agentic: ChatGPT Client

Close all open windows and open copilot in Agent mode.

Use this prompt:

```
I want to have a simple component, that asks questions to an OpenAI compatible LLM. The URL is https://router.eu.requesty.ai/v1. You can assume that I have the env variable VITE_REQUESTY_API_KEY set.
Create an API function that calls the OpenAI Api.
Use the model tensorx/glm-5.2.
Create a React Hook that uses the API.
Change the component in `Wisdom.tsx` to include an input field and a button. If the user presses the button, the content of the input field is sent to the hook. Its return value is displayed beneath the input field.
Don't use axios.
```

It should create all files **but** it tries to use the environment variable that is not possible
in a client component.

Try to just paste the error to the prompt:

```
OPENAI_API_KEY is not set
```

It will explain how to move the variable to the client which is a huge security risk.

Try to fix it with this prompt:

```
There is a problem with the api. We are using React so the component is not running on the server but on the client.
I don't want to use next.js.
Setup a simple web server using express in the same project that proxies the chatGPT api using the env variable.
Run the proxy server on port 3001.
Use CORS
```

It might work or it might not.
