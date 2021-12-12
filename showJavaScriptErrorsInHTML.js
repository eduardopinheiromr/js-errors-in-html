const showJavaScriptErrorsInHTML = (callback = () => undefined) => {
  try {
    callback();
  } catch (error) {
    const element = document.createElement("div");
    console.log({ error });
    element.innerHTML = `
        <div style="position: absolute; top: 0; left: 0; height: 100vh; width: 100vw; background: black; color: white; display: flex; justify-content: center;">
        <div style="padding-top: 10%; text-align: center;">
          <h1>There is an error in javascript file:</h1>
          <h2 style="color: #FF5050">${error.message}</h2>
          <p style="max-width: 800px;">${error.stack}</p>
          </div>
        </div>
        `;
    document.body.appendChild(element);
  }
};
