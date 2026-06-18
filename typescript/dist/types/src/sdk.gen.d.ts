import type { Client, ClientMeta, Options as Options2, RequestResult, TDataShape } from './client';
import type { AuthLoginData, AuthLoginErrors, AuthLoginResponses, AuthLogoutData, AuthLogoutErrors, AuthLogoutResponses, AuthRefreshData, AuthRefreshErrors, AuthRefreshResponses, ConfirmInstanceUploadData, ConfirmInstanceUploadErrors, ConfirmInstanceUploadResponses, CreateInstanceData, CreateInstanceDownloadUrlData, CreateInstanceDownloadUrlErrors, CreateInstanceDownloadUrlResponses, CreateInstanceErrors, CreateInstanceResponses, CreateInstanceUploadUrlData, CreateInstanceUploadUrlErrors, CreateInstanceUploadUrlResponses, DeleteInstanceData, DeleteInstanceErrors, DeleteInstanceResponses, GetInstanceData, GetInstanceErrors, GetInstanceResponses, GetMeData, GetMeErrors, GetMeResponses, GetSettingsData, GetSettingsErrors, GetSettingsResponses, ListInstancesData, ListInstancesErrors, ListInstancesResponses, PutSettingsData, PutSettingsErrors, PutSettingsResponses, UpdateInstanceData, UpdateInstanceErrors, UpdateInstanceResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options2<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: keyof ClientMeta extends never ? Record<string, unknown> : ClientMeta;
};
/**
 * Log out the current device
 *
 * Deletes the session associated with the given refresh token. The access token remains valid until it expires (it's stateless), but the refresh token can no longer be used.
 */
export declare const authLogout: <ThrowOnError extends boolean = false>(options: Options<AuthLogoutData, ThrowOnError>) => RequestResult<AuthLogoutResponses, AuthLogoutErrors, ThrowOnError>;
/**
 * Exchange a refresh token for a new access/refresh token pair
 *
 * Refresh tokens are rotated on every use: the old one is invalidated and a new one is returned. If this call fails with 401, the user must log in again.
 */
export declare const authRefresh: <ThrowOnError extends boolean = false>(options: Options<AuthRefreshData, ThrowOnError>) => RequestResult<AuthRefreshResponses, AuthRefreshErrors, ThrowOnError>;
/**
 * Start OAuth login
 *
 * Redirects the user's browser to Google or Microsoft to begin the login flow.
 */
export declare const authLogin: <ThrowOnError extends boolean = false>(options: Options<AuthLoginData, ThrowOnError>) => RequestResult<AuthLoginResponses, AuthLoginErrors, ThrowOnError>;
/**
 * List (or sync) the user's instances
 */
export declare const listInstances: <ThrowOnError extends boolean = false>(options?: Options<ListInstancesData, ThrowOnError>) => RequestResult<ListInstancesResponses, ListInstancesErrors, ThrowOnError>;
/**
 * Create a new instance
 */
export declare const createInstance: <ThrowOnError extends boolean = false>(options: Options<CreateInstanceData, ThrowOnError>) => RequestResult<CreateInstanceResponses, CreateInstanceErrors, ThrowOnError>;
/**
 * Delete an instance (and its uploaded archive, if any)
 */
export declare const deleteInstance: <ThrowOnError extends boolean = false>(options: Options<DeleteInstanceData, ThrowOnError>) => RequestResult<DeleteInstanceResponses, DeleteInstanceErrors, ThrowOnError>;
/**
 * Get a single instance
 */
export declare const getInstance: <ThrowOnError extends boolean = false>(options: Options<GetInstanceData, ThrowOnError>) => RequestResult<GetInstanceResponses, GetInstanceErrors, ThrowOnError>;
/**
 * Replace an instance's metadata/config
 */
export declare const updateInstance: <ThrowOnError extends boolean = false>(options: Options<UpdateInstanceData, ThrowOnError>) => RequestResult<UpdateInstanceResponses, UpdateInstanceErrors, ThrowOnError>;
/**
 * Mark the instance's packaged archive as uploaded
 */
export declare const confirmInstanceUpload: <ThrowOnError extends boolean = false>(options: Options<ConfirmInstanceUploadData, ThrowOnError>) => RequestResult<ConfirmInstanceUploadResponses, ConfirmInstanceUploadErrors, ThrowOnError>;
/**
 * Get a presigned URL to download the instance's packaged files
 */
export declare const createInstanceDownloadUrl: <ThrowOnError extends boolean = false>(options: Options<CreateInstanceDownloadUrlData, ThrowOnError>) => RequestResult<CreateInstanceDownloadUrlResponses, CreateInstanceDownloadUrlErrors, ThrowOnError>;
/**
 * Get a presigned URL to upload the instance's packaged files
 *
 * PUT the instance archive directly to this URL (e.g. with curl -T or reqwest), then call POST /instances/{id}/confirm-upload.
 */
export declare const createInstanceUploadUrl: <ThrowOnError extends boolean = false>(options: Options<CreateInstanceUploadUrlData, ThrowOnError>) => RequestResult<CreateInstanceUploadUrlResponses, CreateInstanceUploadUrlErrors, ThrowOnError>;
/**
 * Get the current user's profile
 */
export declare const getMe: <ThrowOnError extends boolean = false>(options?: Options<GetMeData, ThrowOnError>) => RequestResult<GetMeResponses, GetMeErrors, ThrowOnError>;
/**
 * Get the current user's synced settings
 *
 * Returns 404 if the user has never saved settings; the launcher should fall back to its local defaults in that case.
 */
export declare const getSettings: <ThrowOnError extends boolean = false>(options?: Options<GetSettingsData, ThrowOnError>) => RequestResult<GetSettingsResponses, GetSettingsErrors, ThrowOnError>;
/**
 * Replace the current user's synced settings
 *
 * This is a full replace, not a merge - the launcher should send its complete settings object.
 */
export declare const putSettings: <ThrowOnError extends boolean = false>(options: Options<PutSettingsData, ThrowOnError>) => RequestResult<PutSettingsResponses, PutSettingsErrors, ThrowOnError>;
