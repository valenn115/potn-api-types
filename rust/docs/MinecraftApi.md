# \MinecraftApi

All URIs are relative to *https://api.potnlaunch.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_minecraft_account**](MinecraftApi.md#get_minecraft_account) | **GET** /minecraft/account | Get minecraft account
[**get_minecraft_accounts**](MinecraftApi.md#get_minecraft_accounts) | **GET** /minecraft/accounts | Get minecraft accounts
[**minecraft_link**](MinecraftApi.md#minecraft_link) | **POST** /minecraft/account/link | Link minecraft account
[**minecraft_link_callback**](MinecraftApi.md#minecraft_link_callback) | **GET** /minecraft/link/callback | Minecraft link callback
[**minecraft_refresh_token**](MinecraftApi.md#minecraft_refresh_token) | **GET** /minecraft/account/refresh | Refresh minecraft access token
[**unlink_minecraft_account**](MinecraftApi.md#unlink_minecraft_account) | **DELETE** /minecraft/account | Unlink minecraft account



## get_minecraft_account

> get_minecraft_account(id)
Get minecraft account

Returns a minecraft account linked to the current user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_minecraft_accounts

> Vec<models::MinecraftAccount> get_minecraft_accounts()
Get minecraft accounts

Returns a list of minecraft accounts linked to the current user

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::MinecraftAccount>**](MinecraftAccount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## minecraft_link

> minecraft_link()
Link minecraft account

Links minecraft account to current user using microsoft oauth

### Parameters

This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## minecraft_link_callback

> minecraft_link_callback(code, state, error)
Minecraft link callback

Handles redirect from microsoft to obrain tokens

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**code** | Option<**String**> |  |  |
**state** | Option<**String**> |  |  |
**error** | Option<**String**> |  |  |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## minecraft_refresh_token

> String minecraft_refresh_token(id)
Refresh minecraft access token

Refreshes the minecraft access token for the current user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## unlink_minecraft_account

> unlink_minecraft_account(id)
Unlink minecraft account

Unlinks minecraft account from the current user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

