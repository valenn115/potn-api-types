# \AuthApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_login**](AuthApi.md#auth_login) | **GET** /auth/{provider}/login | Start OAuth login
[**auth_logout**](AuthApi.md#auth_logout) | **POST** /auth/logout | Log out the current device
[**auth_refresh**](AuthApi.md#auth_refresh) | **POST** /auth/refresh | Exchange a refresh token for a new access/refresh token pair



## auth_login

> auth_login(provider, caller)
Start OAuth login

Redirects the user's browser to Google or Microsoft to begin the login flow.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**provider** | **String** | OAuth provider to log in with | [required] |
**caller** | Option<**String**> | URL to redirect back to after login |  |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## auth_logout

> models::LogoutOutputBody auth_logout(logout_input_body)
Log out the current device

Deletes the session associated with the given refresh token. The access token remains valid until it expires, but the refresh token can no longer be used.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**logout_input_body** | [**LogoutInputBody**](LogoutInputBody.md) |  | [required] |

### Return type

[**models::LogoutOutputBody**](LogoutOutputBody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## auth_refresh

> models::TokenPair auth_refresh(refresh_input_body)
Exchange a refresh token for a new access/refresh token pair

Refresh tokens are rotated on every use: the old one is invalidated and a new one is returned. If this call fails with 401, the user must log in again.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**refresh_input_body** | [**RefreshInputBody**](RefreshInputBody.md) |  | [required] |

### Return type

[**models::TokenPair**](TokenPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

