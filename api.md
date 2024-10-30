# Conversation

## Chat

Types:

- <code><a href="./src/resources/conversation/chat.ts">ChatGenerateResponse</a></code>
- <code><a href="./src/resources/conversation/chat.ts">ChatGetResponse</a></code>
- <code><a href="./src/resources/conversation/chat.ts">ChatStartResponse</a></code>

Methods:

- <code title="post /conversation/chat/message">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">generate</a>({ ...params }) -> ChatGenerateResponse</code>
- <code title="get /conversation/chat/message">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">get</a>({ ...params }) -> ChatGetResponse</code>
- <code title="post /conversation/chat/create">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">start</a>({ ...params }) -> ChatStartResponse</code>

# Token

Methods:

- <code title="post /ingest/token">client.token.<a href="./src/resources/token.ts">create</a>({ ...params }) -> void</code>

# Ingest

Methods:

- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>() -> void</code>
