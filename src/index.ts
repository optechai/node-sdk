// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * The client ID associated with your account.
   */
  bearerToken?: string | null | undefined;

  /**
   * The signature of the webhook - should be generated as a SHA256 hash of the payload and the secret key.
   */
  apiKey?: string | null | undefined;

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
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Lorikeet API.
 */
export class Lorikeet extends Core.APIClient {
  bearerToken: string | null;
  apiKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Lorikeet API.
   *
   * @param {string | null | undefined} [opts.bearerToken=process.env['LORIKEET_CLIENT_ID'] ?? null]
   * @param {string | null | undefined} [opts.apiKey]
   * @param {string} [opts.baseURL=process.env['LORIKEET_BASE_URL'] ?? http://api.lorikeetcx.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('LORIKEET_BASE_URL'),
    bearerToken = Core.readEnv('LORIKEET_CLIENT_ID') ?? null,
    apiKey = null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      bearerToken,
      apiKey,
      ...opts,
      baseURL: baseURL || `http://api.lorikeetcx.ai`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.apiKey = apiKey;
  }

  conversation: API.Conversation = new API.Conversation(this);
  ingest: API.Ingest = new API.Ingest(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.bearerToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    if (this.apiKey && headers['x-optech-webhook-signature']) {
      return;
    }
    if (customHeaders['x-optech-webhook-signature'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either bearerToken or apiKey to be set. Or for one of the "Authorization" or "x-optech-webhook-signature" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const bearerAuth = this.bearerAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);

    if (bearerAuth != null && !Core.isEmptyObj(bearerAuth)) {
      return bearerAuth;
    }

    if (apiKeyAuth != null && !Core.isEmptyObj(apiKeyAuth)) {
      return apiKeyAuth;
    }
    return {};
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.bearerToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { 'x-optech-webhook-signature': this.apiKey };
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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Lorikeet {
  export import RequestOptions = Core.RequestOptions;

  export import Conversation = API.Conversation;
  export import ConversationMessageResponse = API.ConversationMessageResponse;
  export import ConversationStartResponse = API.ConversationStartResponse;
  export import ConversationMessageParams = API.ConversationMessageParams;

  export import Ingest = API.Ingest;
  export import IngestValidateResponse = API.IngestValidateResponse;
  export import IngestReturnWebhookParams = API.IngestReturnWebhookParams;
  export import IngestTokenParams = API.IngestTokenParams;
  export import IngestValidateParams = API.IngestValidateParams;
}

export default Lorikeet;
