# \SettingsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_settings**](SettingsApi.md#get_settings) | **GET** /settings | Get the current user's synced settings
[**put_settings**](SettingsApi.md#put_settings) | **PUT** /settings | Replace the current user's synced settings



## get_settings

> models::SettingsBody get_settings()
Get the current user's synced settings

Returns 404 if the user has never saved settings; the launcher should fall back to its local defaults in that case.

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::SettingsBody**](SettingsBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## put_settings

> models::SettingsBody put_settings(put_input_body)
Replace the current user's synced settings

This is a full replace, not a merge - the launcher should send its complete settings object.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**put_input_body** | [**PutInputBody**](PutInputBody.md) |  | [required] |

### Return type

[**models::SettingsBody**](SettingsBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

