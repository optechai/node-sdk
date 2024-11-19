# Conversation

## Email

Types:

- <code><a href="./src/resources/conversation/email.ts">EmailGenerateResponse</a></code>
- <code><a href="./src/resources/conversation/email.ts">EmailGetResponse</a></code>
- <code><a href="./src/resources/conversation/email.ts">EmailStartResponse</a></code>

Methods:

- <code title="post /v1/conversation/email/message">client.conversation.email.<a href="./src/resources/conversation/email.ts">generate</a>({ ...params }) -> EmailGenerateResponse</code>
- <code title="get /v1/conversation/email/message">client.conversation.email.<a href="./src/resources/conversation/email.ts">get</a>({ ...params }) -> EmailGetResponse</code>
- <code title="post /v1/conversation/email/create">client.conversation.email.<a href="./src/resources/conversation/email.ts">start</a>({ ...params }) -> EmailStartResponse</code>

## Chat

Types:

- <code><a href="./src/resources/conversation/chat.ts">ChatGenerateResponse</a></code>
- <code><a href="./src/resources/conversation/chat.ts">ChatGetResponse</a></code>
- <code><a href="./src/resources/conversation/chat.ts">ChatStartResponse</a></code>

Methods:

- <code title="post /v1/conversation/chat/message">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">generate</a>({ ...params }) -> ChatGenerateResponse</code>
- <code title="get /v1/conversation/chat/message">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">get</a>({ ...params }) -> ChatGetResponse</code>
- <code title="post /v1/conversation/chat/create">client.conversation.chat.<a href="./src/resources/conversation/chat.ts">start</a>({ ...params }) -> ChatStartResponse</code>

# Customer

Types:

- <code><a href="./src/resources/customer.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customer.ts">CustomerGetResponse</a></code>
- <code><a href="./src/resources/customer.ts">CustomerTokenResponse</a></code>

Methods:

- <code title="post /v1/customer">client.customer.<a href="./src/resources/customer.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /v1/customer/{id}">client.customer.<a href="./src/resources/customer.ts">get</a>(id) -> CustomerGetResponse</code>
- <code title="post /v1/customer/token">client.customer.<a href="./src/resources/customer.ts">token</a>({ ...params }) -> string</code>

# Workflow

Methods:

- <code title="post /v1/workflow">client.workflow.<a href="./src/resources/workflow.ts">update</a>() -> void</code>
- <code title="get /v1/workflow/{id}">client.workflow.<a href="./src/resources/workflow.ts">get</a>(id) -> void</code>

# Ingest

Methods:

- <code title="post /ingest/test/{toolId}">client.ingest.<a href="./src/resources/ingest.ts">test</a>(toolId, { ...params }) -> void</code>
- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>() -> void</code>
