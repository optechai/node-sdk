# Lorikeet

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieve</a>() -> void</code>

# Conversation

Types:

- <code><a href="./src/resources/conversation/conversation.ts">AttachmentDto</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">TicketEvent</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">TicketMessageDto</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/conversation/conversation.ts">ConversationRetrieveTranscriptResponse</a></code>

Methods:

- <code title="post /v1/conversation/new">client.conversation.<a href="./src/resources/conversation/conversation.ts">create</a>({ ...params }) -> ConversationCreateResponse</code>
- <code title="get /v1/conversation/transcript/{ticketId}">client.conversation.<a href="./src/resources/conversation/conversation.ts">retrieveTranscript</a>(ticketId, { ...params }) -> ConversationRetrieveTranscriptResponse</code>

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
- <code><a href="./src/resources/customer/customer.ts">CustomerGetResponse</a></code>
- <code><a href="./src/resources/customer/customer.ts">CustomerTokenResponse</a></code>

Methods:

- <code title="post /v1/customer">client.customer.<a href="./src/resources/customer/customer.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="put /v1/customer/{id}">client.customer.<a href="./src/resources/customer/customer.ts">update</a>(id, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /v1/customer/{id}">client.customer.<a href="./src/resources/customer/customer.ts">get</a>(id) -> CustomerGetResponse</code>
- <code title="post /v1/customer/token">client.customer.<a href="./src/resources/customer/customer.ts">token</a>({ ...params }) -> string</code>

## Profile

Types:

- <code><a href="./src/resources/customer/profile.ts">ProfileSyncResponse</a></code>

Methods:

- <code title="put /v1/customer/profile/{id}">client.customer.profile.<a href="./src/resources/customer/profile.ts">sync</a>(id, { ...params }) -> ProfileSyncResponse</code>

# Workflow

Methods:

- <code title="get /v1/workflow">client.workflow.<a href="./src/resources/workflow.ts">retrieve</a>() -> void</code>
- <code title="post /v1/workflow">client.workflow.<a href="./src/resources/workflow.ts">update</a>() -> void</code>
- <code title="get /v1/workflow/{id}">client.workflow.<a href="./src/resources/workflow.ts">get</a>(id) -> void</code>

# Ingest

Methods:

- <code title="get /v1/ingest">client.ingest.<a href="./src/resources/ingest.ts">retrieve</a>() -> void</code>
- <code title="post /ingest/{toolId}/{ticketId}/{inputHash}/{workflowId}">client.ingest.<a href="./src/resources/ingest.ts">submit</a>(toolId, ticketId, inputHash, workflowId) -> void</code>
- <code title="post /ingest/test/{toolId}">client.ingest.<a href="./src/resources/ingest.ts">test</a>(toolId, { ...params }) -> void</code>
- <code title="post /ingest/validate">client.ingest.<a href="./src/resources/ingest.ts">validate</a>() -> void</code>

# File

Methods:

- <code title="get /v1/file/{fileId}">client.file.<a href="./src/resources/file.ts">retrieve</a>(fileId) -> void</code>
- <code title="put /v1/file/upload">client.file.<a href="./src/resources/file.ts">upload</a>() -> void</code>

# Suggestion

Methods:

- <code title="post /v1/suggestion/workflow">client.suggestion.<a href="./src/resources/suggestion.ts">createWorkflow</a>() -> void</code>
- <code title="get /v1/suggestion/tone">client.suggestion.<a href="./src/resources/suggestion.ts">retrieveTone</a>() -> void</code>

# OAuth

Methods:

- <code title="get /v1/oauth/authorize">client.oauth.<a href="./src/resources/oauth/oauth.ts">authorize</a>({ ...params }) -> void</code>
- <code title="get /v1/oauth/callback">client.oauth.<a href="./src/resources/oauth/oauth.ts">callback</a>({ ...params }) -> void</code>
- <code title="post /v1/oauth/token">client.oauth.<a href="./src/resources/oauth/oauth.ts">createToken</a>() -> void</code>
- <code title="post /v1/oauth/revoke">client.oauth.<a href="./src/resources/oauth/oauth.ts">revokeToken</a>() -> void</code>

## Authorization

Methods:

- <code title="get /v1/oauth/authorization/url/{providerId}">client.oauth.authorization.<a href="./src/resources/oauth/authorization.ts">getURL</a>(providerId) -> void</code>

# Webhooks

Methods:

- <code title="post /webhooks/lori">client.webhooks.<a href="./src/resources/webhooks.ts">createLori</a>() -> void</code>
