# Lorikeet

# Conversation

Types:

- <code><a href="./src/resources/conversation/conversation.ts">AttachmentDto</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">TicketEvent</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">TicketMessageDto</a></code>

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

## Voice

Methods:

- <code title="post /v1/conversation/voice/outbound">client.conversation.voice.<a href="./src/resources/conversation/voice.ts">outbound</a>({ ...params }) -> void</code>

# Customer

Types:

- <code><a href="./src/resources/customer/customer.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerTokenResponse</a></code>

Methods:

- <code title="post /v1/customer">client.customer.<a href="./src/resources/customer/customer.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="put /v1/customer/{id}">client.customer.<a href="./src/resources/customer/customer.ts">update</a>(id, { ...params }) -> CustomerUpdateResponse</code>
- <code title="post /v1/customer/token">client.customer.<a href="./src/resources/customer/customer.ts">token</a>({ ...params }) -> string</code>

## Remote

Types:

- <code><a href="./src/resources/customer/remote.ts">RemoteUpdateResponse</a></code>
- <code><a href="./src/resources/customer/remote.ts">RemoteGetResponse</a></code>

Methods:

- <code title="patch /v1/customer/remote/{remoteId}">client.customer.remote.<a href="./src/resources/customer/remote.ts">update</a>(pathRemoteId, { ...params }) -> RemoteUpdateResponse</code>
- <code title="get /v1/customer/remote/{remoteId}">client.customer.remote.<a href="./src/resources/customer/remote.ts">get</a>(remoteId) -> RemoteGetResponse</code>

## Profile

Types:

- <code><a href="./src/resources/customer/profile.ts">ProfileSyncResponse</a></code>

Methods:

- <code title="put /v1/customer/profile/{id}">client.customer.profile.<a href="./src/resources/customer/profile.ts">sync</a>(id, { ...params }) -> ProfileSyncResponse</code>

# Workflow

# Ingest

Methods:

- <code title="post /ingest/{toolId}/{ticketId}/{inputHash}/{workflowId}">client.ingest.<a href="./src/resources/ingest.ts">submit</a>(toolId, ticketId, inputHash, workflowId) -> void</code>
- <code title="post /ingest/test/{toolId}">client.ingest.<a href="./src/resources/ingest.ts">test</a>(toolId, { ...params }) -> void</code>
- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>() -> void</code>

# File

# Suggestion

# OAuth

## Authorization

# Webhooks
