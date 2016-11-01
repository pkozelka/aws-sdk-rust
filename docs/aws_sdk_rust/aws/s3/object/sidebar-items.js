initSidebarItems({"fn":[["multipart_upload_finish_xml","Writes out XML with all the parts in it for S3 to complete."]],"struct":[["CopyObjectOutput",""],["CopyObjectOutputParser","Parse `CopyObjectOutput` from XML"],["CopyObjectOutputWriter","Write `CopyObjectOutput` contents to a `SignedRequest`"],["CopyObjectRequest",""],["CopyObjectRequestParser","Parse `CopyObjectRequest` from XML"],["CopyObjectRequestWriter","Write `CopyObjectRequest` contents to a `SignedRequest`"],["CopyObjectResult",""],["CopyObjectResultParser","Parse `CopyObjectResult` from XML"],["CopyObjectResultWriter","Write `CopyObjectResult` contents to a `SignedRequest`"],["Delete",""],["DeleteMarkerEntry",""],["DeleteMarkerEntryParser","Parse `DeleteMarkerEntry` from XML"],["DeleteMarkerEntryWriter","Write `DeleteMarkerEntry` contents to a `SignedRequest`"],["DeleteMarkerVersionIdParser","Parse `DeleteMarkerVersionId` from XML"],["DeleteMarkerVersionIdWriter","Write `DeleteMarkerVersionId` contents to a `SignedRequest`"],["DeleteMarkersParser","Parse `DeleteMarkers` from XML"],["DeleteMarkersWriter","Write `DeleteMarkers` contents to a `SignedRequest`"],["DeleteObjectOutput",""],["DeleteObjectOutputParser","Parse `DeleteObjectOutput` from XML"],["DeleteObjectOutputWriter","Write `DeleteObjectOutput` contents to a `SignedRequest`"],["DeleteObjectRequest",""],["DeleteObjectRequestParser","Parse `DeleteObjectRequest` from XML"],["DeleteObjectRequestWriter","Write `DeleteObjectRequest` contents to a `SignedRequest`"],["DeleteObjectsOutput",""],["DeleteObjectsOutputParser","Parse `DeleteObjectsOutput` from XML"],["DeleteObjectsOutputWriter","Write `DeleteObjectsOutput` contents to a `SignedRequest`"],["DeleteObjectsRequest",""],["DeleteObjectsRequestParser","Parse `DeleteObjectsRequest` from XML"],["DeleteObjectsRequestWriter","Write `DeleteObjectsRequest` contents to a `SignedRequest`"],["DeleteParser","Parse `Delete` from XML"],["DeleteWriter","Write `Delete` contents to a `SignedRequest`"],["DeletedObject",""],["DeletedObjectParser","Parse `DeletedObject` from XML"],["DeletedObjectWriter","Write `DeletedObject` contents to a `SignedRequest`"],["DeletedObjectsParser","Parse `DeletedObjects` from XML"],["DeletedObjectsWriter","Write `DeletedObjects` contents to a `SignedRequest`"],["ErrorDocument",""],["ExpiresParser","Parse `Expires` from XML"],["ExpiresWriter","Write `Expires` contents to a `SignedRequest`"],["GetObjectOutput",""],["GetObjectOutputParser","Parse `GetObjectOutput` from XML"],["GetObjectOutputWriter","Write `GetObjectOutput` contents to a `SignedRequest`"],["GetObjectRequest",""],["GetObjectRequestParser","Parse `GetObjectRequest` from XML"],["GetObjectRequestWriter","Write `GetObjectRequest` contents to a `SignedRequest`"],["GetObjectTorrentRequest",""],["GetObjectTorrentRequestParser","Parse `GetObjectTorrentRequest` from XML"],["GetObjectTorrentRequestWriter","Write `GetObjectTorrentRequest` contents to a `SignedRequest`"],["HeadObjectOutput",""],["HeadObjectOutputParser","Parse `HeadObjectOutput` from XML"],["HeadObjectOutputWriter","Write `HeadObjectOutput` contents to a `SignedRequest`"],["HeadObjectRequest",""],["IndexDocument",""],["Initiator",""],["LambdaFunctionConfiguration","Container for specifying the AWS Lambda notification configuration."],["ListObjectVersionsOutput",""],["ListObjectVersionsRequest",""],["ListObjectVersionsRequestParser","Parse `ListObjectVersionsRequest` from XML"],["ListObjectVersionsRequestWriter","Write `ListObjectVersionsRequest` contents to a `SignedRequest`"],["ListObjectsOutput","ListObjectsOutput contains the list of objects and their associated metadata for a given bucket name. There are two versions, version 1 and version 2. AWS S3 supports both. The struct field names that are unique for Version 1 are marked and those that are unique for Version 2 are marked. Those not marked are common between versions. The default for AWS is version 2 but you have to specify version 2 in ListObjectsRequest or it will default to version 1."],["ListObjectsOutputParser","Parse `ListObjectsOutput` from XML"],["ListObjectsOutputWriter","Write `ListObjectsOutput` contents to a `SignedRequest`"],["ListObjectsRequest",""],["ListObjectsRequestParser","Parse `ListObjectsRequest` from XML"],["ListObjectsRequestWriter","Write `ListObjectsRequest` contents to a `SignedRequest`"],["ListVersionsResult",""],["ListVersionsResultParser","Parse `ListVersionsResult` from XML"],["ListVersionsResultWriter","Write `ListVersionsResult` contents to a `SignedRequest`"],["MaxPartsParser","Parse `MaxParts` from XML"],["MaxPartsWriter","Write `MaxParts` contents to a `SignedRequest`"],["MaxUploadsParser","Parse `MaxUploads` from XML"],["MaxUploadsWriter","Write `MaxUploads` contents to a `SignedRequest`"],["MultipartUpload",""],["MultipartUploadAbortOutput",""],["MultipartUploadAbortOutputWriter","Write `MultipartUploadAbortOutput` contents to a `SignedRequest`"],["MultipartUploadAbortRequest",""],["MultipartUploadAbortRequestParser","Parse `MultipartUploadAbortRequest` from XML"],["MultipartUploadAbortRequestWriter","Write `MultipartUploadAbortRequest` contents to a `SignedRequest`"],["MultipartUploadCompleteOutput",""],["MultipartUploadCompleteOutputParser","Parse `MultipartUploadCompleteOutput` from XML"],["MultipartUploadCompleteOutputWriter","Write `MultipartUploadCompleteOutput` contents to a `SignedRequest`"],["MultipartUploadCompleteRequest","NB: MultipartUploadCompleteRequest is *not* JSON decodable without implementing a custom to_json trait because of Option<&'a [u8]>."],["MultipartUploadCreateOutput",""],["MultipartUploadCreateOutputParser","Parse `MultipartUploadCreateOutput` from XML"],["MultipartUploadCreateOutputWriter","Write `MultipartUploadCreateOutput` contents to a `SignedRequest`"],["MultipartUploadCreateRequest",""],["MultipartUploadCreateRequestParser","Parse `MultipartUploadCreateRequest` from XML"],["MultipartUploadCreateRequestWriter","Write `MultipartUploadCreateRequest` contents to a `SignedRequest`"],["MultipartUploadListOutput",""],["MultipartUploadListOutputParser","Parse `MultipartUploadListOutput` from XML"],["MultipartUploadListOutputWriter","Write `MultipartUploadListOutput` contents to a `SignedRequest`"],["MultipartUploadListParser","Parse `MultipartUploadList` from XML"],["MultipartUploadListPartsOutput",""],["MultipartUploadListPartsOutputParser","Parse `MultipartUploadListPartsOutput` from XML"],["MultipartUploadListPartsOutputWriter","Write `MultipartUploadListPartsOutput` contents to a `SignedRequest`"],["MultipartUploadListPartsRequest",""],["MultipartUploadListPartsRequestParser","Parse `MultipartUploadListPartsRequest` from XML"],["MultipartUploadListPartsRequestWriter","Write `MultipartUploadListPartsRequest` contents to a `SignedRequest`"],["MultipartUploadListRequest",""],["MultipartUploadListRequestParser","Parse `MultipartUploadListRequest` from XML"],["MultipartUploadListRequestWriter","Write `MultipartUploadListRequest` contents to a `SignedRequest`"],["MultipartUploadListWriter","Write `MultipartUploadList` contents to a `SignedRequest`"],["MultipartUploadParser","Parse `MultipartUpload` from XML"],["MultipartUploadPartRequest","NB: MultipartUploadPartRequest is *not* JSON decodable without implementing a custom to_json trait because of Option<&'a [u8]>."],["MultipartUploadWriter","Write `MultipartUpload` contents to a `SignedRequest`"],["NextPartNumberMarkerParser","Parse `NextPartNumberMarker` from XML"],["NextPartNumberMarkerWriter","Write `NextPartNumberMarker` contents to a `SignedRequest`"],["NextUploadIdMarkerParser","Parse `NextUploadIdMarker` from XML"],["NextUploadIdMarkerWriter","Write `NextUploadIdMarker` contents to a `SignedRequest`"],["NextVersionIdMarkerParser","Parse `NextVersionIdMarker` from XML"],["NextVersionIdMarkerWriter","Write `NextVersionIdMarker` contents to a `SignedRequest`"],["NoncurrentVersionExpiration","Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime."],["ObjectIdentifier",""],["ObjectIdentifierListParser","Parse `ObjectIdentifierList` from XML"],["ObjectIdentifierListWriter","Write `ObjectIdentifierList` contents to a `SignedRequest`"],["ObjectIdentifierParser","Parse `ObjectIdentifier` from XML"],["ObjectIdentifierWriter","Write `ObjectIdentifier` contents to a `SignedRequest`"],["ObjectKeyParser","Parse `ObjectKey` from XML"],["ObjectKeyWriter","Write `ObjectKey` contents to a `SignedRequest`"],["ObjectMetadata","`ObjectMetadata` used for `Contents` for ListObjectsOutput"],["ObjectMetadataListParser","Parse `ObjectMetadataList` from XML"],["ObjectMetadataListWriter","Write `ObjectMetadataList` contents to a `SignedRequest`"],["ObjectMetadataParser","Parse `ObjectMetadata` from XML"],["ObjectMetadataWriter","Write `ObjectMetadata` contents to a `SignedRequest`"],["ObjectStorageClassParser","Parse `ObjectStorageClass` from XML"],["ObjectStorageClassWriter","Write `ObjectStorageClass` contents to a `SignedRequest`"],["ObjectVersion",""],["ObjectVersionIdParser","Parse `ObjectVersionId` from XML"],["ObjectVersionIdWriter","Write `ObjectVersionId` contents to a `SignedRequest`"],["ObjectVersionListParser","Parse `ObjectVersionList` from XML"],["ObjectVersionListWriter","Write `ObjectVersionList` contents to a `SignedRequest`"],["ObjectVersionParser","Parse `ObjectVersion` from XML"],["ObjectVersionStorageClassParser","Parse `ObjectVersionStorageClass` from XML"],["ObjectVersionStorageClassWriter","Write `ObjectVersionStorageClass` contents to a `SignedRequest`"],["ObjectVersionWriter","Write `ObjectVersion` contents to a `SignedRequest`"],["Part",""],["PartNumberMarkerParser","Parse `PartNumberMarker` from XML"],["PartNumberMarkerWriter","Write `PartNumberMarker` contents to a `SignedRequest`"],["PartNumberParser","Parse `PartNumber` from XML"],["PartNumberWriter","Write `PartNumber` contents to a `SignedRequest`"],["PartParser","Parse `Part` from XML"],["PartWriter","Write `Part` contents to a `SignedRequest`"],["PartsParser","Parse `Parts` from XML"],["PartsWriter","Write `Parts` contents to a `SignedRequest`"],["PrefixParser","Parse `Prefix` from XML"],["PrefixWriter","Write `Prefix` contents to a `SignedRequest`"],["PutObjectOutput",""],["PutObjectOutputParser","Parse `PutObjectOutput` from XML"],["PutObjectOutputWriter","Write `PutObjectOutput` contents to a `SignedRequest`"],["PutObjectRequest","NB: PutObjectRequest is *not* JSON decodable without implementing a custom to_json trait because of Option<&'a [u8]>."],["QueueConfiguration","Container for specifying an configuration when you want Amazon S3 to publish events to an Amazon Simple Queue Service (Amazon SQS) queue."],["Redirect",""],["RedirectAllRequestsTo",""],["ReplicationRule",""],["RestoreObjectOutput",""],["RestoreObjectOutputParser","Parse `RestoreObjectOutput` from XML"],["RestoreObjectOutputWriter","Write `RestoreObjectOutput` contents to a `SignedRequest`"],["RestoreObjectRequest",""],["RestoreObjectRequestParser","Parse `RestoreObjectRequest` from XML"],["RestoreObjectRequestWriter","Write `RestoreObjectRequest` contents to a `SignedRequest`"],["RestoreRequest",""],["RestoreRequestParser","Parse `RestoreRequest` from XML"],["RestoreRequestWriter","Write `RestoreRequest` contents to a `SignedRequest`"],["Tag",""],["TagParser","Parse `Tag` from XML"],["TagSetParser","Parse `TagSet` from XML"],["TagSetWriter","Write `TagSet` contents to a `SignedRequest`"],["TagWriter","Write `Tag` contents to a `SignedRequest`"],["TopicConfiguration","Container for specifying the configuration when you want Amazon S3 to publish events to an Amazon Simple Notification Service (Amazon SNS) topic."],["UploadIdMarkerParser","Parse `UploadIdMarker` from XML"],["UploadIdMarkerWriter","Write `UploadIdMarker` contents to a `SignedRequest`"]],"type":[["DeleteMarkerVersionId",""],["DeleteMarkers",""],["DeletedObjects",""],["Expires",""],["MaxParts",""],["MaxUploads",""],["MultipartUploadList",""],["NextPartNumberMarker",""],["NextUploadIdMarker",""],["NextVersionIdMarker",""],["ObjectIdentifierList",""],["ObjectKey",""],["ObjectMetadataList",""],["ObjectStorageClass",""],["ObjectVersionId",""],["ObjectVersionList",""],["ObjectVersionStorageClass",""],["PartNumber",""],["PartNumberMarker",""],["Parts",""],["Prefix","Partial object path"],["TagSet",""],["UploadIdMarker",""]]});