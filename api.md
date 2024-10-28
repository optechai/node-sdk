# Conversation

## Chat

Types:

- <code><a href="./src/resources/conversation/chat.ts">ConversationMessage</a></code>
- <code><a href="./src/resources/conversation/chat.ts">ChatStartResponse</a></code>

Methods:

- <code title="post /conversation/chat/{conversationId}/generate">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">generate</a>(conversationId, { ...params }) -> ConversationMessage</code>
- <code title="get /conversation/chat/{conversationId}">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">get</a>(conversationId) -> ConversationMessage</code>
- <code title="post /conversation/chat/start">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">start</a>({ ...params }) -> ChatStartResponse</code>

# Token

Methods:

- <code title="post /ingest/token">client.token.<a href="./src/resources/token.ts">create</a>({ ...params }) -> void</code>

# Ingest

Types:

- <code><a href="./src/resources/ingest.ts">IngestValidateResponse</a></code>

Methods:

- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>({ ...params }) -> IngestValidateResponse</code>
- <code title="post /ingest/{toolId}/{ticketId}">client.ingest.<a href="./src/resources/ingest.ts">webhooks</a>(toolId, ticketId, { ...params }) -> void</code>
