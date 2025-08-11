// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { File } from './resources/file';
import { Ingest, IngestTestParams } from './resources/ingest';
import { Suggestion } from './resources/suggestion';
import { Webhooks } from './resources/webhooks';
import { Workflow } from './resources/workflow';
import {
  AttachmentDto,
  Conversation,
  ConversationCreateParams,
  ConversationCreateResponse,
  ConversationRetrieveTranscriptParams,
  ConversationRetrieveTranscriptResponse,
  TicketEvent,
  TicketMessageDto,
} from './resources/conversation/conversation';
import { generateSignature } from './lib/generate-signature';
import {
  Customer,
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerGetResponse,
  CustomerTokenParams,
  CustomerTokenResponse,
  CustomerUpdateParams,
  CustomerUpdateResponse,
} from './resources/customer/customer';
import { OAuth, OAuthAuthorizeParams, OAuthCallbackParams } from './resources/oauth/oauth';

export interface ClientOptions {
  /**
   * client identifier authentication associated with the account.
   */
  clientId?: string | undefined;

  /**
   * Secret key pulled from the Lorikeet App
   */
  clientSecret?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LORIKEET_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Lorikeet API.
 */
export class Lorikeet extends Core.APIClient {
  clientId: string;
  clientSecret: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Lorikeet API.
   *
   * @param {string | undefined} [opts.clientId=process.env['LORIKEET_CLIENT_ID'] ?? undefined]
   * @param {string | undefined} [opts.clientSecret=process.env['LORIKEET_CLIENT_SECRET'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['LORIKEET_BASE_URL'] ?? https://api.lorikeetcx.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('LORIKEET_BASE_URL'),
    clientId = Core.readEnv('LORIKEET_CLIENT_ID'),
    clientSecret = Core.readEnv('LORIKEET_CLIENT_SECRET'),
    ...opts
  }: ClientOptions = {}) {
    if (clientId === undefined) {
      throw new Errors.LorikeetError(
        "The LORIKEET_CLIENT_ID environment variable is missing or empty; either provide it, or instantiate the Lorikeet client with an clientId option, like new Lorikeet({ clientId: 'My Client ID' }).",
      );
    }
    if (clientSecret === undefined) {
      throw new Errors.LorikeetError(
        "The LORIKEET_CLIENT_SECRET environment variable is missing or empty; either provide it, or instantiate the Lorikeet client with an clientSecret option, like new Lorikeet({ clientSecret: 'My Client Secret' }).",
      );
    }

    const options: ClientOptions = {
      clientId,
      clientSecret,
      ...opts,
      baseURL: baseURL || `https://api.lorikeetcx.ai`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.lorikeetcx.ai' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  conversation: API.Conversation = new API.Conversation(this);
  customer: API.Customer = new API.Customer(this);
  workflow: API.Workflow = new API.Workflow(this);
  ingest: API.Ingest = new API.Ingest(this);
  file: API.File = new API.File(this);
  suggestion: API.Suggestion = new API.Suggestion(this);
  oauth: API.OAuth = new API.OAuth(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.lorikeetcx.ai';
  }

  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.get('/', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...this.lorikeetClientIdAuth(opts),
      ...this.lorikeetSignatureAuthV1Auth(opts),
    };
  }

  protected lorikeetClientIdAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { authorization: `Bearer ${this.clientId}` };
  }

  protected lorikeetSignatureAuthV1Auth(opts: Core.FinalRequestOptions): Core.Headers {
    const signature = generateSignature(
      opts.body ?
        typeof opts.body === 'string' ?
          opts.body
        : JSON.stringify(opts.body, null, 2)
      : '',
      this.clientSecret,
    );
    return { 'x-lorikeet-signature': signature };
  }

  static Lorikeet = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LorikeetError = Errors.LorikeetError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Lorikeet.Conversation = Conversation;
Lorikeet.Customer = Customer;
Lorikeet.Workflow = Workflow;
Lorikeet.Ingest = Ingest;
Lorikeet.File = File;
Lorikeet.Suggestion = Suggestion;
Lorikeet.OAuth = OAuth;
Lorikeet.Webhooks = Webhooks;
export declare namespace Lorikeet {
  export type RequestOptions = Core.RequestOptions;

  export {
    Conversation as Conversation,
    type AttachmentDto as AttachmentDto,
    type TicketEvent as TicketEvent,
    type TicketMessageDto as TicketMessageDto,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationRetrieveTranscriptResponse as ConversationRetrieveTranscriptResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveTranscriptParams as ConversationRetrieveTranscriptParams,
  };

  export {
    Customer as Customer,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerTokenResponse as CustomerTokenResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerTokenParams as CustomerTokenParams,
  };

  export { Workflow as Workflow };

  export { Ingest as Ingest, type IngestTestParams as IngestTestParams };

  export { File as File };

  export { Suggestion as Suggestion };

  export {
    OAuth as OAuth,
    type OAuthAuthorizeParams as OAuthAuthorizeParams,
    type OAuthCallbackParams as OAuthCallbackParams,
  };

  export { Webhooks as Webhooks };
}

export { toFile, fileFromPath } from './uploads';
export {
  LorikeetError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';

export default Lorikeet;
