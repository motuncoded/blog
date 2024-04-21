import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id=" error-page"
      className="bg-bgColor min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-ghostWhite text-4xl my-2">Oops!</h1>
      <p className="text-white text-2xl my-2">
        Sorry, an unexpected error has occurred.
      </p>
      <a href="/" className="p-2 bg-orange text-bgColor m-4 rounded">
        Navigate to home
      </a>
      <p></p>
    </div>
  );
}
