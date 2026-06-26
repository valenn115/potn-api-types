# InstanceBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_schema** | Option<**String**> | A URL to the JSON Schema for this object. | [optional][readonly]
**config** | Option<**serde_json::Value**> |  | [optional]
**mc_version** | **String** | Minecraft version, e.g. '1.20.1' | 
**mod_loader** | Option<**ModLoader**> |  (enum: forge, neoforge, fabric, quilt) | [optional]
**mod_loader_version** | Option<**String**> | Loader version, empty for vanilla | [optional]
**name** | **String** | Display name shown in the launcher | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


