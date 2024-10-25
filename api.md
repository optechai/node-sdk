# Conversation

Types:

- <code><a href="./src/resources/conversation.ts">ConversationMessageResponse</a></code>
- <code><a href="./src/resources/conversation.ts">ConversationStartResponse</a></code>

Methods:

- <code title="post /conversation/{conversationId}/message">client.conversation.<a href="./src/resources/conversation.ts">message</a>(conversationId, { ...params }) -> ConversationMessageResponse</code>
- <code title="post /conversation/start">client.conversation.<a href="./src/resources/conversation.ts">start</a>() -> ConversationStartResponse</code>

# Ingest

Types:

- <code><a href="./src/resources/ingest.ts">IngestValidateResponse</a></code>

Methods:

- <code title="post /ingest/{toolId}/{ticketId}">client.ingest.<a href="./src/resources/ingest.ts">returnWebhook</a>(toolId, ticketId, { ...params }) -> void</code>
- <code title="post /ingest/token">client.ingest.<a href="./src/resources/ingest.ts">token</a>({ ...params }) -> void</code>
- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>({ ...params }) -> IngestValidateResponse</code>
