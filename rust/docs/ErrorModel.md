# ErrorModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_schema** | Option<**String**> | A URL to the JSON Schema for this object. | [optional][readonly]
**detail** | Option<**String**> | A human-readable explanation specific to this occurrence of the problem. | [optional]
**errors** | Option<[**Vec<models::ErrorDetail>**](ErrorDetail.md)> | Optional list of individual error details | [optional]
**instance** | Option<**String**> | A URI reference that identifies the specific occurrence of the problem. | [optional]
**status** | Option<**i64**> | HTTP status code | [optional]
**title** | Option<**String**> | A short, human-readable summary of the problem type. This value should not change between occurrences of the error. | [optional]
**r#type** | Option<**String**> | A URI reference to human-readable documentation for the error. | [optional][default to about:blank]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


