# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

It is unsafe to make requests to a third-party API directly from frontend Javascript code. It's unsafe because anyone can access your API key. When a user opens up their browsers developer tools, everyone will have access to your API key, and if someone has your API key, it can pose certain threats/risks not only for your web-application but also for yourself!

For example if the API key has more permissions and accessibility, the attacker can use it to read private data, delete data, and make unauthorized changes, they could even rack up thousands of dollars in charges billed to you, scary!

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:
The **proxy server strategy** is server-side, backend code. This strategy helps avoid exposing API keys in client-side code while still providing access to APIs because it will **prevent** users from being able to view your API key.

It works like this: instead of your web application talking directly to your third-party API, your browser actually talks to your own server and then the server talks to the API, and the same thing going back — when the API returns data after, let's say, you fetched it using `fetch()`, your third-party API would then talk to your server and the server would send that right back to your web app.

In other words, the server is the **middle man**, and you can think about it like this: you have a secret you wanna tell your friend and you wanna get their thoughts on this secret, but in the process of you telling your friend a secret there's actually someone else behind you listening in on you telling your secret — they could now go around telling people, change the story, or choose to not tell anyone at all. Now if we had a middle man, let's say you still want this secret to be told to your friend, you write your secret on a _piece of paper_ and ask for their input, you then walk by him and place the paper in front of him and walk away and wait for him to return the paper back to you with their answer.

In that example the paper is the middle man (**proxy server**), this middle man prevents **eavesdroppers** (users) from being able to hear the **secret** (data) that you wanna tell your **friend** (third-party API server) and with this paper it deterred the eavesdropper from hearing the secret because it prevented the eavesdropper from even knowing this paper existed but most importantly they couldn't know what was in this paper because they didn't see it.

---

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

An **environment variable** is a variable that lives outside of the source code. It is stored in the system, and then gets injected into your app on runtime. So instead of having sensitive values like your **API keys** directly in your code you are able to reference them by name.

The reason we store API keys in a `.env` file is to prevent public accessibility to our APIs. There are a few reasons as to why we wouldn't want this, one is malicious intent. Say a user went into your website, this user has been on the look for API keys without having to pay for them to run their own services, this user is now an attacker because he came in with the intent to not use the website but to steal something from your website. Once the attacker finds your API key through the dev tools, they are able to use your API key and could run it without your permission, and depending on the type of API key you are running, some are paid others are free with a limited amount of uses of how many times your website could be accessed. If the attacker steals a paid API key, they could run up the bill you pay in tons of extra charges, if the attacker steals a free API key your website will no longer be able to render data for users to view on your website.

The role that `.gitignore` plays in this setup is that it basically hides the `.env` file from public access. Once the API key is stored as an environment variable in the `.env` file it doesn't just hide it because you put it there, you're just storing it in that file. Adding a `.gitignore` file essentially tells GitHub "Hey I don't want this file to be visible, I need you to hide this file right here when publishing my website so that no one can see this information".

If the `.env` file were to accidentally be pushed to GitHub, and your repository is public where anyone can see it, then people would be able to have direct access to your API key and the variable holding your API key, and like I mentioned earlier that is a no go.
