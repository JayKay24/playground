import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const MESSAGES = gql`
  query Messages {
    messages {
      author
      text
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($author: String!, $text: String!) {
    addMessage(author: $author, text: $text) {
      author
      text
    }
  }
`;

const Forum = () => {
  const {
    loading: messagesLoading,
    error: messagesError,
    data,
  } = useQuery(MESSAGES);
  const [addMessage] = useMutation(ADD_MESSAGE);
  const [author, setAuthor] = useState();
  const [text, setText] = useState();

  const messages = data && data.messages;

  return (
    <div className="App">
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(evt) => setAuthor(evt.target.value)}
      />
      <textarea
        value={text}
        placeholder="Message"
        onChange={(evt) => setText(evt.target.value)}
      ></textarea>

      <button
        onClick={async () => {
          try {
            await addMessage({
              variables: { author, text },
              refetchQueries: ["Messages"],
            });
            setText("");
            setAuthor("");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Post
      </button>
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">{messagesError.message}</div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((message) => (
            <>
              <dt>{message.author}</dt>
              <dd>{message.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        "No messages"
      )}
    </div>
  );
};

export default Forum;
