import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function FooterHomeSection() {
  return (
    <div
      id="contact-me"
      className="flex flex-col w-full max-w-4xl px-3 space-y-10 mx-auto mt-10"
    >
      <div className="space-y-2">
        <p className={`whitespace-pre-line text-4xl text-white font-semibold`}>
          {"Have a project, idea, or opportunity?"}
        </p>
        <p className={`whitespace-pre-line text-xl text-white font-semibold`}>
          {"Feel free to reach out via email or my social media account.👋😃"}
        </p>
        <div className="flex mt-5">
          <EnvelopeIcon className="h-5 w-5 stroke-[2.5]" />
          <a
            href="mailto:ilhamfazri3rd@gmail.com"
            className={`font-semibold text-sm ml-2 underline cursor-pointer active:text-blue-500`}
          >
            {"ilhamfazri3rd@gmail.com"}
          </a>
        </div>
        <div className="flex space-x-5 mt-5">
          <a
            href="https://www.linkedin.com/in/ilhamfzri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white hover:text-blue-500 active:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 
                                5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                                19h-3v-10h3v10zm-1.5-11.28c-.97 
                                0-1.75-.79-1.75-1.75s.78-1.75 
                                1.75-1.75 1.75.79 
                                1.75 1.75-.78 1.75-1.75 
                                1.75zm13.5 
                                11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 
                                0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.88v1.37h.04c.4-.75 
                                1.38-1.54 2.84-1.54 3.04 0 3.6 2 
                                3.6 4.59v5.58z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/ilhamfzri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white hover:text-blue-500 active:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577
                                0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73
                                1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.304-5.467-1.333-5.467-5.931
                                0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005
                                2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.12 3.176.77.84
                                1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.102.823 2.222
                                0 1.604-.015 2.896-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297
                                24 12c0-6.63-5.37-12-12-12Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ilhamfzri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white hover:text-blue-500 active:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            </svg>
          </a>
        </div>
        <div className={`text-sm text-center mt-10 mb-2`}>
          © 2025 Ilham Fazri.
        </div>
      </div>
    </div>
  );
}
