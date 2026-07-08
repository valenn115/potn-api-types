# \AccountsApi

All URIs are relative to *https://api.potnlaunch.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_minecraft_account**](AccountsApi.md#get_minecraft_account) | **GET** /minecraft/account | Get minecraft account
[**get_minecraft_accounts**](AccountsApi.md#get_minecraft_accounts) | **GET** /minecraft/accounts | Get minecraft accounts
[**minecraft_refresh_token**](AccountsApi.md#minecraft_refresh_token) | **GET** /minecraft/account/refresh | Refresh minecraft access token
[**unlink_minecraft_account**](AccountsApi.md#unlink_minecraft_account) | **DELETE** /minecraft/account | Unlink minecraft account



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

