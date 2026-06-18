# \InstancesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm_instance_upload**](InstancesApi.md#confirm_instance_upload) | **POST** /instances/{id}/confirm-upload | Mark the instance's packaged archive as uploaded
[**create_instance**](InstancesApi.md#create_instance) | **POST** /instances | Create a new instance
[**create_instance_download_url**](InstancesApi.md#create_instance_download_url) | **GET** /instances/{id}/download-url | Get a presigned URL to download the instance's packaged files
[**create_instance_upload_url**](InstancesApi.md#create_instance_upload_url) | **POST** /instances/{id}/upload-url | Get a presigned URL to upload the instance's packaged files
[**delete_instance**](InstancesApi.md#delete_instance) | **DELETE** /instances/{id} | Delete an instance (and its uploaded archive, if any)
[**get_instance**](InstancesApi.md#get_instance) | **GET** /instances/{id} | Get a single instance
[**list_instances**](InstancesApi.md#list_instances) | **GET** /instances | List (or sync) the user's instances
[**update_instance**](InstancesApi.md#update_instance) | **PUT** /instances/{id} | Replace an instance's metadata/config



## confirm_instance_upload

> models::InstanceResponse confirm_instance_upload(id)
Mark the instance's packaged archive as uploaded

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::InstanceResponse**](InstanceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_instance

> models::InstanceResponse create_instance(instance_body)
Create a new instance

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**instance_body** | [**InstanceBody**](InstanceBody.md) |  | [required] |

### Return type

[**models::InstanceResponse**](InstanceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_instance_download_url

> models::PresignOutputBody create_instance_download_url(id)
Get a presigned URL to download the instance's packaged files

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::PresignOutputBody**](PresignOutputBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_instance_upload_url

> models::PresignOutputBody create_instance_upload_url(id)
Get a presigned URL to upload the instance's packaged files

PUT the instance archive directly to this URL (e.g. with curl -T or reqwest), then call POST /instances/{id}/confirm-upload.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::PresignOutputBody**](PresignOutputBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_instance

> delete_instance(id)
Delete an instance (and its uploaded archive, if any)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_instance

> models::InstanceResponse get_instance(id)
Get a single instance

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::InstanceResponse**](InstanceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_instances

> models::ListOutputBody list_instances(since)
List (or sync) the user's instances

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**since** | Option<**String**> | RFC3339 timestamp; only return instances updated after this time |  |

### Return type

[**models::ListOutputBody**](ListOutputBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_instance

> models::InstanceResponse update_instance(id, instance_body)
Replace an instance's metadata/config

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |
**instance_body** | [**InstanceBody**](InstanceBody.md) |  | [required] |

### Return type

[**models::InstanceResponse**](InstanceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

